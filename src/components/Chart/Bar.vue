<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    datasets: {
      type: Array,
      default: null
    },
    lable: {
      type: Array,
      default: () => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    }
  },
  mounted() {
    this.renderChart(
      {
        labels: this.lable,
        datasets: this.datasets
      },
      {
        legend: {
          fullWidth: true,
          labels: {
            fontColor: "#344349",
            fontFamily: "Montserrat",
            fontSize: 13,
            usePointStyle: true,
            padding: 20
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          enabled: true
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                color: "transparent",
                drawBorder: false
              },
              barPercentage: 0.7
            }
          ],
          yAxes: [
            {
              gridLines: {
                drawBorder: false,
                borderDash: [5, 5],
                color: "#BBBBBB"
              },
              ticks: {
                beginAtZero: true,
                padding: 15
              }
            }
          ]
        }
      }
    );
  }
};
</script>
