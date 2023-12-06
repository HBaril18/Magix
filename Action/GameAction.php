<?php
	require_once("Action/CommonAction.php");

	class GameAction extends CommonAction {
	
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
			
		}

        protected function executeAction() {
            $data = [];

            $data["key"] = $_SESSION["key"];
            $data["type"] = $_POST["action"];

            $result = parent::callAPI("games/auto-match", $data);
            
            //var_dump($result);exit;

            $key = $_SESSION["key"];
            return (compact("key"));
        }

    }