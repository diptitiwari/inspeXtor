<template>
  <div class="dashboard">
    <b-container fluid>
      <b-row class="mt-4">
        <b-col
          md="12"
          lg="12"
          sm="12"
        >
          <h4>Dashboard</h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          md="12"
          lg="12"
          sm="12"
        >
          <b-card>
            <b-row>
              <b-col md="4">
                <h4 class="card-title">
                  {{ panel1.chartDurationValue }} Report
                </h4>
              </b-col>
              <b-col
                md="8"
                align="end"
                class="text-right"
              >
                <b-form-select
                  v-model="panel1.chartTypeValue"
                  :options="chartTypeItem"
                  size="sm"
                  class=" mr-1 col-md-2 mb-2"
                />
                <b-form-select
                  v-model="panel1.chartDurationValue"
                  :options="chartDurationItem"
                  size="sm"
                  class="col-md-2 mr-1 mb-2"
                  @change="chartDurationChange"
                />
                <b-form-select
                  v-if="panel1.chartDurationValue === 'Hourly'"
                  v-model="panel1.chartHourlyDurationValue"
                  :options="chartHourlyDurationItem"
                  size="sm"
                  class="col-md-2 mr-1 mb-2"
                />
                <button class="mr-1 btn-icon">
                  <img
                    src="icon/fullscreen.svg"
                    class="tbl-icon mb-2"
                  >
                </button>
              </b-col>
            </b-row>
            <hr>
            <b-row class="mt-3">
              <b-col
                md="4"
                align="center"
              >
                Temperature
                <hr>
                <DoughnutChart
                  :datasets="temperature.datasets"
                  :labels="temperature.labels"
                  :chart-options="chartOptions"
                  :height="120"
                  :wight="120"
                />
              </b-col>
              <b-col
                md="4"
                align="center"
              >
                kwhConsumption
                <hr>
                <PieChart
                  :datasets="kwhConsumption.datasets"
                  :labels="kwhConsumption.labels"
                  :chart-options="chartOptions"
                  :height="120"
                  :wight="120"
                />
              </b-col>
              <b-col
                md="4"
                align="center"
              >
                occupancy
                <hr>
                <PieChart
                  :datasets="occupancy.datasets"
                  :labels="occupancy.labels"
                  :chart-options="chartOptions"
                  :height="120"
                  :wight="120"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col
          md="12"
          lg="12"
          sm="12"
        >
          <b-card>
            <b-row>
              <b-col md="4">
                <h4 class="card-title">
                  {{ panel2.chartDurationValue }}
                </h4>
              </b-col>
              <b-col
                md="8"
                align="end"
                class="text-right"
              >
                <b-form-select
                  v-model="panel2.filterValue"
                  :options="filterItem"
                  size="sm"
                  class="col-md-2 mb-2 mr-1"
                />
                <b-form-select
                  v-model="panel2.clusterValue"
                  :options="clusterItem"
                  size="sm"
                  class="col-md-2 mb-2 mr-1"
                />
                <b-form-select
                  v-model="panel2.chartDurationValue"
                  :options="chartDurationItem"
                  size="sm"
                  class="col-md-2 mb-2 mr-1"
                  @change="chartDurationChange"
                />
                <b-form-select
                  v-if="panel2.chartDurationValue === 'Hourly'"
                  v-model="panel2.chartHourlyDurationValue"
                  :options="chartHourlyDurationItem"
                  size="sm"
                  class="col-md-2 mb-2 mr-1"
                />
                <b-form-select
                  :options="chartTypeItem"
                  size="sm"
                  class="col-md-2 mb-2 mr-1"
                />
                <button class="mr-2 btn-icon">
                  <img
                    src="icon/fullscreen.svg"
                    class="tbl-icon mb-2"
                  >
                </button>
              </b-col>
            </b-row>
            <hr>
            <b-row class="mt-3">
              <b-col
                align="center"
              >
                <BarChart
                  :datasets="panel2.datasets"
                  :labels="panel2.labels"
                  :chart-options="chartOptions"
                  :height="100"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
 
 <script>
import PieChart from "@/components/Chart/PieChart";
import DoughnutChart from "@/components/Chart/DoughnutChart";
import BarChart from "@/components/Chart/BarChart";
import {kwhConsumption, occupancy, temp} from './config';

export default {
  name: "Dashboard",
  components: {
    PieChart,
    DoughnutChart,
    BarChart
  },
  data() {
    return {
      panel1: {
        chartTypeValue: "Pie chart",
        chartDurationValue: "Hourly",
        chartHourlyDurationValue: "01",
      },
      panel2: {
        chartDurationValue: "Hourly",
        chartHourlyDurationValue: "01",
        filterValue: 'All',
        clusterValue: 'All Selected',
        datasets:[],
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
      },
      chartTypeItem: ["Pie chart"],
      chartDurationItem: ["Hourly", "Daily", "Weekly", "Monthly"],
      chartHourlyDurationItem: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "00"
      ],
      kwhConsumption,
      occupancy,
      temperature: temp,
      chartOptions: {
        legend: {
          position: 'left',
          align: 'start',
          labels: {
            boxWidth: 12
          }
        },
      },
      filterItem: [
        "All",
        "Cluster"
      ],
      clusterItem: ['All Selected']
    };
  },
  methods: {
    chartDurationChange(payload) {
      console.log(payload);
    }
  }
};
</script>
 
 <style scoped>
.ant-progress-circle-wrap,
.ant-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>
