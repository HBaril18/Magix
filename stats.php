<?php
    require_once("Action/StatsAction.php");

    $action = new StatsAction();
    $data = $action->execute();

    //require_once("partial/header.php");
?>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="css/stats.css">
    <h1>Statistiques</h1>
    <div class="data-line">
        Nombre de participants :
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
    </div>
<?php
   // require_once("partial/footer.php");