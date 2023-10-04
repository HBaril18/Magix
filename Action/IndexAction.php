<?php
	require_once("action/CommonAction.php");

	class IndexAction extends CommonAction {
	
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
			
		}
	
		protected function executeAction() {
            if (!empty)
            $data = [];
            $data["username"] = $_POST["username"];
            $data["password"] = $_POST["password"];

            $result = parent::callAPI("signin", $data);

            if ($result == "INVALID_USERNAME_PASSWORD") {
                // err
            }
            else {
                var_dump($result);exit;
                $key = $result->key;
            }
			return [];
		}
	}

