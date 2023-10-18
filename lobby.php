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
    <link rel="stylesheet" href="css/lobby.css">
    <title>Lobby</title>
</head>
<script src="js/javascript.js"></script>
<body>
    <div id="bouton">
        <button id="pratique">
            Pratique
        </button>
        <button id="jouer" onclick="location.href = 'game.php';">
            Jouer
        </button>
        <button id="quitter" onclick="location.href = 'logout.php';">
            Quitter
        </button>
    </div>
    <div id="chat">
        <iframe style="width:710px;height:300px;" onload="applyStyles(this)" 
            src="https://magix.apps-de-cours.com/server/#/chat/<?= $data["key"]?>">
        </iframe>
    </div>
</body>
</html>