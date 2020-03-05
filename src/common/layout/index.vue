<template>
  <el-container style="height: 100%;width:100%;position: absolute">
    <sidebar
      :isCollapse="isCollapse"/>
    <el-container>
      <el-header>
        <navbar
          :isCollapse="isCollapse"
          @setCollapse="setCollapse"/>
      </el-header>
      <el-main>
        <app-main/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import {Navbar, Sidebar, AppMain} from './components'

  export default {
    name: 'Layout',
    components: {
      Navbar,
      Sidebar,
      AppMain
    },
    data() {
      return {
        isCollapse: false
      }
    },
    methods: {
      setCollapse(event) {
        this.isCollapse = event;
      }
    }
  }
</script>
<style>
  .el-header {
    text-align: center;
    padding: 0;
  }
</style>
