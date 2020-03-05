<template>
  <div style="height:100%;width:100%">
    <el-row
      type="flex"
      style="height: 100%">
      <Table
        :table="table"
        :findUrl="'findApsDispatch'"
        :toolbar="toolbar"
        :editGrid=true
        :isOperate=false
        @selectHandle="selectHandle"
      ></Table>
    </el-row>
  </div>
</template>

<script>
  import Table from '@/common/components/Table'

  export default {
    components: {
      Table
    },
    filters: {},
    data() {
      return {
        table: [{
          prop: 'orderNo',
          label: '订单号',
          width: 120,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'itemNo',
          label: '物料号',
          width: 150,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'itemDesc',
          label: '物料说明',
          width: 300,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'sequenceNo',
          label: '工序序号',
          width: 120,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'operationDesc',
          label: '工序名称',
          width: 200,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'departmentCode',
          label: '部门编码',
          width: 120,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'departmentName',
          label: '部门名称',
          width: 150,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'workerCenterCode',
          label: '工作中心',
          width: 120,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'workerCenterDesc',
          label: '工作中心',
          width: 150,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'statusCode',
          label: '工序状态',
          width: 110,
          sortable: true,
          resizable: true,
          headerAlign: 'center',
          type: 'combobox',
          align: 'center',
          storeConfig: [
            {code: "U", name: "正常"},
            {code: "F", name: "完成"},
            {code: "S", name: "结束"}
          ]
        }, {
          prop: 'eqmNum',
          label: '设备编码',
          width: 150,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'eqmName',
          label: '设备名称',
          width: 200,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'teamCode',
          label: '设备编码',
          width: 120,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'teamName',
          label: '设备名称',
          width: 200,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'quantity',
          label: '派工数量',
          width: 120,
          type: "number",
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'startDate',
          label: '开工时间',
          width: 170,
          type: "datetime",
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'endDate',
          label: '结束时间',
          width: 170,
          type: "datetime",
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }
        ],
        toolbar: [{
          text: '保存',
          type: 'primary',
          icon: 'el-icon-check',
          method: (index, row) => {
            this.tSave(index, row)
          }
        }, {
          text: '确认派工',
          type: 'primary',
          icon: 'el-icon-document-checked',
          method: (index, row) => {
            this.tDispatch(index, row)
          }
        }, {
          text: '当天任务派工',
          type: 'primary',
          icon: 'el-icon-document-checked',
          method: (index, row) => {
            this.tDayDispatch(index, row)
          }
        }, {
          text: '三天任务派工',
          type: 'primary',
          icon: 'el-icon-document-checked',
          method: (index, row) => {
            this.tThreeDispatch(index, row)
          }
        }, {
          text: '一周任务派工',
          type: 'primary',
          icon: 'el-icon-document-checked',
          method: (index, row) => {
            this.tWeekDispatch(index, row)
          }
        }, {
          text: '一月任务派工',
          type: 'primary',
          icon: 'el-icon-document-checked',
          method: (index, row) => {
            this.tMonthDispatch(index, row)
          }
        }, {
          text: '派工撤销',
          type: 'primary',
          icon: 'el-icon-document-remove',
          method: (index, row) => {
            this.tDelDispatch(index, row)
          }
        }],
        tableData:
          []
      }
    },
    methods: {
      selectHandle(row, column, event) {
      },
      tSave(index, row) {
        this.$message({
          showClose: true,
          message: '保存！'
        });
      },
      tDispatch(index, row) {
        this.$message({
          showClose: true,
          message: '确认派工！'
        });
      },
      tDayDispatch(index, row) {
        this.$message({
          showClose: true,
          message: '当天任务派工！'
        });
      },
      tThreeDispatch(index, row) {
        this.$message({
          showClose: true,
          message: '三天任务派工！'
        });
      },
      tWeekDispatch(index, row) {
        this.$message({
          showClose: true,
          message: '一周任务派工！'
        });
      },
      tMonthDispatch(index, row) {
        this.$message({
          showClose: true,
          message: '一月任务派工！'
        });
      },
      tDelDispatch(index, row) {
        this.$message({
          showClose: true,
          message: '派工撤销！'
        });
      }
    }
  }
</script>
