<?php
    require_once("Action/AjaxState.php");

    $action = new AjaxState();
    $data = $action->execute();

    echo json_encode($data["result"]);  