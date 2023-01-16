# README

## 1. Création du serveur Json

### Installation

1. création d'un dossier dédié au serveur
2. ```cd nomDuProjetReact```
3. ```npm init``` (création d'un fichier *package.json*)
4. ```npm i -g json-server``` (installation du package **en global**)

### package.json
- ajout d'un script comme raccourçi de démarrage du serveur
```
  "scripts": {
    ...
    "serve": "json-server --watch db.json --port=5000"
  },
```

### Démarrage du serveur (au choix)
- ```npm run serve```
- ```yarn serve```

## 2. Création de l'application JS
1. création d'un dossier
2. création du fichier *index.js*
3. création du fichier *index.html*
4. importation de *index.js* avec la balise ```script```

## 3. Création d'un projet React

### Installation

1. ```npm create vite```
    - **Vite** (*bundler* comme Webpack) : https://vitejs.dev/
2. ```cd nomDuProjetReact```
3. ```npm i```