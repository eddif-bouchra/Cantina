1. HTML5 (Structure)
L'application repose sur des balises sémantiques pour organiser l'interface :

Conteneurs & Sections : <!-- <header>, <main>, <section>, <article>, <div> -->

Formulaires et Saisies : <!-- <form>, <label>, <input>, <select>, <button>.-->

Contenus : <!-- <h1> à <h3>, <p>, <img>, <strong>.-->

2. Tailwind CSS (Mise en forme et Responsive)
Framework utilitaire basé sur des classes pour styliser l'application :

Espacements & Flexbox/Grid : Utilisation de classes comme m-4, p-4, flex (items-center, justify-between, gap-4) et grid (grid-cols-1, md:grid-cols-2, lg:grid-cols-3) pour des mises en page adaptatives.

Design : Gestion des couleurs (bg-green-600, text-white), des bordures (rounded-xl), des états interactifs (hover:bg-green-700) et de la visibilité (hidden, flex).

Responsive : Utilisation de préfixes (sm:, md:, lg:) pour s'adapter à toutes les tailles d'écran.

3. JavaScript  (Logique et Données)
Variables et types : Utilisation de const (références fixes, tableaux modifiables via push()) et let (valeurs réassignables).

Structures de données : Tableaux ([]) pour stocker les listes (recettes, jours) et objets ({}) pour structurer une recette (nom, prix, catégorie, image).

Logique : Fonctions réutilisables, structures conditionnelles (if) pour valider les saisies, et boucles (for...of) pour parcourir les tableaux.

4. DOM et Événements
Manipulation du DOM :

Sélection d'éléments via document.getElementById() ou document.querySelector().

Modification dynamique avec innerHTML, textContent, createElement() et appendChild().

Gestion des classes (classList) : Utilisation de .add(), .remove() et .toggle() pour ouvrir/fermer les fenêtres modales (ex: basculer entre hidden et flex).

Événements (addEventListener) : Écoute des actions utilisateur telles que click (boutons, modales), submit (avec e.preventDefault() pour stopper le rechargement de page), change (listes déroulantes) et input (recherche en temps réel).

5. Fonctionnalités Clés du Projet
Gestion des recettes : Formulaire de saisie sécurisé, validation des champs obligatoires (avec trim()), ajout dynamique et affichage sous forme de cartes.

Planning et budget : Organisation des repas par jour (lundi au vendredi) selon trois catégories (Entrée, Plat, Dessert), avec un plafond budgétaire journalier fixé à 50 DH.

6. Installation et Liens Utiles
Commandes clés : npm install tailwindcss @tailwindcss/cli puis compilation du CSS via la CLI Tailwind (--watch).