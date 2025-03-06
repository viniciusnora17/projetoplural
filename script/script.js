document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".container-escritorio");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("aparecendo");
                    observer.unobserve(entry.target); 
                }
            });
        },
        { threshold: 0.2 }
    );

    containers.forEach((container) => observer.observe(container));
});


document.addEventListener("DOMContentLoaded", function () {

    const sobreNos = document.querySelector("#sobre-nos");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    sobreNos.classList.add("aparecer");
                }
            });
        },
        { threshold: 0.5 } 
    );

    observer.observe(sobreNos);
});

document.addEventListener("DOMContentLoaded", function () {


    let title = document.querySelector(".container-texto h2");
    let text = title.innerText;
    title.innerHTML = ""; 

    let delay = 0; 
    text.split("").forEach((letter) => {
        let span = document.createElement("span");
        span.innerText = letter;
        
        if (letter !== " ") {
            span.style.animation = `fadeInLetter 0.1s ease-in forwards`;
            span.style.animationDelay = `${delay}s`;
            delay += 0.1; 
        }

        title.appendChild(span);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".segundo-container");
    const texto = document.querySelector(".containersegundo-texto");
    const imagem = document.querySelector(".silas-samuel");

    function checkScroll() {
        const posicao = container.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicao < alturaTela * 0.75) { // Quando 75% do container estiver visível
            texto.classList.add("animar-esquerda");
            imagem.classList.add("animar-direita");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Para verificar se a seção já está visível ao carregar a página
});
