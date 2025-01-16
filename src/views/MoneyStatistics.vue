<template>
  <div class="statistics-page">
    <van-cell 
      v-for="(records, date) in recordsByDate" 
      :key="date"
      :title="date"
      :value="`${records.length}笔`"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MoneyStatistics',
  computed: {
    ...mapGetters(['recordsByDate'])
  }
}
</script>

<style scoped>
.statistics-page {
  padding: 16px;
}
</style>
