const imagens = [
    "img/foto-carrossel-casa.png",
    "img/img-carrossel.jpg",
    "img/img-oab-depois.jpg"
];

const imagemCarrossel = document.querySelector('.img-carrossel');
const botaoProximo = document.querySelector('.text-carrossel');

let indiceAtual = 0;

botaoProximo.addEventListener('click', () => {
    
    indiceAtual++;

    if (indiceAtual >= imagens.length + 1) {
        indiceAtual = 0;
    }

    if (indiceAtual === 0) {
  
        imagemCarrossel.src = "img/teste.jpg";
    } else {

        imagemCarrossel.src = imagens[indiceAtual - 1];
    }

    
    imagemCarrossel.style.height = "auto"; 

    
});