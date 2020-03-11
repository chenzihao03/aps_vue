<template>
  <div class="dragger-class">
    <vue-draggable-resizable
      :w="200"
      :h="200"
      @dragging="onDrag"
      @resizing="onResize"
      :parent="true"
      class-name="dragging1"
    >
      <el-container>
        <Table
          :table="table"
          :editGrid=true
          :rowNum=true
          :findUrl='findUrl'
          :pageSize="pageSize"
        ></Table>
      </el-container>
    </vue-draggable-resizable>
  </div>
</template>

<script>
  import Table from '@/common/components/Table'

  export default {
    components: {
      Table
    },
    data: function () {
      return {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
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
    },
    methods: {
      onResize: function (x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
      },
      onDrag: function (x, y) {
        this.x = x
        this.y = y
      }
    }
  }
</script>
<style>
  .dragger-class {
    height: 100%;
    width: 100%;
    position: relative;
    background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 10px 10px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 10px 10px;
  }

  .el-container {
    height: 100%;
    width: 100%;
  }
</style>
