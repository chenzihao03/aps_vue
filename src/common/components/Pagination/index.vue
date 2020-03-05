<template>
  <el-pagination
    background
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-size="pageSize"
    layout="total, prev, pager, next, jumper"
    :total="totalNumber">
  </el-pagination>
</template>

<script>
  export default {
    props: ['totalNumber', 'pageSize','currentPage'],
    data() {
      return {
      }
    },
    methods: {
      handleSizeChange(val) {
        this.$emit('setCurrentPage', val);
      },
      handleCurrentChange(val) {
        this.$emit('setCurrentPage', val);
      },
    },
  }
</script>
<style>
</style>
