<template>
  <div style="height:100%;width:100%">
    <el-row
      type="flex"
      style="height: 30%">
      <Table
        :table="mainTable"
        :isPage=false
        :findUrl='mainUrl'
        @selectHandle="selectHandle"
      ></Table>
    </el-row>
    <el-row
      type="flex"
      style="height: 70%">
      <Table
        :tbar=false
        :table="detailTable"
        :findUrl='detailUrl'
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
    data() {
      return {
        mainTable: [{
          prop: 'timeFlag',
          label: '次数',
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
          align: 'center'
        }, {
          prop: 'orderCycle',
          label: '订单总周期',
          width: 110,
          resizable: true,
          headerAlign: 'center',
          align: 'center'
        }, {
          prop: 'orderDelay',
          label: '订单拖期数',
          width: 110,
          resizable: true,
          headerAlign: 'center',
          align: 'center'
        }, {
          prop: 'createDate',
          label: '计算时间',
          type: 'datetime',
          width: 180,
          resizable: true,
          headerAlign: 'center',
          align: 'center'
        }],
        detailTable: [{
          prop: 'orderUrgency',
          label: '订单紧急度',
          width: 120,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'orderPriority',
          label: '订单优先级',
          width: 120,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'sequencePriority',
          label: '工序优先级',
          width: 120,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
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
          width: 200,
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
          width: 120,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'keyFlag',
          label: '关键工序',
          width: 110,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'planType',
          label: '订单类型',
          width: 110,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'quantityPlanned',
          label: '要求完成数量',
          width: 130,
          type: 'number',
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'setUpTime',
          label: '准备时间(小时)',
          width: 140,
          type: 'number',
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'runtime',
          label: '加工时间(小时)',
          width: 140,
          type: 'number',
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'processTime',
          label: '生产加工工时(小时)',
          width: 170,
          type: 'number',
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'otherTime',
          label: '其他工时(小时)',
          width: 140,
          type: 'number',
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'eqmName',
          label: '任务安排设备',
          width: 140,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'startDate',
          label: '派工任务开始时间',
          width: 170,
          type: 'datetime',
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'endDate',
          label: '派工任务结束时间',
          width: 170,
          type: 'datetime',
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'lockFlag',
          label: '锁定标识',
          width: 110,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'teamCode',
          label: '任务安排班组',
          width: 130,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'teamName',
          label: '任务安排班组',
          width: 130,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }, {
          prop: 'status',
          label: '工序状态',
          width: 110,
          sortable: true,
          resizable: true,
          headerAlign: 'center'
        }],
        tableData: [],
        mainUrl: 'findApsResultTime',
        detailUrl: 'findApsResult',
      }
    },
    methods: {
      selectHandle(row, column, event) {
        debugger;
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
