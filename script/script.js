document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".container-escritorio");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("aparecendo");
                    observer.unobserve(entry.target); // Remove do observer após a animação
                }
            });
        },
        { threshold: 0.2 }
    );

    containers.forEach((container) => observer.observe(container));
});
