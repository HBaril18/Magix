<?php
    require_once("Action/LobbyAction.php");

    $action = new LobbyAction();
    $data = $action->execute();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="js/animationOeil.js" defer></script>
    <script src="js/animationEtoile.js" defer></script>
    <script src="js/visibility.js" defer></script>
    <script src="js/javascript.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/lobby.css">
    <title>Lobby</title>
</head>
<body>
    <div class="gauche">
        <div id="saison">
            <div id="logoV"></div>
            <div id="texteSaison">
                <p id="texte1">Magix</p>
                <p id="texte2">AUTOMNE 2023 // 2024</p>
            </div>
        </div>
        <div class="un">
            <div id="btnJouer" class="square"></div>
            <button id="jouer" onclick="toggleVisibility('monDiv')">JOUER</button>
        </div>
        <div class="deux">
            <div id="btnDeck" class="square"></div>
            <button id="deck" onclick="location.href = 'deck.php';">DECK</button>
        </div>
        <div class="trois">
            <div id="btnStats" class="square"></div>
            <button id="stats" onclick="location.href = 'stats.php';">STATS</button>
        </div>
    </div>
    <div id="monDiv" style="display: none;">
        <div id="close" onclick="unToggleVisibility('monDiv')">X</div>
        <form action="game.php" method="post" id="monDivBoutton">
            <button id="train" type="action" name="action" value="TRAINING">PRATIQUE</button>
            <button id="pvp" type="action" name="action" value="PVP">PLAYER VS PLAYER</button>
        </form>
    </div>
    <div class="parametre">
        <button id="params" onclick="toggleVisibility('paramDiv')">
            ⚙
        </button>
    </div>
    <div id="paramDiv" style="display: none;">
        <div id="close" onclick="unToggleVisibility('paramDiv')">X</div>
        <div id="monDivBoutton">
            <div id="quitterBtn" onclick="location.href = 'index.php';">QUITTER</div>
        </div>
    </div>
    <canvas id="smokeCanvas"></canvas>
    <div id="chatBtn">
        
    </div>
    <div id="chat">
        <iframe style="width:20%;height:5%;" onload="applyStyles(this)" 
            src="https://magix.apps-de-cours.com/server/#/chat/<?= $data["key"]?>">
        </iframe>
    </div>
</body>
</html>