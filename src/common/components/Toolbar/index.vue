<template>
  <div>
    <el-button
      v-for="(item,index) in toolbar"
      :type=item.type
      :icon="item.icon"
      size="size"
    > {{item.text}}
    </el-button>
  </div>
</template>
<script>
  export default {
    props: {
      toolbar: {
        type: Array
      },
      size: {
        type: String,
        default: 'medium'
      }
    },
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
