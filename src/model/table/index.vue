<template>
  <el-container>
    <Table
      :table="table"
      :editGrid=true
      :rowNum=true
      :findUrl='findUrl'
      :pageSize="pageSize"
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
        table: [{
          prop: 'createDate',
          label: '创建日期',
          width: 200,
          sortable: true,
          align: 'center',
          type: 'date',
          resizable: true,
          headerAlign: 'center',
          readOnly: false
        }, {
          prop: 'employeeName',
          label: '员工姓名',
          width: 150,
          sortable: true,
          resizable: true,
          headerAlign: 'center',
          readOnly: false
        }, {
          prop: 'address',
          label: '地址',
          sortable: true,
          resizable: true,
          headerAlign: 'center',
          readOnly: false
        }],
        tableData: [],
        pageSize: 20,
        findUrl: 'findLogId'
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
