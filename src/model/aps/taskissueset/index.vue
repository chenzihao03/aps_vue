<template>
  <el-form :ref="form" :model="form">
    <el-form-item>
      <el-button type="primary" @click="save" round icon="el-icon-check">保存</el-button>
    </el-form-item>
    <el-form-item>
      设备上允许保留
      <el-input v-model="form.eqmTaskNum" style="width: 220px;"></el-input>
      个任务
    </el-form-item>
    <el-form-item>
      设备上允许保留
      <el-input v-model="form.eqmTaskHour" style="width: 220px;"></el-input>
      个小时任务
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          eqmTaskNum: '',
          eqmTaskHour: ''
        }
      }
    },
    methods: {
      save() {
        this.$message({
          showClose: true,
          message: '保存！'
        });
      }
    }
  }
</script>
