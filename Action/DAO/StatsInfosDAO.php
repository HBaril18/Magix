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
            $connexion = Connection::getConnection();
            $statment = $connexion->prepare("TRUNCATE tablo");
            $statment->execute();
        }

        public static function downloadStats(){
            $connexion = Connection::getConnection();

            $request = "SELECT carte_id,
            COUNT(carte_id),
            (SELECT COUNT(*) FROM tablo),
            (COUNT(carte_id)::numeric / (SELECT COUNT(*) FROM tablo))*100 AS Pourcentage
            FROM tablo
            GROUP BY carte_id";
            $statement = $connexion->prepare($request);
            $statement->execute();

            // Spécifier le nom du fichier pour le téléchargement
            header('Content-Type: text/csv');
            header('Content-Disposition: attachment; filename="data.csv"');

            // Utiliser la sortie directe pour le fichier CSV
            $output = fopen('php://output', 'w');

            fputcsv($output, array('id', 'nombre'));

            while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                fputcsv($output, $row);
            }

            fclose($output);

            // Arrêter l'exécution du reste du code
            exit;
        }
    }