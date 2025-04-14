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

gsap.fromTo(".titulo-projeto", 
    { visibility: "visible", opacity: 0, y: 100 }, 
    { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.3 }
);

gsap.fromTo(".titulo-plural", 
    { visibility: "visible", opacity: 0, y: 100 }, 
    { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 1 }
);



const counters = document.querySelectorAll(".counter");
  let started = false;

  const startCounting = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const speed = 30;
      let count = 0;

      // Detectar sufixo com base no label
      const label = counter.nextElementSibling.textContent.toLowerCase();
      let suffix = "";

      if (label.includes("satisfação")) {
        suffix = "%";
      } else if (target >= 1000) {
        suffix = "K+";
      }

      const displayTarget = suffix === "K+" ? target / 1000 : target;

      const updateCount = () => {
        count += Math.ceil(displayTarget / 30);
        if (count >= displayTarget) {
          counter.textContent = displayTarget + suffix;
        } else {
          counter.textContent = count + suffix;
          setTimeout(updateCount, speed);
        }
      };

      updateCount();
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        startCounting();
        started = true;
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector(".counter-section"));