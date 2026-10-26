const openPopup = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const annuler = document.getElementById("annuler");
const hamza = document.getElementById("")

openPopup.addEventListener("click", function () {
    popup.classList.remove("hidden");
    popup.classList.add("flex");
});

annuler.addEventListener("click", function () {
    popup.classList.add("hidden");
    popup.classList.remove("flex");
});

let recipes = [
    {
        id:1,
        nom: "Salade marocaine",
        prix: 12,
        categorie: "Entre",
        badge: "Végétarien"
    },
    {
        id:2,
        nom: "Soupe de légumes",
        prix: 10,
        categorie: "Entre",
        badge: "Bio"
    },
    {   id:3,
        nom: "Tajine de poulet",
        prix: 30,
        categorie: "plat principal",
        badge: "Classique"
    },
    {   id:4,
        nom: "Couscous végétarien",
        prix: 28,
        categorie: "plat principal",
        badge: "Végétarien"
    },
    {   id:5,
        nom: "Pâtes à la tomate",
        prix: 20,
        categorie: "plat principal",
        badge: "Classique"
    },
    {   id:6,
        nom: "Salade de fruits",
        prix: 8,
        categorie: "Dessert",
        badge: "Bio"
    },
    {   id:7,
        nom: "Yaourt nature",
        prix: 5,
        categorie: "Dessert",
        badge: "Classique"
    },
    {   id:8,
        nom: "Cake à la banane",
        prix: 10,
        categorie: "Dessert",
        badge: "Végétarien"
    }
];

const listeRecettes = document.getElementById("listeRecettes");


function afficherRecettes() {
    listeRecettes.innerHTML = "";

    for (let recette of recipes) {
        let article = document.createElement("article");

        article.innerHTML = `
            <div class="bg-[#f6efe1] mb-4 rounded-2xl p-2">
            <div class="flex justify-between mb-3"><h3 class="bg-[#fffaf0] text-[#2a1d12] rounded-2xl p-2">${recette.nom}</h3>
            <p class="bg-[#c4552d] text-white rounded-2xl p-2 ">${recette.prix} DH</p></div>
            <div class="flex "><p class="pr-2 bg-green-700 text-white mr-1.5 rounded-3xl">${recette.categorie}</p>
            <p class="bg-gray-400 text-white rounded-3xl">${recette.badge}</p></div>
            <div class="flex  justify-between mt-4">
            <button data-id="${recette.id}" class="bg-[#fffaf0] text-[#2a1d12] rounded-2xl">Modifier</button>
            <button data-id="${recette.id}" class="bg-red-700 text-white rounded-2xl">Supprimer</button>
            </div>
            </div>
        `;

        listeRecettes.appendChild(article);
    }
}



const nom = document.getElementById("nom");
const prix = document.getElementById("prix");
const categorie = document.getElementById("categ");
const enregistrer = document.getElementById("enregistrer");

function ajouterRecettes() {
    let badge = document.querySelector('input[name="badge"]:checked');

    if (
        nom.value.trim() === "" ||
        prix.value === "" ||
        Number(prix.value) <= 0 ||
        categorie.value === "" ||
        badge === null
    ) {
        alert("Remplissez tous les champs correctement");
        return;
    }

    let recette = {
        nom: nom.value.trim(),
        prix: Number(prix.value),
        categorie: categorie.value,
        badge: badge.value
    };

    recipes.push(recette);

    afficherRecettes();

    nom.value = "";
    prix.value = "";
    categorie.value = "";
    badge.checked = false;

    popup.classList.add("hidden");
    popup.classList.remove("flex");
}

enregistrer.addEventListener("click", ajouterRecettes);

afficherRecettes();

