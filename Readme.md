# 🎂 Projet : Birthday-App (Fullstack)

## 1️⃣ Présentation du Projet
Ce projet consiste à créer un site d'anniversaire interactif où le contenu (nom de la personne, message et thème visuel) peut être modifié dynamiquement via une interface d'administration simplifiée.

## 2️⃣ Objectifs Techniques
- **Collaboration :** Travail en binôme avec Git (gestion des branches et Pull Requests).
- **Frontend :** Interface moderne, responsive et réactive.
- **Backend :** API REST robuste avec Spring Boot.
- **Persistance :** Sauvegarde des données dans un fichier JSON local.

---

## 3️⃣ Fonctionnalités principales
- **Affichage Personnalisé :** Affiche le nom et le message récupérés depuis le backend.
- **Changement de Thème :** Bascule entre mode `clair`, `sombre` ou `coloré` avec mise à jour immédiate du CSS.
- **Interface d'Édition :** Formulaire permettant de modifier les infos et d'enregistrer les changements.
- **Persistance réelle :** Les données ne sont pas perdues au redémarrage grâce au stockage fichier.

---

## 4️⃣ Architecture Technique

```text
[ Frontend : HTML/CSS/JS ]  <--->  [ Backend : Spring Boot API ]  <--->  [ Fichier : data.json ]



---

## 5️⃣ Spécifications de l'API (REST)

### Modèle de données (`data.json`)
```json
{
  "name": "Kamel",
  "message": "Joyeux anniversaire ! 🎉",
  "theme": "dark"
}
