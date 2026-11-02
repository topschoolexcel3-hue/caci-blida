# 📊 Guide de Mise à Jour Dynamique (Google Sheets & Excel) – CCI Mitidja-Blida

Votre site web (**https://ccimitidjablida.pages.dev/**) est désormais connecté **en temps réel** à votre feuille **Google Sheets** ainsi qu'au fichier **`data/site-data.xlsx`** sur GitHub !

---

## 🚀 Méthode 1 (La plus rapide – En Temps Réel via Google Sheets)

1. Ouvrez votre feuille Google Sheets connectée :
   👉 **[https://docs.google.com/spreadsheets/d/1Nu6DSgcqwtmlOivf51qk5Oxk2g_B9Gms6McztBpjwKM/edit](https://docs.google.com/spreadsheets/d/1Nu6DSgcqwtmlOivf51qk5Oxk2g_B9Gms6McztBpjwKM/edit)**
2. Modifiez directement n'importe quelle cellule dans les 4 onglets (**`Parametres`**, **`Actualites`**, **`Formations`**, **`Textes`**).
3. Actualisez votre site web (**`Ctrl + F5`** sur **https://ccimitidjablida.pages.dev/**) : vos modifications apparaissent **immédiatement en direct** sans même avoir besoin de télécharger ou d'envoyer le fichier sur GitHub !

> 💡 **Important pour Google Sheets** : Gardez le partage du document sur **« Tous les utilisateurs disposant du lien peuvent consulter » (Lecteur)** afin que le site web puisse lire les 4 feuilles en direct.

---

## 💻 Méthode 2 (Via le fichier `data/site-data.xlsx` sur GitHub)

Vous pouvez également modifier le fichier **`data/site-data.xlsx`** dans Excel sur votre ordinateur puis le téléverser dans le dossier **`data/`** sur GitHub (`Add file` → `Upload files` → `Commit changes`).

---

## 📋 Structure des 4 Feuilles (Onglets)

### 1️⃣ Feuille `Parametres` (Coordonnées, Site Web & Tarifs)
Modifiez les colonnes **`Valeur_FR`**, **`Valeur_AR`** et **`Valeur_EN`** :
- `telephone_barre` : Téléphone et Mobile affichés tout en haut du site
- `adresse` : Adresse du siège (affichée dans Contact, Pied de page et barres latérales)
- `mobile` : Numéro de mobile (`0661 61 32 05`)
- `tel_fax` : Numéro de téléphone fixe / Fax (`020 49 18 28`)
- `email_1` : Email principal (`cci-mitidja@caci.dz`)
- `email_2` : Email secondaire (`ccimitidja.20@gmail.com`)
- `site_web` : Adresse du site web (`https://ccimitidjablida.pages.dev/`)
- `cotisation_physique` : Montant de la cotisation annuelle Personne Physique (`1 000`)
- `cotisation_morale` : Montant de la cotisation annuelle Personne Morale (`3 000`)
- `nom_court` : Nom principal (`CCI MITIDJA - BLIDA`)
- `nom_complet` : Sous-titre du logo dans les 3 langues

---

### 2️⃣ Feuille `Actualites` (Page Actualités)
Chaque ligne correspond à une carte d'actualité :
- **`Actif`** : `OUI` pour afficher l'actualité, `NON` pour la masquer.
- **`Couleur`** : `green` (vert), `blue` (bleu) ou `gold` (doré).
- **`Icone`** : Icône FontAwesome (ex. `fa-handshake`, `fa-graduation-cap`, `fa-id-card`, `fa-bullhorn`, `fa-calendar-alt`).
- **`Categorie_FR` / `Categorie_AR` / `Categorie_EN`** : Badge de catégorie.
- **`Titre_FR` / `Titre_AR` / `Titre_EN`** : Titre de l'actualité dans les 3 langues.
- **`Resume_FR` / `Resume_AR` / `Resume_EN`** : Texte descriptif dans les 3 langues.
- **`Lien`** : Page cible du bouton « En savoir plus » (ex. `adhesion.html`, `missions.html#formations`, `contact.html`).

---

### 3️⃣ Feuille `Formations` (Accueil & Page Missions)
Chaque ligne correspond à un domaine de formation affiché sur la page d'accueil et sur la page Missions :
- **`Actif`** : `OUI` pour afficher la formation, `NON` pour la masquer.
- **`Icone`** : Icône FontAwesome (ex. `fa-robot`, `fa-briefcase`, `fa-calculator`, `fa-bullhorn`, `fa-user-tie`, `fa-shield-alt`, `fa-handshake`).
- **`Titre_FR` / `Titre_AR` / `Titre_EN`** : Intitulé de la formation en Français, Arabe et Anglais.

---

### 4️⃣ Feuille `Textes` (Textes des sections du site)
Permet de modifier les textes officiels du site (Bannières d'accueil, Notre Mission, Notre Ambition, Nos 5 Engagements, etc.) en Français (`FR`), Arabe (`AR`) et Anglais (`EN`).
