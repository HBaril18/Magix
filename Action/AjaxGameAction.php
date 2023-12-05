<?php
    require_once("Action/CommonAction.php");
    require_once("Action/DAO/StatsInfosDAO.php");

    class AjaxGameAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            
            $data = [];

            $data["key"] = $_SESSION["key"];
            $data["type"] = $_POST["type"];
            $data["uid"] = $_POST["uid"];
            $data["targetuid"] = $_POST["targetuid"];

            if ($_POST["type"] == "PLAY"){
                //$addstats = 
                StatsInfosDAO::addStats($_POST["targetuid"]);
            }

            $result = parent::callAPI("games/action", $data);
            
            //var_dump($result);exit;

            return compact("result");
        }
    }