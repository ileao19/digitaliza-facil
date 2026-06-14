function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function toggleTheme() {
    const body = document.body;
    const button = document.querySelector(".theme-toggle");

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        button.textContent = "☀️";
        button.setAttribute("aria-label", "Ativar tema claro");
    } else {
        button.textContent = "🌙";
        button.setAttribute("aria-label", "Ativar tema escuro");
    }
}

// Fecha o menu ao clicar em um link no celular
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#menu a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            const menu = document.getElementById("menu");
            if (window.innerWidth < 768) {
                menu.classList.remove("show");
            }
        });
    });
});