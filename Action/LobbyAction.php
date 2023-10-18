<?php
    require_once("Action/CommonAction.php");

    class LobbyAction extends CommonAction {

        public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}
        
        protected function executeAction() {
            if (isset($_SESSION["key"])){
                $key = $_SESSION["key"];
            }    
            return compact("key");
        }
        
    }