document.addEventListener("DOMContentLoaded", () => {
    
    // --- Simulation des données (Ce que Kamel enverra depuis le Back plus tard) ---
    const mockData = {
        name: "Kamel",
        wishes: [
            "Joyeux tour de soleil supplémentaire !",
            "Une année de plus, une année de sagesse... ou pas !",
            "Bon anniversaire ! Tu as officiellement le droit d'être grincheux aujourd'hui.",
            "Félicitations pour avoir survécu une année de plus !",
            "Aujourd'hui, c'est ta journée. Demain, on revient à la normalité.",
            "Bon anniversaire ! N'oublie pas de souffler tes bougies avant qu'elles ne déclenchent l'alarme incendie.",
            "Aujourd'hui, on célèbre ta naissance. Tes parents devraient recevoir un cadeau aussi !"
        ]
    };

    // --- LOGIQUE PAGE 1 (INDEX) ---
    const nameElement = document.getElementById("celebration-name");
    
    // Vérifie si on est sur la page d'accueil
    if (nameElement) {
        nameElement.textContent = mockData.name;
    }

    // --- LOGIQUE PAGE 2 (VOEUX) ---
    const wishesList = document.getElementById("wishes-list");
    
    // Vérifie si on est sur la page des vœux
    if (wishesList) {
        wishesList.innerHTML = ""; // Vide le texte "Chargement..."
        
        // Boucle pour créer chaque ligne de vœu
        mockData.wishes.forEach((voeu, index) => {
            const li = document.createElement("li");
            
            // Format : 1. "Texte du vœu"
            li.textContent = `${index + 1}. "${voeu}"`; 
            
            wishesList.appendChild(li);
        });
    }
});