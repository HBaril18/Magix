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
    <link rel="stylesheet" href="css/index.css">
    <title>Document</title>
</head>
<body>
    <div id="block"></div>
    <div id="boiteLogin">
    <form action="" method="post" autocomplete="off">
            <div class="sign-in-input-group">
                <div id="api-message"></div>
                <input id="nom" type="text" name="username" placeholder="Nom d'usager" required>
                <input id="mdp" type="password" name="password" placeholder="Mot de passe" required>
                <button id="login" >Connexion</button>
            </div>
        </form>
    </div>
    <div id="hidden">
        <?php
            if (isset($_SESSION["block"])) {
                ?>
                    <p>Mauvais mot de passe ou nom d'usager...</p>
                <?php
            }
        ?>
    </div>
</body>
</html>
