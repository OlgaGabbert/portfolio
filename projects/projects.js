document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const prevButtons = document.querySelectorAll(".prev-button");
    const nextButtons = document.querySelectorAll(".next-button");
    let currentCardIndex = 0;

    function showCard(index) {
        if (index < 0) {
            index = cards.length - 1;
        } else if (index >= cards.length) {
            index = 0;
        }

        cards.forEach((card) => {
            card.style.display = "none";
        });

        cards[index].style.display = "flex";
        currentCardIndex = index;
    }

    prevButtons.forEach((button) => {
        button.addEventListener("click", () => {
            showCard(currentCardIndex - 1);
        });
    });

    nextButtons.forEach((button) => {
        button.addEventListener("click", () => {
            showCard(currentCardIndex + 1);
        });
    });

    showCard(currentCardIndex);
});
