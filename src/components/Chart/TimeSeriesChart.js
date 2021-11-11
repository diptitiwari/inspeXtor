import { assign } from 'lodash';
import { Line } from 'vue-chartjs';
import 'chartjs-plugin-colorschemes';
import 'chartjs-plugin-zoom';

export default {
  extends: Line,
  props: {
    colorScheme: {
      type: String,
      required: false,
      default: 'office.Circuit6',
    },
    yAxisLabel: {
      type: String,
      required: true,
    },
    labels: {
      type: Array,
      required: false,
      default: [],
    },
    datasets: {
      type: Array,
      required: true,
    },
    chartOptions: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      opts: {
        responsive: true,
        maintainAspectRatio: false,
        pan: {
          // Boolean to enable panning
          enabled: true,

          // Panning directions. Remove the appropriate direction to disable
          // Eg. 'y' would only allow panning in the y direction
          mode: 'xy',
        },
        // Container for zoom options
        zoom: {
          // Boolean to enable zooming
          enabled: true,

          // Zooming directions. Remove the appropriate direction to disable
          // Eg. 'y' would only allow zooming in the y direction
          mode: 'x',
          // onZoom(chart) {},
          // Function called once zooming is completed
          onZoomComplete: ({ chart }) => {
            this.$emit('resetZoom', chart.resetZoom);
          },
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              distribution: 'series',
              time: {
                min: '2',
              },
              ticks: {
                source: 'data',
                autoSkip: true,
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: this.yAxisLabel,
              },
            },
          ],
        },
        tooltips: {
          intersect: false,
          mode: 'index',
          callbacks: {
            label(tooltipItem, myData) {
              let label = myData.datasets[tooltipItem.datasetIndex].label || '';
              if (label) {
                label += ': ';
              }
              label += parseFloat(tooltipItem.value).toFixed(2);
              return label;
            },
          },
        },
        plugins: {
          colorschemes: {
            scheme: this.colorScheme,
            fillAlpha: 0.5,
            reverse: false,
          },
        },
      },
    };
  },
  mounted() {
    const data = {
      labels: this.labels,
      datasets: this.datasets,
    };
    this.refresh(data);
  },
  methods: {
    refresh(data) {
      if (this.chartOptions.unit === 'day') {
        this.data = data;
        this.opts.scales.xAxes[0].time.unit = 'day';
      } else {
        this.opts.scales.xAxes[0].time.unit = 'minute';
        this.data = data;
      }
      const copts = assign(this.opts, this.chartOptions);
      this.renderChart(data, copts);
    },
  },
};
