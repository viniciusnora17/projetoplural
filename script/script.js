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
        { threshold: 0.3 }
    );

    observer.observe(sobreNos);
});