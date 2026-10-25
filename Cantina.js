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

let recipes = [];

const listeRecettes = document.getElementById("listeRecettes");


function afficherRecettes() {
    listeRecettes.innerHTML = "";

    for (let recette of recipes) {
        let article = document.createElement("article");

        article.innerHTML = `
            <h3>${recette.nom}</h3>
            <p>${recette.prix} DH</p>
            <p>${recette.categorie}</p>
            <p>${recette.badge}</p>
        `;

        listeRecettes.appendChild(article);
    }
}
