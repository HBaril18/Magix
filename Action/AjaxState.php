<?php
	require_once("Action/CommonAction.php");

	class AjaxState extends CommonAction {
	
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
			
		}

        protected function executeAction() {
            $data = [];

            $data["key"] = $_SESSION["key"];

            $result = parent::callAPI("games/state", $data);
            
            //var_dump($result);exit;

            return compact("result");
        }

    }