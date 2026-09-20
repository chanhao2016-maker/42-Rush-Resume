document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll(".sidebar-menu-container > a");

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -70% 0px", 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});