<template>
  <div>
    <el-button @click="handleClick" :type="buttonColor">{{name}}</el-button>
  </div>
</template>

<script>
import Server from '@/assets/utils/useApi'
const server = new Server()
export default {
  name: 'handleButton',
  props: {
    name: {
      type: [String, Number],
      default: '确认'
    },
    count: {
      type: Number,
      default: 0
    },
    buttonColor: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      menu: Array
    }
  },
  methods: {
    async handleClick () {
      let res = await this.getData()
      this.$emit('getData', res)
    },
    getData () {
      return server.getArray()
    }
  }
}
</script>

<style scoped>
</style>
