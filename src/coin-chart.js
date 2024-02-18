import Chart, { Interaction } from 'chart.js/auto';
import { CrosshairPlugin, Interpolate } from 'chartjs-plugin-crosshair';

Chart.register(CrosshairPlugin);
Interaction.modes.interpolate = Interpolate;

export let myChart;

/*
 * Add gradient to price
 */
function getGradient(ctx, chartArea, data, scales) {
  const { bottom } = chartArea;
  const { y } = scales;
  const gradientBorder = ctx.createLinearGradient(0, 0, 0, bottom);
  const shift = y.getPixelForValue(data.datasets[0].data[0]) / bottom;
  gradientBorder.addColorStop(0, 'rgb(111, 201, 132)');
  gradientBorder.addColorStop(shift, 'rgb(111, 201, 132)');
  gradientBorder.addColorStop(shift, 'rgb(230, 79, 66)');
  gradientBorder.addColorStop(1, 'rgb(230, 79, 66)');
  return gradientBorder;
}

/*
 * Add gradient below price line
 */
function belowGradient(ctx, chartArea, data, scales) {
  const { bottom } = chartArea;
  const { y } = scales;
  const gradientBackground = ctx.createLinearGradient(
    0,
    y.getPixelForValue(data.datasets[0].data[0]),
    0,
    bottom,
  );
  gradientBackground.addColorStop(0, 'rgb(230, 79, 66, 0)');
  gradientBackground.addColorStop(1, 'rgb(230, 79, 66, 0.5)');
  return gradientBackground;
}

/*
 * Add gradient above price line
 */
function aboveGradient(ctx, chartArea, data, scales) {
  const { top } = chartArea;
  const { y } = scales;
  const gradientBackground = ctx.createLinearGradient(
    0,
    y.getPixelForValue(data.datasets[0].data[0]),
    0,
    top,
  );
  gradientBackground.addColorStop(0, 'rgb(111, 201, 132, 0)');
  gradientBackground.addColorStop(1, 'rgb(111, 201, 132, 0.5)');
  return gradientBackground;
}

/*
 * Plugin block to add dotted line to chart
 */
const dottedLine = {
  id: 'dottedLine',
  beforeDatasetsDraw(chart) {
    const {
      ctx,
      data,
      chartArea: { left, right },
      scales: { y },
    } = chart;

    const startingPoint = data.datasets[0].data[0];

    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 5]);
    ctx.strokeStyle = 'rgba(102, 102, 102)';
    ctx.moveTo(left, y.getPixelForValue(startingPoint));
    ctx.lineTo(right, y.getPixelForValue(startingPoint));
    ctx.stroke();
    ctx.closePath();
    ctx.setLineDash([]);

    ctx.beginPath();
    ctx.fillStyle = 'rgba(102, 102, 102)';
    ctx.fillRect(0, y.getPixelForValue(startingPoint) - 10, left, 20);
    ctx.closePath();

    ctx.font = 'bold 11px sans-serif';
    ctx.fillStyle = 'white';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(
      startingPoint.toFixed(1),
      left / 2,
      y.getPixelForValue(startingPoint),
    );
  },
};

/*
 * Configuration for the chart
 */
const config = (dates, prices, numTicks) => ({
  type: 'line',
  data: {
    labels: dates,
    datasets: [
      {
        color: 'rgb(0,0,0)',
        data: prices,
        borderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 0,
        pointHoverRadius: 2,
        fill: {
          target: {
            value: prices[0],
          },
          below: (context) => {
            const { chart } = context;
            const {
              ctx, chartArea, data, scales,
            } = chart;
            if (!chartArea) {
              return null;
            }
            return belowGradient(ctx, chartArea, data, scales);
          },
          above: (context) => {
            const { chart } = context;
            const {
              ctx, chartArea, data, scales,
            } = chart;
            if (!chartArea) {
              return null;
            }
            return aboveGradient(ctx, chartArea, data, scales);
          },
        },
        borderColor: (context) => {
          const { chart } = context;
          const {
            ctx, chartArea, data, scales,
          } = chart;
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
          align: 'start',
          color: 'gray',
          font: {
            weight: 'bold',
          },
        },
      },
      y: {
        ticks: {
          maxTicksLimit: 7,
          color: 'gray',
          font: {
            weight: 'bold',
          },
          callback(value) {
            if (value >= 1000) return `${value / 1000}K`;
            return value.toFixed(2);
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      crosshair: {
        line: {
          color: '#000000',
          width: 0.5,
          dashPattern: [2, 5],
        },
      },
      zoom: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        animation: {
          duration: 0,
        },
        position: 'nearest', // Set the position mode
        custom(tooltipModel) {
          // Tooltip position adjustment
          const position = this._chart.canvas.getBoundingClientRect();
          const mouseX = tooltipModel.caretX;
          const distanceToLeftEdge = mouseX - 20; // Adjust this value as needed

          // Set the tooltip position
          tooltipModel.x = position.left + distanceToLeftEdge;

          // Optional: Adjust the y-position if needed
          tooltipModel.y = position.top + tooltipModel.caretY;

          // Ensure the tooltip is visible within the chart area
          if (tooltipModel.x < position.left) {
            tooltipModel.x = position.left;
          }

          // Ensure the tooltip is visible within the chart area
          if (tooltipModel.y < position.top) {
            tooltipModel.y = position.top;
          }

          return tooltipModel;
        },
      },
    },
  },
  plugins: [dottedLine],
});

/*
 * Function that selects canvas from HTML and loads chart
 */
export function loadChartWithData(dates, prices, numTicks) {
  const ctx = document.getElementById('myChart');
  myChart = new Chart(ctx, config(dates, prices, numTicks));
}

/*
 * Recreate the chart with updated properties depending on
 * window width
 */
export function loadResizedChart() {
  if (window.innerWidth <= 900 && window.innerWidth > 640) {
    myChart.config.options.scales.x.ticks.maxTicksLimit = 7;
  } else if (window.innerWidth <= 640) {
    myChart.config.options.scales.x.ticks.maxTicksLimit = 4;
  } else myChart.config.options.scales.x.ticks.maxTicksLimit = 10;
}

// * Change chart data
export function changeChartData(dates, prices) {
  myChart.destroy();
  loadChartWithData(dates, prices, 4);
}
