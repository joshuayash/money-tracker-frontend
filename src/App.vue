<template>
  <div class="app-container">
    <router-view />
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="notes-o" to="/record">记账</van-tabbar-item>
      <van-tabbar-item icon="chart-trending-o" to="/statistics">统计</van-tabbar-item>
      <van-tabbar-item icon="bar-chart-o" to="/charts">图表</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
