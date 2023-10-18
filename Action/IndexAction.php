<?php
	require_once("Action/CommonAction.php");
    require_once("Action/AjaxAction.php");

	class IndexAction extends CommonAction {
	
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
			
		}
	
		protected function executeAction() {
            $_SESSION = [];
            if (isset($_POST["username"])) {
                $data = [];
                $data["username"] = $_POST["username"];
                $data["password"] = $_POST["password"];
                
                $result = parent::callAPI("signin", $data);
                
                if ($result == "INVALID_USERNAME_PASSWORD") {
                    $_SESSION["block"] = "block";
                }
                else {
                    $_SESSION["block"] = null;
                    //var_dump($result);exit;
                    $key = $result->key;
                    $_SESSION["key"] = $key;
                    $_SESSION["visibility"] = $VISIBILITY_MEMBER;
                    header("Location: lobby.php");
                }
            }
            return [];
		}
	}

