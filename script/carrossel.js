const wrapper = document.querySelector('.carousel-wrapper');
const imagens = document.querySelectorAll('.img-carrossel');
const totalImagens = imagens.length;
let indiceAtual = 0;


function trocarImagem() {
    indiceAtual++;

    if (indiceAtual >= totalImagens) {
        indiceAtual = 0; 
    }

    wrapper.style.transform = `translateX(-${indiceAtual * 100}%)`;
}


setInterval(trocarImagem, 6000); 
  
