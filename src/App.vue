<template>
  <div id="app">
    <transition name="fade-transform" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif, "Material Design Icons";
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: none;
  }

  [v-cloak] {
    display: none
  }

  ::-webkit-scrollbar {
    width: 10px; /*对垂直流动条有效*/
    height: 10px; /*对水平流动条有效*/
  }

  /*定义滚动条轨道 内阴影*/
  ::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    border-radius: 10px;
    background: transparent;
  }

  /*定义滚动条轨道 内阴影*/
  ::-webkit-scrollbar-track:hover {
    /*滚动条里面轨道*/
    background: rgba(191, 191, 191, 0.23);
  }

  /*定义滑块 内阴影*/
  ::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background: rgba(174, 174, 174, 0.39);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(174, 174, 174, 0.42);
  }

  .el-popover {
    background: #304156 !important;
    border: none;
  }

  .el-input--suffix .el-input__inner {
    text-align: center;
  }
</style>
