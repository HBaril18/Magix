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

            //GESTION DE LA VIE DU JOUEUR
            document.querySelector("#vie").innerText = data.hp;

            //GESTION DES MP DU JOUEUR
            document.querySelector("#mp").innerText = data.mp;

            //GESTION DE LA MAIN DU JOUEUR
            //if(!$_SESSION["mainNbr"]){ //isset n'existe pas en js trouver équivalent
                //$_SESSION["mainNbr"] = 0;
                //console.log($_SESSION["mainNbr"]);
           // }
            //if ($_SESSION["mainNbr"] < maVariable["hand"].length) {
               // console.log("hey");
                //$_SESSION["mainNbr"] = maVariable["hand"].length;
                console.log(maVariable["yourTurn"]);
            if(maVariable["yourTurn"]){
                console.log("mon tour");
                document.querySelector("#main").innerHTML = "";
                for (let index = 0; index < maVariable["hand"].length; index++) {
                    let newNode = document.createElement("div");
                    newNode.classList.add("carte");

                    let nodeuid = maVariable["hand"][index].uid
                    let nodeid = maVariable["hand"][index].id
                    
                    
                    newNode.addEventListener("click", ()=>{
                        action("PLAY", nodeuid, nodeid);
                    });

                    newNode.innerText = maVariable["hand"][index].uid;
                    document.querySelector("#main").append(newNode);
                }
                
                if (maVariable["board"].length != 0){
                    document.querySelector("#joueurCarte").innerHTML = "";
                    for (let index = 0; index < maVariable["board"].length; index++) {
                        let newNode = document.createElement("div");
                        newNode.classList.add("carte-board");

                        let newDiv = document.createElement("div");
                        newDiv.classList.add("spec");

                        newNode.innerText = maVariable["hand"][index].id;
                        document.querySelector("#joueurCarte").append(newNode);
                    }
                    console.log(maVariable["board"]);
                }

                
            }
            //}
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
            
            //GESTION DU BOARD DE L'OPPOSANT
            if (maVariable["opponent"]["board"].length != 0){
                document.querySelector("#opposantCarte").innerHTML = "";
                for (let index = 0; index < maVariable["opponent"]["board"].length; index++) {
                    let newNode = document.createElement("div");
                    newNode.classList.add(maVariable["opponent"]["board"][index].uid);
                    newNode.id = "carteOpposant-board";

                    let newDivHP = document.createElement("div");
                    newDivHP.classList.add("hpCarte");
                    let newDivATK = document.createElement("div");
                    newDivATK.classList.add("atkCarte");
                    
                    newDivATK.innerText = maVariable["opponent"]["board"][index].hp;
                    newDivHP.innerText = maVariable["opponent"]["board"][index].atk;

                    document.querySelector("#opposantCarte").append(newNode);
                    newNode.append(newDivHP);
                    newNode.append(newDivATK);
                }
            }

            
        }
        setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    });
}

window.addEventListener("load", () => {
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)

    //GESTION DU BOUTON SURRENDER
    let nodeSurrender = document.querySelector("#surrender");
    nodeSurrender.addEventListener("click", ()=> {
        console.log("click");
        action("SURRENDER", null, null);
    });

    //GESTION DU BOUTON NEXTTURN
    let nodeNextTurn = document.querySelector("#nextTurn");
    nodeNextTurn.addEventListener("click", ()=> {
        console.log("click");
        action("END_TURN", null, null);
    });

    //GESTION DU BOUTON POUVOIR DU HÉRO

});
