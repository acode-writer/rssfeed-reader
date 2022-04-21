# rssfeed

## Ce mini projet utilise Nodejs+express pour le backend et angular + bootstrap pour l'integration.

# Installation
Cloner le projet

Positionez-vous dans le repertoire backend/ et installer es dependences

```bash
cd backend/
npm install
npm start
```
Si le serveur ne demarre pas allez dans le fichier .env et changer le port

```bash
PORT=8001 // par exemple
```

Faite la meme chose avec le repertoire frontend

Assurez-vous d'avoir angular-cli installé sur votre machine

```bash
cd ../frontend
npm install
ng serve -o
```

si vous changiez le port dans le .env du dossier backend
veuillez aussi mettre à jour l'objet environment dans le dossier frontend
```bash
// src/environments/environment.ts
export const environment = {
  production: false,
  rssFeedBackendUrl: "http://localhost:8001" //par exemple
};
```
