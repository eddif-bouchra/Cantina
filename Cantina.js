const openPopup = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const annuler = document.getElementById("annuler");
const popupe = document.getElementById("popupe");
const openpopupe = document.getElementById("openpopupe")
  function ajout(){
    popup.classList.remove("hidden");
    popup.classList.add("flex");
    }

openPopup.addEventListener("click", function () {
  ajout();
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
        categorie: "Entrée",
        badge: "Végétarien"
    },
    {
        id:2,
        nom: "Soupe de légumes",
        prix: 10,
        categorie: "Entrée",
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
            <div class="flex justify-between mb-3"><h3 class="bg-[#fffaf0] text-[#2a1d12] rounded-2xl px-2">${recette.nom}</h3>
            <p class="bg-[#c4552d] text-white rounded-2xl px-2 ">${recette.prix} DH</p></div>
            <div class="flex "><p class="pr-2 bg-green-700 text-white mr-1.5 rounded-3xl px-2">${recette.categorie}</p>
            <p class="bg-gray-400 text-white rounded-3xl px-2">${recette.badge}</p></div>
            <div class="flex  justify-between mt-4">
            <button data-id="${recette.id}" class="bg-[#fffaf0] text-[#2a1d12] rounded-2xl px-2">Modifier</button>
            <button data-id="${recette.id}"  class="bg-red-700 text-white rounded-2xl px-2">Supprimer</button>
            </div>
            </div>
        `;

        listeRecettes.appendChild(article);
    }
}



const nom = document.getElementById("nom");
const prix = document.getElementById("prix");
const categorie = document.getElementById("categ");
const badge = document.getElementById("badge");
const enregistrer = document.getElementById("enregistrer");

function ajouterRecettes() {
    if (
        nom.value.trim() === "" ||
        prix.value === "" ||
        Number(prix.value) <= 0 ||
        categorie.value === "" ||
        badge.value === ""
    ) {
        alert("Remplissez tous les champs correctement");
        return;
    }

    let recette = {
        id:Date.now(),
        nom: nom.value.trim(),
        prix: Number(prix.value),
        categorie: categorie.value,
        badge: badge.value
    };

    recipes.push(recette);

    afficherRecettes();

    nom.value = "";
    prix.value  = "";
    categorie.value  = "";
    badge.value = ""

    popup.classList.add("hidden");
    popup.classList.remove("flex");
}

enregistrer.addEventListener("click", ajouterRecettes);

afficherRecettes();
const nom_modi = document.getElementById("nom_modi");
const prix_modi = document.getElementById("prix_modi");
const categorie_modi = document.getElementById("categ_modi");
const badge_modi = document.getElementById("Badge_modi");
const enregistrer_modi = document.getElementById("enregistrer_modi");
const annuler_modi = document.getElementById("annuler_modi");
let elementEnCoursModif = null;

function SupprimerRecettes(id) {
    recipes = recipes.filter(function(recette) {
        return recette.id !== id;
    });

    afficherRecettes();
}

listeRecettes.addEventListener("click", function(e) {
    if (e.target.textContent === "Supprimer") {
        let id = Number(e.target.dataset.id);
        SupprimerRecettes(id);
    }
    if(e.target.textContent === "Modifier"){
        popupe.classList.remove("hidden");
        popupe.classList.add("flex");
        let id = Number(e.target.dataset.id);
        // console.log(id)
        recipes.forEach(element => {
            if(element.id === id){
                elementEnCoursModif = element;
                nom_modi.value = element.nom;
                prix_modi.value = element.prix;
                categorie_modi.value = element.categorie;
                badge_modi.value = element.badge;
                enregistrer_modi.addEventListener("click", (e)=>{
                    element.nom = nom_modi.value;
                    element.prix = prix_modi.value;
                    element.categorie = categorie_modi.value;
                    element.badge = badge_modi.value;
                });
            }
        });
        enregistrer_modi.addEventListener("click", function() {
    if (elementEnCoursModif !== null) {
        elementEnCoursModif.nom = nom_modi.value;
        elementEnCoursModif.prix = Number(prix_modi.value);
        elementEnCoursModif.categorie = categorie_modi.value;
        elementEnCoursModif.badge = badge_modi.value;
        


        afficherRecettes();
        popupe.classList.add("hidden");
        popupe.classList.remove("flex");

        elementEnCoursModif = null;
    }
});
if (annuler_modi) {
    annuler_modi.addEventListener("click", function() {
        popupe.classList.add("hidden");
        popupe.classList.remove("flex");
        elementEnCoursModif = null;
    });
}
        
    }
});


let planning = [{
    Lundi: {
        "Entrée": null,
        "plat principal": null,
        "Dessert": null
    },
    Mardi: {
        "Entrée": null,
        "plat principal": null,
        "Dessert": null
    },
    Mercredi: {
        "Entrée": null,
        "plat principal": null,
        "Dessert": null
    },
    Jeudi: {
        "Entrée": null,
        "plat principal": null,
        "Dessert": null
    },
    Vendredi: {
        "Entrée": null,
        "plat principal": null,
        "Dessert": null
    },
}]