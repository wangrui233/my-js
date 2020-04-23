<template>
  <div>
    <el-menu mode="horizontal">
      <el-menu-item v-for="(item,index) in menuList" :key="index">{{item.name}}</el-menu-item>
    </el-menu>
    <handle-button @getData="ChangeTabName" :name="btnName" />
    <el-button @click="handleClick">test button</el-button>
  </div>
</template>

<script>
import Server from '@/assets/utils/useApi'
import handleButton from '@/components/handleButton'
const server = new Server()
export default {
  name: 'indexHeader',
  components: { handleButton },
  data () {
    return {
      btnName: '确认',
      menuList: [
        { name: '1号位' },
        { name: '2号位' },
        { name: '3号位' },
        { name: '4号位' },
        { name: '5号位' }
      ]
    }
  },
  methods: {
    ChangeTabName (msg) {
      this.btnName = msg
    },
    async handleClick () {
      let res = await server.getAll()
      console.log(res)
    }
  }
}
</script>

<style scoped>
</style>
