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

let img = [
    "img/foto-carrossel-casa.png",
    "img/img-carrossel.jpg",
    "img/img-oab-depois.jpg"
];

// Seleciona todas as imagens no carrossel
const imagensCarrossel = document.querySelectorAll('.img-carrossel');

window.addEventListener('resize', () => {
    // Verifica se a largura da tela é menor ou igual a 480px
    if (window.innerWidth <= 480) {
        // Aplica o height fixo para telas pequenas
        imagensCarrossel.forEach((imagem) => {
            imagem.style.height = "360px";
        });
    } else {
        // Para telas maiores, aplica o height fixo baseado na altura da primeira imagem
        imagensCarrossel.forEach((imagem) => {
            imagem.style.height = `${alturaImagem}px`;
        });
    }
});