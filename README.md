# TP Exam Chat

Application de chat en temps réel (Frontend + Backend) pour l'examen pratique DevOps.

## Structure
- `frontend/`: Site statique (HTML/CSS/JS)
- `backend/`: API Node.js + Express
- `.github/workflows/`: Pipeline CI/CD

## Installation et Démarrage Local

### Prérequis
- Node.js
- Docker (optionnel)

### Backend
```bash
cd backend
npm install
npm start
```
Le serveur démarre sur http://localhost:3000

### Frontend
Ouvrir `frontend/index.html` dans un navigateur.

## Déploiement (Automatisé)

### 1. GitHub
Pusher ce code sur un dépôt public `tp-exam-chat`.

### 2. Backend (Render)
1. Créer un "Web Service" sur Render.
2. Connecter le dépôt GitHub.
3. Root Directory: `backend`
4. Build Command: `npm install`
5. Start Command: `node server.js`
6. **IMPORTANT**: Copier l'URL du service (ex: `https://mon-backend.onrender.com`).

### 3. Configuration Frontend
1. Ouvrir `frontend/index.html`.
2. Modifier la variable `API_URL` avec l'URL du backend Render.
3. Commit & Push.

### 4. Frontend (Vercel)
1. Créer un "New Project" sur Vercel.
2. Connecter le dépôt GitHub.
3. Root Directory: `frontend`
4. Deploy.

## CI/CD
Le fichier `.github/workflows/ci.yml` exécute automatiquement les tests à chaque push.
Les déploiements sont gérés automatiquement par les intégrations Vercel et Render (GitOps).
