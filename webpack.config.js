const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//Módulo exporta um objeto que vai conter config do webpack
module.exports={
    mode: 'development',
    //Indica que ele deve procurar na pasta source
    context: path.resolve(__dirname,'src'),

    //Início do bundle, parâmetros de entrada. Aqui, os parâmetros são os arquivos de refêrencia.
    entry: {
        app: path.resolve(__dirname, './src/app/index.js'),
        vendor: path.resolve(__dirname, './src/vendor/vendor.js')
    },
    //Parâmetros de saída
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        static: './dist',

        /*Assim que o dev server for colocado no ar, será aberto uma janela do 
        browser que irá submeter uma requisição http para localhost:8080 e em seguida
        a página index.html será exibida*/
        open: true
    },
    plugins: [
        //Insere automaticamente os bundles no html(dist) e gera os bundles nomeados como hash
        new HtmlWebpackPlugin({
            //Nome do arquivo que será gerado na pasta dist
            filename: 'index.html',
            /*Arquivo que será usado de template para gerar o da pasta dist*/
            template: 'index.html',
            //Quais chunks serão geradas e incluídas na pasta dist
            chunks: ['app','vendor']
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns:[
                {from: "images", to:"images"},
                {from: "favicon.ico", to:"favicon.ico"} 
            ]
        })
    ],
    
    module: {
        // Regras usadas no pré processamento
        rules: [
            {
                // Transpila todos os arquivos q termina com .js exceto os node_modules
                test: /.js$/,
                exclude: /node_modules/,

                //Loader que vai ser usado sobre os arquivos js
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Definindo com quais browses o codigo gerado sera compativel
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                //Carregar todos os css
                test: /.css$/,
                /*Loader: Insere o arquivo css como string como js gerado pelo webpack
                Style-loader: Recupera a string e insere no DOM*/ 
                use: ['style-loader', 'css-loader']

            }
        ]
    },
    
    /*Referenciando o bundle gerado com os arquivos originais. Mapeando os arquivos (Facilidade para 
    debug, por exemplo)*/
    devtool: 'source-map',
}
