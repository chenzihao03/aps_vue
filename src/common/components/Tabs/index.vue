<template>
  <el-tabs v-model="activeTab" @tab-click="handleClick" closable @tab-remove="removeTab">
    <el-tab-pane label="用户管理" name="home">用户管理</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeTab: 'home',
      }
    },
    methods: {
      handleClick(tab, event) {
      },
      removeTab(targetName) {
      }
    }
  }
</script>
<style scoped>
  .el-tabs__nav-scroll {
    margin: 5px 0 0 30px;
  }

  .el-tabs__content {
    display: none;
  }
</style>
