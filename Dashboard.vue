// components/Dashboard.vue
<template>
  <div>
    <h2>Dashboard</h2>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sales',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56],
          },
        ],
      };

      const chartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      const ctx = this.$refs.chart.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions,
      });
    },
  },
};
</script>
