<template>
  <el-container style="height: 100%">

  <el-aside width="auto">
    <common-aside/>
  </el-aside>

  <el-container>
    <el-header>
      <common-header/>
    </el-header>
    <commom-tag/>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import CommomTag from '../components/common/CommomTag.vue'
import commonAside from '../components/common/commonAside.vue'
import CommonHeader from '../components/common/CommonHeader.vue'


export default {
  name: 'Home',
   components: { 
      commonAside,
      CommonHeader,
      CommomTag 
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="less" scoped>
  .el-header {
    background-color: #000;
  }

  .el-main {
    padding-top: 0;
  }
</style>