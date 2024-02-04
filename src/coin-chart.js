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
          fill: {
            target: {
              value: prices[0],
            },
            below: (context) => {
              const chart = context.chart;
              const { ctx, chartArea, data, scales } = chart;
              if (!chartArea) {
                return null;
              }
              return belowGradient(ctx, chartArea, data, scales);
            },
            above: (context) => {
              const chart = context.chart;
              const { ctx, chartArea, data, scales } = chart;
              if (!chartArea) {
                return null;
              }
              return aboveGradient(ctx, chartArea, data, scales);
            },
          },
          borderColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea, data, scales } = chart;
            if (!chartArea) {
              return null;
            }
            return getGradient(ctx, chartArea, data, scales);
          },
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
    plugins: [dottedLine],
  };
};

/*
 * Recreate the chart with updated properties depending on
 * window width
 */
export function loadResizedChart(dates, prices) {
  if (window.innerWidth <= 900 && window.innerWidth > 640) {
    loadChartWithData(dates, prices, 7);
  } else if (window.innerWidth <= 640) {
    loadChartWithData(dates, prices, 4);
  } else loadChartWithData(dates, prices, 10);
}

/*
 * Add gradient to price
 */
// Add gradient to price
function getGradient(ctx, chartArea, data, scales) {
  const { left, right, top, bottom, width, height } = chartArea;
  const { x, y } = scales;
  const gradientBorder = ctx.createLinearGradient(0, 0, 0, bottom);
  const shift = y.getPixelForValue(data.datasets[0].data[0]) / bottom;
  gradientBorder.addColorStop(0, "rgb(111, 201, 132)");
  gradientBorder.addColorStop(shift, "rgb(111, 201, 132)");
  gradientBorder.addColorStop(shift, "rgb(230, 79, 66)");
  gradientBorder.addColorStop(1, "rgb(230, 79, 66)");
  return gradientBorder;
}

/*
 * Add gradient below price line
 */
function belowGradient(ctx, chartArea, data, scales) {
  const { left, right, top, bottom, width, height } = chartArea;
  const { x, y } = scales;
  const gradientBackground = ctx.createLinearGradient(
    0,
    y.getPixelForValue(data.datasets[0].data[0]),
    0,
    bottom
  );
  gradientBackground.addColorStop(0, "rgb(230, 79, 66, 0)");
  gradientBackground.addColorStop(1, "rgb(230, 79, 66, 0.5)");
  return gradientBackground;
}

/*
 * Add gradient above price line
 */
function aboveGradient(ctx, chartArea, data, scales) {
  const { left, right, top, bottom, width, height } = chartArea;
  const { x, y } = scales;
  const gradientBackground = ctx.createLinearGradient(
    0,
    y.getPixelForValue(data.datasets[0].data[0]),
    0,
    top
  );
  gradientBackground.addColorStop(0, "rgb(111, 201, 132, 0)");
  gradientBackground.addColorStop(1, "rgb(111, 201, 132, 0.5)");
  return gradientBackground;
}

/*
 * Plugin block to add dotted line to chart
 */
const dottedLine = {
  id: "dottedLine",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const {
      ctx,
      data,
      chartArea: { left, right, width },
      scales: { x, y },
    } = chart;

    const startingPoint = data.datasets[0].data[0];

    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 5]);
    ctx.strokeStyle = "rgba(102, 102, 102)";
    ctx.moveTo(left, y.getPixelForValue(startingPoint));
    ctx.lineTo(right, y.getPixelForValue(startingPoint));
    ctx.stroke();
    ctx.closePath();
    ctx.setLineDash([]);

    ctx.beginPath();
    ctx.fillStyle = "rgba(102, 102, 102)";
    ctx.fillRect(0, y.getPixelForValue(startingPoint) - 10, left, 20);
    ctx.closePath();

    ctx.font = "bold 11px sans-serif";
    ctx.fillStyle = "white";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(
      startingPoint.toFixed(1),
      left / 2,
      y.getPixelForValue(startingPoint)
    );
  },
};
