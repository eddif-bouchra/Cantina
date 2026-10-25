const openPopup = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const annuler = document.getElementById("annuler");

openPopup.addEventListener("click", function () {
    popup.classList.remove("hidden");
    popup.classList.add("flex");
});

annuler.addEventListener("click", function () {
    popup.classList.add("hidden");
    popup.classList.remove("flex");
});