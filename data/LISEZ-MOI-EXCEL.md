# 📊 Guide de Mise à Jour Dynamique via Excel (`data/site-data.xlsx`)

Le site de la **CCI Mitidja-Blida** est lié dynamiquement au fichier Excel **`data/site-data.xlsx`** présent dans ce dossier (sans aucune base de données).

---

## 🛠️ Comment mettre à jour le site avec Excel ?

1. **Téléchargez** le fichier `data/site-data.xlsx` depuis votre dépôt GitHub (ou ouvrez-le sur votre ordinateur avec **Microsoft Excel**, **LibreOffice Calc** ou **Google Sheets**).
2. **Modifiez les cellules souhaitées** dans l'un des 4 onglets :
   - **Onglet 1 : `Parametres`**
     - Modifiez les coordonnées (téléphone, mobile, adresse, emails) ou les tarifs d'adhésion (`cotisation_physique` = `1 000`, `cotisation_morale` = `3 000`) en Français (`Valeur_FR`), Arabe (`Valeur_AR`) et Anglais (`Valeur_EN`).
   - **Onglet 2 : `Actualites`**
     - Ajoutez une nouvelle ligne pour publier une nouvelle actualité ou un événement (mettez `OUI` dans la colonne `Actif`, ou `NON` pour masquer une actualité).
   - **Onglet 3 : `Formations`**
     - Ajoutez ou modifiez les formations professionnelles affichées sur le site (`Actif` = `OUI` ou `NON`, `Icone`, `Titre_FR`, `Titre_AR`, `Titre_EN`).
   - **Onglet 4 : `Textes`**
     - Modifiez n'importe quel texte du site (Bannières, Notre Mission, Nos 5 Engagements, Notre Ambition, etc.) dans les colonnes `FR`, `AR` et `EN`.
3. **Enregistrez** votre fichier sous le même nom : **`site-data.xlsx`**.
4. Sur GitHub, ouvrez le dossier **`data/`** $\rightarrow$ cliquez sur **`Add file`** $\rightarrow$ **`Upload files`** $\rightarrow$ glissez votre fichier `site-data.xlsx` mis à jour $\rightarrow$ cliquez sur **`Commit changes`**.
5. **C'est tout !** Le site lit automatiquement le fichier Excel en direct et met à jour toutes les pages en Français, Arabe et Anglais.
