<template>
  <div>
    <el-menu mode="horizontal">
      <el-menu-item v-for="(item,index) in menuList" :key="index">{{item.name}}</el-menu-item>
    </el-menu>
    <handle-button @getData="ChangeTabName" name="初始化英雄" />
  </div>
</template>

<script>
import handleButton from '@/components/handleButton'
export default {
  name: 'indexHeader',
  components: { handleButton },
  data () {
    return {
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
      console.log(msg)
      // if (msg && msg.length > 0) {
      //   this.menuList = []
      //   msg.map(item => {
      //     this.menuList.push({ name: item })
      //   })
      // }
    }
  }
}
</script>

<style scoped>
</style>
