<?php
    require_once("Action/GameAction.php");

    $action = new GameAction();
    $data = $action->execute();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/game.css">
    <title>game</title>
</head>
<script src="js/game.js"></script>
<script src="js/gameAction.js"></script>
<script src="js/imageId.js"></script>
<script src="js/visibility.js" defer></script>
<script src="js/javascript.js"></script>
<body>
    <div id="jeux">
        <div id="chat" style="display: none;">
            <iframe style="width:20%;height:80%;" onload="applyStyles(this)" 
                src="https://magix.apps-de-cours.com/server/#/chat/<?= $data["key"]?>">
            </iframe>
        </div>
        <div id="nextTurn">Passer la main</div>
        <div id="messageJeu"></div>
        <div id="en-tete">
            <div id="temps"></div>
            <div id="imageTemps"></div>
            <div id="surrender">/FF</div>
            <div id="etatPartie" style="display:none;">
                <div id="messageEP"></div>
                <button id="quitter" onclick="location.href = 'lobby.php'">RETOUR AU LOBBY</button>
            </div>
        </div>
        <div id="joueur">
            <button id="chatBtn" onclick="chatToggleVisibility('chat')"></button>
            <div id="imageVie"></div>
            <div id="vie"></div>
            <div id="imageMp"></div>
            <div id="mp"></div>
            <div id="main"></div>
            <div id="heroPower">Pouvoir du héro</div>
        </div>
        <div id="joueurCarte">

        </div>
        <div id="opposantCarte">

        </div>
        </div>
        <div id="opponent">
            <div id="nomJoueur"></div>
            <div id="avatarEnnemi"></div>
            <div id="imageVie-opposant"></div>
            <div id="vie-opposant"></div>
            <div id="imageMp-opposant"></div>
            <div id="mp-opposant"></div>
            <div id="main-opponent"></div>
        </div>
    </div>
</body>
</html>