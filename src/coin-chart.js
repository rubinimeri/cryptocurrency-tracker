import Chart from "chart.js/auto";

/*
 * Function that selects canvas from HTML and loads chart
 */
export async function loadChartWithData(dates, prices, numTicks) {
  const ctx = document.getElementById("myChart");
  console.log(ctx);
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
        },
      ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              maxTicksLimit: numTicks,
              align: "start",
              color: "gray",
              font: {
                weight: "bold",
              },
            },
          },
          y: {
            ticks: {
              maxTicksLimit: 7,
              color: "gray",
              font: {
                weight: "bold",
              },
              callback: function (value) {
                if (value >= 1000) return value / 1000 + "K";
                return value;
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
  };
};

/*
 * Recreate the chart with updated properties depending on
 * window width
*/
export function loadResizedChart(dates, prices) {
    if(window.innerWidth <= 900 && window.innerWidth > 640) {
      loadChartWithData(dates, prices, 7);
    }
    else if(window.innerWidth <= 640) {
      loadChartWithData(dates, prices, 4);
    }
    else loadChartWithData(dates, prices, 10);
};