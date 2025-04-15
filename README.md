# 🎓 Skoyo Academy

Bienvenue dans le projet **Skoyo Academy** [https://skoyo-academy.vercel.app](https://skoyo-academy.vercel.app) une plateforme moderne permettant d'explorer un catalogue de formations dynamiques, classées par niveau, avec filtres, recherche, pagination et animations douces grâce à `framer-motion`.

---

## 🚀 Aperçu

Explorez une UI élégante avec :

- Une Hero Section animée
- Un catalogue de formations responsive
- Des filtres par niveau (Débutant, Intermédiaire, Avancé) et par catégorie
- Un champ de recherche instantané
- Une pagination fluide
- Des animations d'entrée et de survol avec `framer-motion`

---

## 🛠️ Installation

```bash
# Clone le projet
git clone https://github.com/Joe-Itax/skoyo-academy.git

# Va dans le dossier
cd skoyo-academy

# Installe les dépendances
npm install

# Lance le serveur de dev
npm run dev
```

---

## 📁 Arborescence du projet

Le projet est structuré de manière modulaire pour une meilleure lisibilité, réutilisabilité et maintenabilité.

```bash
📦app
 ┣ 📂public                  # Fichiers statiques (favicon, images...)
 ┣ 📂src                     # Code source principal
 ┃ ┣ 📂assets               # Assets locaux comme des SVGs
 ┃ ┣ 📂components           # Composants réutilisables
 ┃ ┃ ┣ 📂formation-page-content
 ┃ ┃ ┃ ┣ formation-section.tsx       # Section principale listant les formations
 ┃ ┃ ┃ ┗ hero-section.tsx            # En-tête visuel avec titre/slogan
 ┃ ┃ ┣ 📂header                      # Navigation desktop/mobile
 ┃ ┃ ┣ 📂ui                          # Composants UI (shadcn UI)
 ┃ ┃ ┣ badge-niveau-formation.tsx   # Badge dynamique selon le niveau de la formation
 ┃ ┃ ┣ card-formation.tsx           # Carte présentant une formation
 ┃ ┃ ┣ formation-filter.tsx         # Filtres dynamiques (niveau, type, etc.)
 ┃ ┃ ┣ input-search.tsx             # Barre de recherche
 ┃ ┃ ┣ logo.tsx                     # Composant Logo
 ┃ ┃ ┗ pagination-formation.tsx     # Pagination custom
 ┃ ┣ 📂data                 # Données statiques JSON
 ┃ ┣ 📂hooks                # Hooks custom React
 ┃ ┣ 📂lib                  # Fonctions utilitaires
 ┃ ┣ 📂pages                # Pages de l'application (structure type Next.js)
 ┃ ┃ ┣ formation/page.tsx         # Page listant toutes les formations
 ┃ ┃ ┗ root-layout.tsx            # Layout global de l’app
 ┃ ┣ 📂styles              # Fichiers CSS globaux
 ┃ ┣ App.tsx              # Entry point React
 ┃ ┣ main.tsx             # Point de montage dans le DOM
 ┃ ┗ vite-env.d.ts        # Typage Vite
 ┣ package.json            # Dépendances & scripts
 ┣ tsconfig*.json          # Config TypeScript
 ┣ vite.config.ts          # Config Vite
 ┣ index.html              # Template HTML principal
┗ .gitignore               # Fichiers ignorés par Git

```

---

## 🧠 Stack utilisée

- React + TypeScript
- Vite (build ultra rapide)
- Framer Motion (animations fluides)
- TailwindCSS (styling rapide et responsive)
- Shadcn UI, Aceternity UI (composants stylés)
- JSON mocké comme base de données temporaire

---

## ✨ Fonctionnalités clés

| Fonctionnalité        | Description                                               |
| --------------------- | --------------------------------------------------------- |
| Hero animé            | Texte avec animation d'entrée, Background animé           |
| Cards animées         | Animations onHover + transition d'apparition              |
| Badge niveau          | Affichage du niveau avec code couleur (Débutant, etc.)    |
| Recherche instantanée | Filtrage live par mot-clé                                 |
| Filtres par niveau    | Affiche uniquement les formations d’un niveau sélectionné |
| Pagination            | Gère l’affichage de X formations par page                 |
| Responsive            | Full responsive mobile & desktop                          |

---

## 🙌 Remerciements

Ce projet a été réalisé dans le cadre d’un test technique.
Design & développement par **Joseph Itakala**.

### 🙌 Auteur

**Joseph Itakala** – [GitHub](https://github.com/Joe-Itax) | [LinkedIn](https://www.linkedin.com/in/joseph-itakala)

---

## 📃 Licence

Ce projet est open-source, sous licence MIT.
