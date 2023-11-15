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
<body>
    <div id="jeux">
        <div id="en-tete">
            <div id="temps"></div>
            <div id="etatPartie"></div>
        </div>
        <div id="joueur">
            <div id="vie"></div>
            <div id="mp"></div>
            <div id="main"></div>
        </div>
        <div id="joueurCarte">

        </div>
        <div id="opposant-carte">

        </div>
        </div>
        <div id="opponent">
            <div id="vie-opposant"></div>
            <div id="mp-opposant"></div>
            <div id="main-opponent"></div>
        </div>
    </div>
</body>
</html>