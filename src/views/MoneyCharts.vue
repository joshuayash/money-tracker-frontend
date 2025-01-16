<template>
  <div class="charts-page">
    <div class="chart-container">
      <canvas ref="pieChart"></canvas>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Chart, registerables } from 'chart.js'
import { ref, onMounted, watch } from 'vue'

export default {
  name: 'MoneyCharts',
  setup() {
    const store = useStore()
    const pieChart = ref(null)
    const pieChartInstance = ref(null)

    const totalByType = computed(() => store.getters.totalByType)

    const renderPieChart = (data) => {
      if (!pieChart.value) return
      
      // 销毁旧实例
      if (pieChartInstance.value) {
        pieChartInstance.value.destroy()
      }

      // 处理空数据
      const chartData = Object.keys(data).length === 0 ? {
        '餐饮': 0,
        '交通': 0,
        '娱乐': 0,
        '购物': 0,
        '其他': 0
      } : data

      // 创建新实例
      pieChartInstance.value = new Chart(pieChart.value.getContext('2d'), {
        type: 'pie',
        data: {
          labels: Object.keys(chartData),
          datasets: [{
            data: Object.values(chartData),
            backgroundColor: [
              '#FF6384',
              '#36A2EB', 
              '#FFCE56',
              '#4BC0C0',
              '#9966FF'
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      })
    }

    const initCharts = () => {
      // 初始化canvas尺寸
      if (pieChart.value) {
        pieChart.value.width = pieChart.value.parentElement.offsetWidth
        pieChart.value.height = pieChart.value.parentElement.offsetHeight
      }

      // 渲染饼图
      renderPieChart(totalByType.value)
    }

    onMounted(() => {
      // 注册Chart.js插件
      Chart.register(...registerables)
      
      // 初始化图表
      initCharts()
    })

    // 监听数据变化
    watch(totalByType, () => {
      initCharts()
    })

    return {
      pieChart
    }
  }
}
</script>

<style scoped>
.charts-page {
  padding: 16px;
  height: calc(100vh - 100px);
}

.chart-container {
  height: 400px;
  position: relative;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
