let handSize = 0;
let boardSize = 0;
let targetuid = 0;
let playerCardUid = 0;
let nodeHero;

const state = () => {
    fetch("ajax.php", {   // Il faut créer cette page et son contrôleur appelle 
        method: "POST"        // l’API (games/state)
    })
        .then(response => response.json())
        .then(data => {
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
                //GESTION DU NOM DE L'ENNEMI
                document.querySelector("#nomJoueur").innerText = maVariable["opponent"].username;

                //GESTION CLIQUE SUR L'AVATAR ENNEMI
                let nodeAvatar = document.querySelector("#avatarEnnemi");
                nodeAvatar.addEventListener("click", () => {
                    //ACTION ATTACK
                    if (playerCardUid != null) {
                        console.log("click avatar");
                        action("ATTACK", playerCardUid, 0);
                        playerCardUid = null;
                    }
                });

                //GESTION POUVOIR DU HÉRO
                if (!maVariable["heroPowerAlreadyUsed"] && maVariable["mp"] >= 2 && maVariable["yourTurn"]){
                    document.querySelector("#heroPower").classList.add("usable");
                    nodeHero = document.querySelector(".usable");
                }else{
                    document.querySelector("#heroPower").classList.remove("usable");
                    nodeHero = null;
                }
                if (nodeHero != null) {
                    nodeHero.addEventListener("click", () => {
                        //ACTION ATTACK
                        action("HERO_POWER", null, null);
                        nodeHero = null;
                        console.log("click heroPower");
                    });
                }

                //GESTION DU BOARD DE L'OPPOSANT
                if (maVariable["opponent"]["board"].length != 0) {
                    document.querySelector("#opposantCarte").innerHTML = "";
                    for (let index = 0; index < maVariable["opponent"]["board"].length; index++) {
                        let carteID = maVariable["hand"][index].id;
                        let newNode = document.createElement("div");
                        newNode.classList.add(maVariable["opponent"]["board"][index].uid);
                        newNode.id = "carteOpposant-board";

                        newNode.addEventListener("click", () => {
                            targetuid = maVariable["opponent"]["board"][index].uid;
                            //ACTION ATTACK
                            if (playerCardUid != null && targetuid != null) {
                                action("ATTACK", playerCardUid, targetuid);
                                playerCardUid = null;
                            }
                        });

                        //IMAGE POUR LES CARTES
                        if ((carteID-1) < 24){
                            newNode.style.backgroundImage = "url(/images/" + imageId[carteID - 1] + ".jpg)";
                        } else {
                            newNode.style.backgroundImage = "url('/images/24.jpg')";
                        }
                        console.log("url('/images/')" + imageId[carteID - 1] + ".jpg");

                        //CARTE ENNEMIE SUR LE JEU
                        let newDivHP = document.createElement("div");
                        newDivHP.classList.add("hpCarte");
                        let newDivATK = document.createElement("div");
                        newDivATK.classList.add("atkCarte");
                        let newDivMechanic = document.createElement("div");
                        newDivMechanic.classList.add("mechanicCarte");

                        newDivATK.innerText = maVariable["opponent"]["board"][index].atk;
                        newDivHP.innerText = maVariable["opponent"]["board"][index].hp;
                        newDivMechanic.innerText = maVariable["opponent"]["board"][index].mechanics;

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
                        let carteID = maVariable["hand"][index].id;
                        let newNode = document.createElement("div");
                        newNode.classList.add("carte");

                        //CARTE DU JOUEUR SUR LE BANC
                        let newDivHP = document.createElement("div");
                        newDivHP.classList.add("hpCarte");
                        let newDivATK = document.createElement("div");
                        newDivATK.classList.add("atkCarte");
                        let newDivMechanic = document.createElement("div");
                        newDivMechanic.classList.add("mechanicCarte");
                        let newDivMP = document.createElement("div");
                        newDivMP.classList.add("mp");

                        newDivATK.innerText = maVariable["hand"][index].atk;
                        newDivHP.innerText = maVariable["hand"][index].hp;
                        newDivMechanic.innerText = maVariable["hand"][index].mechanics;
                        newDivMP.innerText = maVariable["hand"][index].cost;

                        document.querySelector("#main").append(newNode);
                        newNode.append(newDivHP);
                        newNode.append(newDivATK);
                        newNode.append(newDivMechanic);
                        newNode.append(newDivMP);

                        //IMAGE POUR LES CARTES
                        if ((carteID-1) < 24){
                            newNode.style.backgroundImage = "url(/images/" + imageId[carteID - 1] + ".jpg)";
                        } else {
                            newNode.style.backgroundImage = "url('/images/24.jpg')";
                        }
                        
                        //ACTION JOUER CARTE
                        newNode.addEventListener("click", () => {
                            let nodeuid = maVariable["hand"][index].uid;
                            let nodeid = maVariable["hand"][index].id;
                            action("PLAY", nodeuid, nodeid);
                        });
                    }
                    handSize = maVariable["hand"].length
                }
                //GESTION DES CARTES JOUEURS SUR LE JEU
                if (maVariable["board"].length != 0) {
                    document.querySelector("#joueurCarte").innerHTML = "";
                    for (let index = 0; index < maVariable["board"].length; index++) {
                        let carteID = maVariable["hand"][index].id;
                        let newNode = document.createElement("div");
                        newNode.id = "carte-board";

                        //ACTION ATTACK (ASSOCIATION DE LA CARTE DU JOUEUR)
                        newNode.addEventListener("click", () => {
                            console.log("click ma carte");
                            playerCardUid = maVariable["board"][index].uid;
                        });

                        //IMAGE POUR LES CARTES
                        if ((carteID-1) < 24){
                            newNode.style.backgroundImage = "url(/images/" + imageId[carteID - 1] + ".jpg)";
                        } else {
                            newNode.style.backgroundImage = "url('/images/24.jpg')";
                        }

                        //CARTE DU JOUEUR SUR LE JEU
                        let newDivHP = document.createElement("div");
                        newDivHP.classList.add("hpCarte");
                        let newDivATK = document.createElement("div");
                        newDivATK.classList.add("atkCarte");
                        let newDivMechanic = document.createElement("div");
                        newDivMechanic.classList.add("mechanicCarte");

                        newDivATK.innerText = maVariable["board"][index].atk;
                        newDivHP.innerText = maVariable["board"][index].hp;
                        newDivMechanic.innerText = maVariable["board"][index].mechanics;

                        document.querySelector("#joueurCarte").append(newNode);
                        newNode.append(newDivHP);
                        newNode.append(newDivATK);
                        newNode.append(newDivMechanic);
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
                    newNode.classList.add("carteCachee");
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
        variable = 0;
    });
});
