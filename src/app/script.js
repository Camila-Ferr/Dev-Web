/*constructor function. 
1- Começa com letra maiúscula
2- Para gerar um objeto, usa-se "new"*/

//O pai dequalquer instância desse objeto é prototype

/*_ notação para privado, sendo que é possível retornar mesmo com a notação, ou seja, 
é apenas uma convenção*/
export class Livro {
    constructor(titulo, autor, editora, isbn, imagem, sinopse) {
        this._titulo = titulo,
        this._autor = autor,
        this._editora = editora,
        this._isbn = isbn,
        this._imagem = imagem;
        this._sinopse = sinopse;
    }
};
/*Faz parte do prototype, que é o pai do objeto livro, então por herança,
toda instância da constructor function livro herda os métodos abaixo*/

/* Na escrita em ES6 ficaria apenas get atributo, contudo, a decisão de fazer dessa maneira se deu
para mostrar que a classe livro também é uma constructor function e por baixo dos panos, as duas
maneiras (como function e como classe) funcionam da mesma forma, tendo como pai o prototype.*/
Object.defineProperties(Livro.prototype, {
    titulo:{
        get: function(){
            return `${this._titulo}`;
        }
    },
    autor:{
        get: function(){
            return `${'Autor: '+this._autor}`;
        }
    },
    editora:{
        get: function(){
            return `${'Editora: '+this._editora}`;
        }
    },
    isbn:{
        get: function(){
            return `${'ISBN: ' +this._isbn.slice(0,3) + '-' +this._isbn.slice(3,13)}`;
        }
    },
    imagem:{
        get: function(){
            return `${this._imagem}`;
        }
    },
    sinopse:{
        get: function(){
            return `${this._sinopse.slice(0,100) + '...'}`;
        }
    },

})


