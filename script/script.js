
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