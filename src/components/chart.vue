
<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["categorys", "options", "paymentList"],

  computed: {
    testData() {
      return this.categorys.map((c) => {
        return this.paymentList.reduce((total, r) => {
          if (r.category === c) {
            total += r.value;
          }
          return total;
        }, 0);
      });
    },
  },

  watch: {
    categorys(value) {
      this.chartData.labels = value;
    },
    paymentList(value) {
      this.chartData.datasets[0].data = this.testData;
      this.renderChart(this.chartData, this.options);
      return value;
    },
  },
  options: {
    type: Object,
    default: null,
  },
  data() {
    return {
      chartData: {
        labels: this.categorys,
        datasets: [
          {
            label: "Categorys",
            data: this.testData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    };
  },
  // mounted() {
  //   this.renderChart(this.chartData, this.options);
  // },
};
</script>
