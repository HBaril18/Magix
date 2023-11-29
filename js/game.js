let handSize = 0;
let boardSize = 0;
let targetuid = 0;
let playerCardUid = 0;

const state = () => {
    fetch("ajax.php", {   // Il faut créer cette page et son contrôleur appelle 
        method: "POST"        // l’API (games/state)
    })
        .then(response => response.json())
        .then(data => {
            //console.log(data); // contient les cartes/état du jeu.

            let maVariable = data;

            if (typeof maVariable !== "object") {
                if (maVariable == "LAST_GAME_WON") {
                    document.querySelector("#etatPartie").innerText = "VICTOIRE !!!";
                }
                else if (maVariable == "LAST_GAME_LOST") {
                    document.querySelector("#etatPartie").innerText = "DÉFAITE !!!";
                }
            }
            else {
                //GESTION DU BOARD DE L'OPPOSANT
                if (maVariable["opponent"]["board"].length != 0) {
                    document.querySelector("#opposantCarte").innerHTML = "";
                    for (let index = 0; index < maVariable["opponent"]["board"].length; index++) {
                        let newNode = document.createElement("div");
                        newNode.classList.add(maVariable["opponent"]["board"][index].uid);
                        newNode.id = "carteOpposant-board";

                        newNode.addEventListener("click", () => {
                            targetuid = maVariable["opponent"]["board"][index].uid;
                            //ACTION ATTACK
                            if (playerCardUid != null && targetuid != null) {
                                console.log(playerCardUid);
                                console.log(targetuid);
                                action("ATTACK", playerCardUid, targetuid);
                            }
                        });

                        let newDivHP = document.createElement("div");
                        newDivHP.classList.add("hpCarte");
                        let newDivATK = document.createElement("div");
                        newDivATK.classList.add("atkCarte");
                        let newpATK = document.createElement("atk");
                        newpATK.classList.add("atk");
                        let newDivMechanic = document.createElement("div");
                        newDivMechanic.classList.add("mechanicCarte");
                        let newpHP = document.createElement("p");
                        newpHP.classList.add("hp");

                        newpATK.innerText = maVariable["opponent"]["board"][index].atk;
                        newpHP.innerText = maVariable["opponent"]["board"][index].hp;
                        newDivMechanic.innerText = maVariable["opponent"]["board"][index].mechanics;

                        newDivHP.append(newpHP);
                        newDivATK.append(newpATK);

                        document.querySelector("#opposantCarte").append(newNode);
                        newNode.append(newDivHP);
                        newNode.append(newDivATK);
                        newNode.append(newDivMechanic);
                    }
                }

                //GESTION DU TEMPS
                document.querySelector("#temps").innerText = data.remainingTurnTime;

                //GESTION DE LA VIE DU JOUEUR
                document.querySelector("#vie").innerText = data.hp;

                //GESTION DES MP DU JOUEUR
                document.querySelector("#mp").innerText = data.mp;

                //GESTION DE LA MAIN DU JOUEUR
                console.log(maVariable["yourTurn"]);
                if (handSize != maVariable["hand"].length) {
                    console.log("mon tour");
                    document.querySelector("#main").innerHTML = "";
                    for (let index = 0; index < maVariable["hand"].length; index++) {
                        let newNode = document.createElement("div");
                        newNode.classList.add("carte");

                        let nodeuid = maVariable["hand"][index].uid;
                        let nodeid = maVariable["hand"][index].id;

                        newNode.addEventListener("click", () => {
                            action("PLAY", nodeuid, nodeid);
                        });

                        newNode.innerText = maVariable["hand"][index].uid;
                        document.querySelector("#main").append(newNode);
                    }
                    handSize = maVariable["hand"].length
                }
                if (maVariable["board"].length != 0) {
                    document.querySelector("#joueurCarte").innerHTML = "";
                    for (let index = 0; index < maVariable["board"].length; index++) {
                        let newNode = document.createElement("div");
                        newNode.id = "carte-board";

                        newNode.addEventListener("click", () => {
                            playerCardUid = maVariable["board"][index].uid;
                        });

                        let newDivHP = document.createElement("div");
                        newDivHP.classList.add("hpCarte");
                        let newDivATK = document.createElement("div");
                        newDivATK.classList.add("atkCarte");
                        let divUID = document.createElement("div");
                        divUID.classList.add("uid");

                        newDivATK.innerText = maVariable["board"][index].atk;
                        newDivHP.innerText = maVariable["board"][index].hp;
                        divUID.innerText = maVariable["board"][index].uid;

                        document.querySelector("#joueurCarte").append(newNode);
                        newNode.append(newDivHP);
                        newNode.append(newDivATK);
                        newNode.append(divUID);
                    }
                }

                //GESTION DE LA VIE DE L'OPPOSANT
                document.querySelector("#vie-opposant").innerText = data.opponent.hp;

                //GESTION DES MP DE L'OPPOSANT
                document.querySelector("#mp-opposant").innerText = data.opponent.mp;

                //GESTION DE LA MAIN DE L'OPPOSANT
                document.querySelector("#main-opponent").innerHTML = "";
                for (let index = 0; index < maVariable["opponent"].handSize; index++) {
                    let newNode = document.createElement("div");
                    document.querySelector("#main-opponent").append(newNode);
                }
            }
            setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
        });
}

window.addEventListener("load", () => {
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)

    //GESTION DU BOUTON SURRENDER
    let nodeSurrender = document.querySelector("#surrender");
    nodeSurrender.addEventListener("click", () => {
        console.log("click");
        action("SURRENDER", null, null);
    });

    //GESTION DU BOUTON NEXTTURN
    let nodeNextTurn = document.querySelector("#nextTurn");
    nodeNextTurn.addEventListener("click", () => {
        console.log("click");
        action("END_TURN", null, null);
    });

    //GESTION DU BOUTON POUVOIR DU HÉRO

});
