import { createStore } from 'vuex'

// 从localStorage加载数据
const loadRecords = () => {
  const records = localStorage.getItem('money-records')
  return records ? JSON.parse(records) : []
}

export default createStore({
  state: {
    records: loadRecords() // 从localStorage初始化
  },
  mutations: {
    ADD_RECORD(state, record) {
      state.records.push(record)
      // 保存到localStorage
      localStorage.setItem('money-records', JSON.stringify(state.records))
    }
  },
  actions: {
    addRecord({ commit }, record) {
      commit('ADD_RECORD', record)
    }
  },
  getters: {
    // 按日期统计
    recordsByDate: (state) => {
      return state.records.reduce((acc, record) => {
        const date = record.date
        if (!acc[date]) {
          acc[date] = []
        }
        acc[date].push(record)
        return acc
      }, {})
    },
    // 按类型统计
    recordsByType: (state) => {
      return state.records.reduce((acc, record) => {
        const type = record.type
        if (!acc[type]) {
          acc[type] = []
        }
        acc[type].push(record)
        return acc
      }, {})
    },
    // 按类型统计总金额
    totalByType: (state) => {
      return state.records.reduce((acc, record) => {
        const type = record.type
        const amount = parseFloat(record.amount) || 0
        acc[type] = (acc[type] || 0) + amount
        return acc
      }, {})
    }
  }
})
