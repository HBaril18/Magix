<?php
    require_once("Action/AjaxGameAction.php");

    $action = new AjaxGameAction();
    $data = $action->execute();

    echo json_encode($data["result"]);