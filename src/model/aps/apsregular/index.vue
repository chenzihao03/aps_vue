<template>
  <el-container>
    <Table
      :table="mainTable"
      :findUrl='"findRegular"'
      :editGrid=true
      :isOperate=false
      :select=true
      :toolbar="toolbar"
    ></Table>
  </el-container>
</template>

<script>
  import Table from '@/common/components/Table'

  export default {
    components: {
      Table
    },
    data() {
      return {
        mainTable: [{
          prop: 'seqNo',
          label: '序号',
          width: 80,
          align: 'center',
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'regular',
          label: '规则',
          width: 500,
          resizable: true,
          headerAlign: 'center',
          type: 'combobox',
          align: 'center',
          storeConfig: [
            {code: 1, name: "订单紧急度"},
            {code: 2, name: "订单优先级"},
            {code: 3, name: "工序优先级"},
            {code: 4, name: "关键设备"},
            {code: 5, name: "订单最早开工"},
            {code: 6, name: "订单最早完工"},
            {code: 7, name: "工序周期最长"},
            {code: 8, name: "剩余操作数最多"},
            {code: 9, name: "同工装夹具"},
            {code: 10, name: "最短交付期"}
          ]
        }],
        toolbar: [{
          text: '增加',
          type: 'primary',
          icon: 'el-icon-edit',
          method: (select) => {
            this.tAdd(select)
          }
        }, {
          text: '保存',
          type: 'primary',
          icon: 'el-icon-check',
          method: (select) => {
            this.tSave(select)
          }
        }, {
          text: '删除',
          type: 'primary',
          icon: 'el-icon-delete',
          method: (select) => {
            this.tDelete(select)
          }
        }]
      }
    },
    methods: {
      tAdd(select) {
        this.$message({
          showClose: true,
          message: '保存！'
        });
      },
      tSave(select) {
        debugger;
        this.$message({
          showClose: true,
          message: '保存！'
        });
      },
      tDelete(index, row) {
        this.$message({
          showClose: true,
          message: '保存！'
        });
      }
    }
  }
</script>

<style>
  .el-container {
    height: 100%;
    width: 100%;
  }
</style>
