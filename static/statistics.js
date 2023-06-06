const canvasElement = document.getElementById('gameStatistics').getContext('2d');
const canvasElement2 = document.getElementById('gameStatistics2').getContext('2d');
const graphElements = document.querySelector('.graphs');
        const data = {
            labels: ["Wrong Anwsers", "Right Anwsers"],
            datasets: [
                {
                    label:"Anwsers Overview",
                    data:[10 - graphElements.dataset.anwsersRight, graphElements.dataset.anwsersRight],
                    backgroundColor:[
                        'rgb(255,99,132)',
                        "rgb(123, 255, 0)"
                    ],
                    hoverOffset: 4
                }
            ]
        }
        // Create the doughnut chart
        let myChart = new Chart(canvasElement, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: false
            }
        });

    const data2 = {
    labels: ["1","2","3","4","5","6","7","8","9","10"],
    datasets: [{
        label: 'Total Points',
        data: JSON.parse(graphElements.dataset.anwsersArray),
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    };
    let myChart2 = new Chart(canvasElement2, {
            type: 'line',
            data: data2,
            options: {
                responsive: false,
                scales: {
                    y: {
                        max: 20,
                    }
                }
            }
    });