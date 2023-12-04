<?php
    require_once("action/IndexAction.php");

    $action = new IndexAction();
    $data = $action->execute();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="js/animationFumee.js" defer></script>
    <link rel="stylesheet" href="css/index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>è
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <div id="boiteLogin">
        <div id="logo"></div>
        <div id="magix">Magix</div>
        <p id="signIn">Sign in</p>
        <form action="" method="post" autocomplete="off">
            <div class="sign-in-input-group">
                <div id="api-message"></div>
                <input id="nom" type="text" name="username" placeholder="" required>
                <label for="username">Nom d'usager</label>
                <input id="mdp" type="password" name="password" placeholder="" required>
                <label for="password">Mot de passe</label>
                <button id="login" class="bouton icon arrow" >➜</button>
            </div>
        </form>
        <div id="hidden">
            <?php
                if (isset($_SESSION["block"])) {
                    ?>
                        <p>Mauvais mot de passe ou nom d'usager...</p>
                    <?php
                }
            ?>
        </div>
    </div>
    <div id="bg">
        <canvas id="smokeCanvas" width="400" height="300"></canvas>
    </div>
</body>
</html>
