<template>
  <el-aside style="width: auto;height: 100%;overflow-x: hidden;background-color: #304156;">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#304156"
      text-color="#fff"
      overflow-y="auto"
      router
      :collapse="isCollapse"
    >
      <div @click="toggle"
           @contextmenu.prevent="visible = !visible"
           style="text-align: center;padding: 50px 0px 20px 0px;border-radius: 30px;">
        <img
          slot="reference"
          src="@/assets/img/logo.jpg"
          style="height: 50px;width: 50px;border-radius: 25px;"
        />
      </div>
      <sidebar-item :menu="routes"></sidebar-item>
    </el-menu>
  </el-aside>
</template>

<script>
  import SidebarItem from './SidebarItem'

  export default {
    components: {
      SidebarItem
    },
    name: 'Sidebar',
    props: {
      isCollapse: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      },
      toggle() {
        this.$router.push("/home")
      },
      showEdit() {
        alert("开始注销")
      }
    },
    computed: {
      routes() {
        return this.$router.options.routes
      }
    }
  }
</script>

<style scoped>
  /*侧边栏大小*/
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  /*去掉侧边栏边框*/
  .el-menu {
    border: none;
  }
</style>
