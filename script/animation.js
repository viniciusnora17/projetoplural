document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate"); 
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 }); 

    
    document.querySelectorAll(".line, .line2, .line3").forEach(el => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-title"); 
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 });

    
    document.querySelectorAll(".title-oab, .title-biagio, .title-piscina").forEach(el => observer.observe(el));
});
