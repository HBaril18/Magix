<?php
	require_once("Action/CommonAction.php");

	class GameAction extends CommonAction {
	
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
			
		}

        protected function executeAction() {
            $data = [];

            echo($_SESSION["key"]);

            $data["key"] = $_SESSION["key"];
            $data["type"] = $_SESSION["type"];

            $result = parent::callAPI("games/auto-match", $data);
            
            //var_dump($result);exit;

            return [];
        }

    }