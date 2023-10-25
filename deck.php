<?php
    require_once("Action/DeckAction.php");

    $action = new DeckAction();
    $data = $action->execute();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/lobby.css">
    <title>Deck</title>
</head>
<script src="js/javascript.js"></script>
<body>
    <div id="deckGeneral">
        <button id="retour" onclick="location.href = 'lobby.php';">
            Retour
        </button>
        <iframe id="deckStyle" style="width:100%;height:1300px" 
        src="https://magix.apps-de-cours.com/server/#/deck/<?= $data["key"]?>">
        </iframe>
    </div>
</body>
</html>
