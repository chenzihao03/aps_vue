<template>
  <el-form ref="form" :model="form" label-width="100px" label-position="left">
    <el-row class="header-class">
      <el-button type="primary" @click="save" round icon="el-icon-check">保存</el-button>
    </el-row>

    <el-row class="row-class">
      <el-col :span="12">
        <span>参数设置：</span>
      </el-col>
      <el-col :span="12">
        <span>分派方向：</span>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="自动排程">
          <el-switch v-model="form.autoSchedule"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="12" :push="1">
        <el-radio-group v-model="form.direction">
          <el-radio :label="0">正向</el-radio>
          <el-radio :label="1">逆向</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="跳过任务确认">
          <el-switch v-model="form.skipConfirm"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <span>时间：</span>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="设备选择方式">
          <el-select v-model="form.eqmMode" placeholder="请选择设备选择方式">
            <el-option label="工艺" value="GY"></el-option>
            <el-option label="工作中心" value="ZX"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12" :push="1">
        <el-radio-group v-model="form.schduleFlag">
          <el-radio :label="0">任务变化时</el-radio>
          <el-radio :label="1">设备、人员变化时</el-radio>
          <el-radio :label="2">每天运算</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="派工方式">
          <el-select v-model="form.dispatchMode" placeholder="请选择派工方式">
            <el-option label="班组派工" value="BZ"></el-option>
            <el-option label="人员派工" value="RY"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="时间段1">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.schdule1" align="center"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="订单类型">
          <el-select v-model="form.orderType" placeholder="请选择订单类型">
            <el-option label="加工" value="PRO"></el-option>
            <el-option label="装备" value="ASS"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="时间段2">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.schdule2"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="结果保留次数">
          <el-input v-model="form.holdTime" style="width: 220px;"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="时间段3">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.schdule3"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item label="计算范围">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.apsScope"></el-date-picker>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          direction: '',
          autoSchedule: false,
          skipConfirm: false,
          holdTime: '',
          orderType: '',
          dispatchMode: '',
          eqmMode: '',
          apsScope: '',
          schduleFlag: '',
          schdule1: '',
          schdule2: '',
          schdule3: ''
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
<style scoped>
  .header-class {
    margin-bottom: 30px;
  }

  .row-class {
    margin-bottom: 30px;
  }

</style>
