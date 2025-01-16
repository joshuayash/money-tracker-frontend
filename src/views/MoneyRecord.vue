<template>
  <div class="record-page">
    <van-cell-group>
      <van-field
        v-model="form.amount"
        label="金额"
        type="number"
        placeholder="请输入金额"
      />
      <van-field
        v-model="form.type"
        label="类型"
        readonly
        clickable
        @click="showPicker = true"
        placeholder="请选择类型"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="typeOptions"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-field
        v-model="form.date"
        label="日期"
        type="date"
      />
      <van-field
        v-model="form.note"
        label="备注"
        type="textarea"
        placeholder="请输入备注"
      />
    </van-cell-group>

    <van-button 
      type="primary" 
      block
      @click="submit"
    >
      提交
    </van-button>
  </div>
</template>

<script>
import { showToast, Picker, Popup } from 'vant'

export default {
  components: {
    VanPicker: Picker,
    VanPopup: Popup
  },
  name: 'MoneyRecord',
  data() {
    return {
      showPicker: false,
      form: {
        amount: '',
        type: '',
        date: new Date().toISOString().split('T')[0],
        note: ''
      },
      typeOptions: [
        { text: '餐饮', value: '餐饮' },
        { text: '玩乐', value: '玩乐' },
        { text: '学习', value: '学习' },
        { text: '养车', value: '养车' }
      ]
    }
  },
  methods: {
    onConfirm(value) {
      this.form.type = value.selectedValues[0]
      this.showPicker = false
    },
    async submit() {
      try {
        await this.$store.dispatch('addRecord', this.form)
        showToast({
          type: 'success',
          message: '添加成功'
        })
        this.form = {
          amount: '',
          type: '',
          date: new Date().toISOString().split('T')[0],
          note: ''
        }
      } catch (error) {
        showToast({
          type: 'fail',
          message: '添加失败'
        })
      }
    }
  }
}
</script>

<style scoped>
.record-page {
  padding: 16px;
}
</style>
