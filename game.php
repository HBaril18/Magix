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
    <title>game</title>
</head>
<script src="js/game.js"></script>
<body>
    <div id="jeux">
        <div id="temps"></div>
        <div id="vie"></div>
        <div id="mp"></div>
        <div id="etatPartie"></div>
        <div id="main"></div>
        <div id="opponent">
            <div id=""></div>
        </div>
    </div>
</body>
</html>