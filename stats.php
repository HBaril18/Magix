<?php
    require_once("Action/StatsAction.php");

    $action = new StatsAction();
    $data = $action->execute();
;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>game</title>
</head>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="css/stats.css">
    <body>
    <h1>Statistiques</h1>
    <div class="data-line">
        Id des cartes :
    </div>
    <div class="data-line">
        <canvas id="pie-chart"></canvas>
        <script>
            const data = {
                labels: [<?php 
                            foreach ($data["stats"] as $variable) {
                                echo $variable["carte_id"].",";
                            }
                        ?>],
                datasets: [{
                    label: 'Pourcentage d"utilisation',
                    data: [ <?php 
                            foreach ($data["stats"] as $variable) {
                                echo $variable["pourcentage"].",";
                            }
                        ?> ],
                    color: "#fff",
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                }]
            };

            const config = {
                type: 'pie',
                data: data,
                options: {
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white'
                            }
                        }
                    }
                }
            };

            new Chart(document.getElementById('pie-chart'), config);
        </script>
        <form action="" method="post">
            <button id="download" name="type" value="download">DOWNLOAD DATABASE</button>
            <button id="delete" name="type" value="delete">DELETE DATABASE</button>
        </form>
        <button id="retour" onclick="location.href = 'lobby.php';">
            <
        </button>
    </div>
    </body>
    </html>
<?php