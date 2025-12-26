if (location.protocol !== "https:" && location.hostname !== "localhost" && location.protocol !== "file:") {
    location.replace("https://" + location.hostname + location.pathname + location.search);
}


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar-custom");
    const section = document.querySelector("section"); // Primer section de la página

    window.addEventListener("scroll", function () {
        if (window.scrollY > section.offsetTop - navbar.offsetHeight) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollIcon = document.getElementById("scrollIcon");
    
    if (scrollIcon) {
        scrollIcon.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector("#about");

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const navbar = document.querySelector(".navbar");

    function setActiveLink() {
        let scrollPosition = window.scrollY;

        // Si el usuario scrollea, se activa el efecto
        if (scrollPosition > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Cambiar la sección activa
        links.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (section.offsetTop <= scrollPosition + 100 &&
                section.offsetTop + section.offsetHeight > scrollPosition + 100) {
                links.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveLink);
    setActiveLink(); // Ejecutar al cargar la página
});

document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector(".navbar-custom");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Estado inicial (sin cambiar tema, solo ícono)
    let isDark = false;
    themeToggle.addEventListener("click", () => {
        isDark = !isDark; // Alternar estado
        themeIcon.className = isDark ? "bi bi-sun-fill" : "bi bi-moon-fill"; // Cambiar ícono
    });
});

// Tema Dark
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Función para cambiar el tema
    // En tu función setTheme, agrega la actualización del footer
    function setTheme(theme) {
        htmlElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        updateButtonIcon(theme);
        updateCardStyles(theme);
        updateFooterStyles(theme); 
    }
    
    // Nueva función para el footer
    function updateFooterStyles(theme) {
        const footer = document.querySelector('footer.footer-custom');
        if (!footer) return;
        
        if (theme === 'dark') {
            footer.classList.add('footer-dark');
            footer.classList.remove('bg-white');
        } else {
            footer.classList.remove('footer-dark');
            footer.classList.add('bg-white');
        }
    }
    
    function updateButtonIcon(theme) {
      if (!themeToggleBtn) return;
      themeToggleBtn.innerHTML = theme === 'dark' ? 
        '<i class="bi bi-sun"></i>' : 
        '<i class="bi bi-moon"></i>';
    }

    function updateCardStyles(theme) {
        const cards = document.querySelectorAll('.card');
    
        cards.forEach(card => {
            // Eliminar bg-light del card principal en ambos temas
            card.classList.remove('bg-light', 'bg-dark', 'text-white');
    
            if (theme === 'dark') {
                card.classList.add('bg-dark', 'text-white');
    
                // Eliminar bg-light de los elementos internos
                const innerElements = card.querySelectorAll('.card-body');
                innerElements.forEach(inner => inner.classList.remove('bg-light'));
            }
        });
    }    
    
    // Función para alternar el tema
    function toggleTheme() {
      const currentTheme = htmlElement.getAttribute('data-bs-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    }
    
    // Inicializar tema
    function initTheme() {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
      
      setTheme(initialTheme);
      
      // Escuchar cambios en las preferencias del sistema (si no hay tema guardado)
      if (!savedTheme) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
          setTheme(e.matches ? 'dark' : 'light');
        });
      }
    }
    
    // Asignar evento al botón
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }
    
    // Iniciar
    initTheme();
  });

