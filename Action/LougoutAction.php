<?php
	require_once("Action/CommonAction.php");

	class LougoutAction extends CommonAction {
	
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
			
		}

        protected function executeAction() {
            $data["key"] = $_SESSION["key"];
            $result = parent::callAPI("signout", $data);
            $_SESSION["visibility"] = $VISIBILITY_PUBLIC;

            session_destroy();
            header("Location: index.php");
            exit;

            return [];
        }

    }