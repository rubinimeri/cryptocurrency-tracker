import Chart from 'chart.js/auto';

/*
 * Function that selects canvas from HTML and loads chart
*/
async function loadChartWithData(dates, prices, numTicks) {
    const ctx = document.getElementById("myChart").getContext("2d");
    return new Chart(ctx, config(dates, prices, numTicks));
}