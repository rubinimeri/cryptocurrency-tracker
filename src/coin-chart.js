import Chart from 'chart.js/auto';

/*
 * Function that selects canvas from HTML and loads chart
*/
export async function loadChartWithData(dates, prices, numTicks) {
    const ctx = document.getElementById("myChart").getContext("2d");
    return new Chart(ctx, config(dates, prices, numTicks));
}

/*
 * Configuration for the chart
*/
const config = function (dates, prices, numTicks) {
    return {
        type: "line",
        data: {
            labels: dates,
            datasets: [
                {
                    color: "rgb(0,0,0)",
                    data: prices,
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 10,
                    pointHoverRadius: 0,
                }
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 10,
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: numTicks,
                            align: "start",
                            color: "gray",
                            font: {
                                weight: "bold"
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    }
                }
            }
        },
    }
}