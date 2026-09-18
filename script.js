const card = document.querySelector(".card");
const closedCard = document.querySelector(".closed-card");
const openCard = document.querySelector(".open-card");

closedCard.addEventListener("click", function () {
    card.classList.add("open");
});

openCard.addEventListener("click", function () {
    card.classList.remove("open");
});

