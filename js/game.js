const state = () => {
    fetch("ajax.php", {   // Il faut créer cette page et son contrôleur appelle 
 method : "POST"        // l’API (games/state)
    })
    .then(response => response.json())
    .then(data => {
        //console.log(data); // contient les cartes/état du jeu.

        let maVariable = data;

        if (typeof maVariable !== "object") {
            if (maVariable == "LAST_GAME_WON") {
                document.querySelector("#etatPartie").innerText = "VICTOIRE !!!";
            }
            else if (maVariable == "LAST_GAME_LOST"){
                document.querySelector("#etatPartie").innerText = "DÉFAITE !!!";
            }
        }
        else {
            //GESTION DU TEMPS
            document.querySelector("#temps").innerText = data.remainingTurnTime;

            //GESTION DE LA VIE
            document.querySelector("#vie").innerText = data.hp;

            //GESTION DES MP
            document.querySelector("#mp").innerText = data.mp;

            //GESTION DE LA MAIN DU JOUEUR
            document.querySelector("#main").innerHTML = "";
            for (let index = 0; index < maVariable["hand"].length; index++) {
                let newNode = document.createElement("div");
                newNode.innerText = maVariable["hand"][index].id;
                document.querySelector("#main").append(newNode);
            }
        }
        setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    })
}

window.addEventListener("load", () => {
setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});
