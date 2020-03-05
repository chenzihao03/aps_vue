<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item,index) in levelList" :key="index">
      <span v-if="item.redirect == null" class="no-redirect">{{ item.meta.title }}</span>
      <a v-else-if="item.name != null" @click.prevent="handleLink(item.redirect)">{{ item.name }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    data() {
      return {
        levelList: null
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    created() {
      this.getBreadcrumb()
    },
    methods: {
      getBreadcrumb() {
        this.levelList = this.$route.matched;
      },
      handleLink(redirect) {
        this.$router.push(redirect)
      }
    }
  }
</script>

<style scoped>
  .app-breadcrumb.el-breadcrumb {
    font-size: 15px;
    line-height: 50px;
    margin-left: 20px;
  }

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
</style>
