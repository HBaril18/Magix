<?php
    require_once("Action/DAO/Connexion.php");

    class StatsInfosDAO{
        public static function getStats(){

            // 1 - Établir la connexion
            $connection = Connection::getConnection();

            // 2 - Préparer la requête (SELECT, ou autre)
            $statement = $connection->prepare("SELECT carte_id,
                                                COUNT(carte_id),
                                                (SELECT COUNT(*) FROM tablo),
                                                (COUNT(carte_id)::numeric / (SELECT COUNT(*) FROM tablo))*100 AS Pourcentage
                                                FROM tablo
                                                GROUP BY carte_id");
            $statement->setFetchMode(PDO::FETCH_ASSOC);

            // 3 - Exécuter la requête
            $statement->execute();

            // 4 - Chercher le résultat
            $stats = $statement->fetchAll();
            // var_dump($stats);
            // exit;
            return $stats;

        }

        public static function addStats($id){
            $connection = Connection::getConnection();
            $statement = $connection->prepare("INSERT INTO tablo VALUES (?)");
            $statement->bindParam(1, $id);
            $statement->execute();
            // var_dump($statement->fetchAll());
            // exit;
        }

        public static function deleteStats(){
            $connexion = Connection::getConnetion();
            $statment = $connexion->prepare("TRUNCATE tablo");
            $statement->execute();
        }
    }