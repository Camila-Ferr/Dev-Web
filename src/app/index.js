import {Livro} from './script.js';
import $ from 'jquery';
import '../styles/style.css'

 //Array com os livros que serão convertidos para objetos do tipo livro
 const arrayLivros = [
    { titulo: 'D. sobre a metástase', autor: "André Sant'Anna",editora: 'Todavia', isbn: '9786556921686',imagem: 'images/card1.jpg', sinopse: 'Eis uma forma para descrever os textos reunidos neste volume: a metástase que está no título tem seu próprio idioma, e esse idioma pode ser voltado contra ela mesma. ' },
    { titulo: 'A vida futura', autor: 'Sérgio Rodrigues',editora: 'Companhia das Letras', isbn: '9786559211999',imagem: 'images/card2.jpg', sinopse: 'Ao saber que seus livros seriam reescritos para alcançar mais leitores, os finados José de Alencar e Joaquim Maria Machado de Assis abandonam o Olimpo e desembarcam no Rio de Janeiro de 2020. Ali, Jota e Jota se envolvem com milicianos, conhecem uma jovem estudante tão enigmática quanto apaixonante e se veem às voltas com os debates identitários contemporâneos.' },
    { titulo: 'Do começo ao fim', autor: 'Marcelo Rubens Paiva',editora: 'Alfaguara', isbn: '9788556521453',imagem: 'images/card3.jpg', sinopse: 'Lívia estudava engenharia na Unicamp. Vinha de uma família rica de Campinas e havia se inscrito num curso de francês na universidade para conseguir ler as revistas de moda. O narrador deste romance a conhece aí, no primeiro dia de aula, ambos com 18 anos.' },
    { titulo: 'A aurora da lótus', autor: 'Babi A. Sette',editora: 'Verus', isbn: '9786559240340',imagem: 'images/card4.jpg', sinopse: 'Egito, 1283 a.C. Dentro do bairro hebreu vive Zarah, uma jovem que sonha com a liberdade e com dias melhores para o seu povo. Salva de um ataque por Ramose, um comandante egípcio, ela se envolve em um jogo de sedução e é arrebatada por uma paixão proibida.' }    
];

function gerarArrayLivros(livros) {
    const resultado = [];
    for (const obj of livros) {
        const livro = new Livro(obj.titulo, obj.autor, obj.editora, obj.isbn, obj.imagem, obj.sinopse);
        resultado.push(livro);
    }
    return resultado;
}
function gerarCard(livros){
    const card = livros.map(livo =>
      
        `<div class="col-md-5 col-xl-3">
            <div class="card mt-3" style="width: 18rem;">
                <div class="p-2">
                    <img src="${livo.imagem}" style="max-width: 16rem; max-height: 23rem;"  alt='${livo.titulo}' >
                </div>
                <div class="card-body" >
                    <h4 class="card-title">${livo.titulo}</h4>
                    <p class="card-text">${livo.sinopse}</p>
                </div>
            
                <ul class="list-group list-group-flush">
                    <li class="list-group-item font-weight-bold">${livo.autor}</li>
                    <li class="list-group-item font-weight-bold">${livo.editora}</li>
                    <li class="list-group-item font-weight-bold">${livo.isbn}</li>
                </ul>
            </div>
        </div>
        `
    );
    return card;
}
// Join é usado para que as linhas não fiquem separadas por "," (default) e sim por espaço
const cards = 
    `<div class="container text-center">
        <div class="row">${gerarCard(gerarArrayLivros(arrayLivros)).join(" ")}  
        </div>                 
    </div>`;

const conteudo = document.getElementById('conteudo');
$(conteudo).append(cards);

