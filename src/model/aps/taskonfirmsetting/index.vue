<template>
  <el-form ref="form" :model="form">
    <el-form-item>
      <el-button type="primary" @click="save" round icon="el-icon-check">保存</el-button>
    </el-form-item>

    <el-form-item>
      <el-switch v-model="form.confirmFlag"></el-switch>
      任务超过
      <el-input v-model="form.autoConfirm" style="width: 150px;" :disabled="!form.confirmFlag"></el-input>
      小时自动确认
    </el-form-item>

    <el-form-item>
      <el-switch v-model="form.cancelFlag"></el-switch>
      任务超过
      <el-input v-model="form.autoCancel" style="width: 150px;" :disabled="!form.cancelFlag"></el-input>
      小时自动取消
    </el-form-item>

    <el-form-item>
      <el-switch v-model="form.produceConfirm"></el-switch>
      <span style="width:220px;">所有任务均确认，则该排程结果自动完成可生产确认</span>
    </el-form-item>
    <el-form-item>
      <el-switch v-model="form.autoTask"></el-switch>
      <span style="width:220px;">可生产确认完成后自动进行派工</span>
    </el-form-item>
    <el-form-item>
      <el-switch v-model="form.noticeManager"></el-switch>
      <span style="width:220px;">任务确认或取消，通知排程管理员</span>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          confirmFlag: false,
          autoConfirm: '',
          cancelFlag: false,
          autoCancel: '',
          produceConfirm: false,
          autoTask: false,
          noticeManager: false
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
