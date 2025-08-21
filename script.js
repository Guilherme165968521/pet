document.addEventListener("DOMContentLoaded", () => {
    // Função para mostrar o carregamento
    const loader = document.getElementById("loader");
    const mainContent = document.querySelector("main");
    const footer = document.querySelector("footer");

    // Mostra o loader enquanto a página carrega
    loader.style.display = "block";

    // Simula o carregamento de conteúdo
    setTimeout(() => {
        // Esconde o loader e exibe o conteúdo
        loader.style.display = "none";
        mainContent.style.opacity = 1;
        footer.style.opacity = 1;
        mainContent.style.transition = "opacity 1s ease-in-out";
        footer.style.transition = "opacity 1s ease-in-out";
    }, 3000); // 3 segundos de simulação de carregamento

    // Interação com o mapa (mudando a opacidade)
    const updateMapButton = document.getElementById("update-map");
    updateMapButton.addEventListener("click", () => {
        // Efeito de "clicando" no botão de atualização
        updateMapButton.style.transform = "scale(0.98)";
        updateMapButton.style.transition = "transform 0.2s ease";

        // Revertendo o efeito após o clique
        setTimeout(() => {
            updateMapButton.style.transform = "scale(1)";
        }, 200);

        // Simula a troca de localização no mapa
        alert("Atualizando o mapa...");

        // Anima o mapa com fade-in
        const iframe = document.querySelector("iframe");
        iframe.style.opacity = 0;
        iframe.style.transition = "opacity 1s ease-in-out";
        
        setTimeout(() => {
            iframe.style.opacity = 1;
        }, 500);
    });

    // Efeito de hover nas opções do menu
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "translateY(-5px)";
            link.style.transition = "transform 0.3s ease";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "translateY(0)";
        });
    });

    // Animação de scroll suave para âncoras
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: "smooth",
            });
        });
    });
});

var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/68a7609f3b2d9e1926a1bf80/1j36t2s3r';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();