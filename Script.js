// Agro Forte, Futuro Sustentável

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(1.03)";

        setTimeout(() => {
            card.style.transform = "";
        }, 200);
    });
});

console.log("Site carregado com sucesso!");
