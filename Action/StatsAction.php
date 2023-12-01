<?php
    require_once("Action/CommonAction.php");
    require_once("Action/DAO/StatsInfosDAO.php");

    class StatsAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $stats = StatsInfosDAO::getStats();

            return compact("stats");
        }
    }