<template>
  <el-container>
    <el-header
      height="40px"
      v-if="tbar"
      class="el-header">
      <el-row :gutter="20">
        <el-col :span="3">
          <el-input
            prefix-icon="el-icon-search"
            v-model="inputData"
            @change="search"
          >
          </el-input>
        </el-col>
        <el-col :span="21">
          <el-button
            v-for="(item,index) in toolbar"
            :key="index"
            :type=item.type
            :icon=item.icon
            round
            @click="item.method(multipleTable)"
          >{{item.text}}
          </el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="el-main">
      <el-table
        :data="isPage?tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize):tableData"
        ref="multipleTable"
        border
        lazy
        highlight-current-row
        row-key="id"
        height="100%"
        v-loading="loading"
        element-loading-text="拼命加载中"
        :load="load"
        @row-dblclick="handleEdit"
        @row-click="selectHandle"
        @selection-change="handleSelectionChange"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column
          v-if="rowNum"
          type="index"
          align="center"/>
        <el-table-column
          v-if="select"
          type="selection"
          align="center"/>
        <el-table-column
          v-for="(item,index) in table"
          :key="index"
          :prop="item.prop"
          :type="item.type"
          :label="item.label"
          :width="item.width"
          :align="item.align"
          :sortable="item.sortable"
          :resizable="item.resizable"
          :header-align="item.headerAlign"
          :show="item.show"
          v-if="!item.hidden">
          <template slot-scope="scope">
            <el-date-picker
              v-if="(item.readOnly===false || item.readOnly===undefined) && scope.row.editable && (item.type==='date' || item.type==='datetime')"
              v-model="scope.row[item.prop]"
              :type="item.type"
              value-format="yyyy-MM-dd">
            </el-date-picker>
            <input
              v-else-if="(item.readOnly===false || item.readOnly===undefined) && scope.row.editable && item.type==='checkBox'"
              type="checkbox"
              v-model="scope.row[item.prop]"
              class="check_box tui-checkbox"
              true-value="0"
              false-value="1"/>
            <input
              v-else-if="item.type==='checkBox'"
              type="checkbox"
              v-model="scope.row[item.prop]"
              disabled="false"
              class="check_box tui-checkbox"
              true-value="0"
              false-value="1"/>
            <el-select
              v-else-if="(item.readOnly===false || item.readOnly===undefined) && scope.row.editable && item.type==='combobox'"
              v-model="scope.row[item.prop]"
              style="width:100%">
              <el-option
                v-for="(item1,index1) in item.storeConfig"
                :key="index+index1"
                :label="item1.name"
                :value="item1.code">
              </el-option>
            </el-select>
            <template
              v-else-if="item.type==='combobox'"
              v-for="item1 in item.storeConfig">
              <span v-if="scope.row[item.prop] === item1.code">{{item1.name}}</span>
            </template>
            <el-input
              v-else-if="(item.readOnly===false || item.readOnly===undefined) && scope.row.editable"
              v-model="scope.row[item.prop]">
            </el-input>
            <span v-else>{{scope.row[item.prop]}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          width="150"
          align="center"
          headerAlign="center"
          v-if="editGrid&&isOperate">
          <template slot-scope="scope">
            <el-button
              size="mini"
              icon="el-icon-check"
              @click="handleSave(scope.$index, scope.row)">
            </el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index, scope.row)">
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer
      v-if="isPage"
      class="el-footer"
      height="35px">
      <Pagination
        :totalNumber="totalNumber"
        :pageSize="pageSize"
        @setCurrentPage="setCurrentPage"/>
    </el-footer>
  </el-container>
</template>
<script>
  import Pagination from '../Pagination'

  export default {
    components: {
      Pagination
    },
    props: {
      table: {
        type: Array
      },
      toolbar: {
        type: Array
      },
      findUrl: {
        type: String
      },
      editGrid: {
        type: Boolean,
        default: false
      },
      tbar: {
        type: Boolean,
        default: true
      },
      rowNum: {
        type: Boolean,
        default: true
      },
      pageSize: {
        type: Number,
        default: 15
      },
      isPage: {
        type: Boolean,
        default: true
      },
      inputData: {
        type: String,
        default: ''
      },
      isOperate: {
        type: Boolean,
        default: true
      },
      select: {
        type: Boolean,
        default: false
      },
      loadTree: {
        type: String
      },
      rowKey: {
        type: String
      }
    },
    data() {
      return {
        currentPage: 1,
        totalNumber: 0,
        tableData: [],
        loading: true,
        multipleTable: []
      }
    },
    created() {
      this.getTableData()
    },
    methods: {
      load(tree, treeNode, resolve) {
        let that = this;
        this.$ajax.get(this.loadTree, {params: {orderNo: tree[this.rowKey]}}).then((response) => {
          // 响应成功回调
          resolve(response.data);
        }, function (response) {
          that.$message.error({
            showClose: true,
            message: !response.body.message ? '查询树出错,请检查后台服务！' : response.body.message
          });
        });
      },
      setCurrentPage(event) {
        this.currentPage = event;
      },
      handleEdit(row) {
        if (this.editGrid) {
          row.editable = !row.editable;
        }
      },
      handleSave(index, row) {
      },
      handleDelete(index, row) {
      },
      getCheckBox(flag) {
        return true;
      },
      getTableData() {
        let that = this;
        this.$ajax.get(this.findUrl).then((response) => {
          // 响应成功回调
          that.tableData =
            response.data.map(item => {
              item['editable'] = false;
              return item;
            });
          that.totalNumber = response.data.length;
          that.loading = false;
        }, function (response) {
          this.$message.error({
            showClose: true,
            message: !response.body.message ? '连接超时,请检查后台服务！' : response.body.message
          });
          that.loading = false;
        });
      },
      selectHandle(row, column, event) {
        this.multipleTable = row;
        this.$emit('selectHandle', row, column, event)
      },
      handleSelectionChange(val) {
        this.multipleTable = val;
        return true;
      },
      search() {
        this.$message({
          showClose: true,
          message: '搜索开始！'
        });
      }
    }
  }
</script>

<style scoped>
  .el-date-editor.el-input {
    width: auto;
  }

  .el-input--prefix .el-input__inner {
    text-align: center;
  }

  .el-main {
    overflow: hidden;
  }

  .el-header {
    text-align: left;
    padding-left: 18px;
  }

  .el-footer {
    text-align: center;
  }

  .tui-checkbox[type="checkbox"] {
    width: 14px;
    height: 14px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 16px;
    margin-right: 10px;
    position: relative;
  }

  .tui-checkbox[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    border: 1px solid #409eff;
    border-radius: 4px;
    font-size: 18px;
  }

  .tui-checkbox[type="checkbox"]:checked::before {
    content: "\2713";
    background-color: #409eff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #409eff;
    border-radius: 4px;
    color: white;
    font-size: 18px;
  }
</style>
