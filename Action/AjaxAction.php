<?php
    require_once("action/CommonAction.php");

    class AjaxAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            
            $result = file_get_contents( "https://magix.apps-de-cours.com/api/" . $_POST["quelconque"] );

            return compact("result");
        }
    }