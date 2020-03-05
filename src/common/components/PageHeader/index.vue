<template>
  <div>
    <el-row class="el-page-header">
      <el-col :span="0.5">
        <div
          class="el-page-header__left"
          style="margin-left: 15px;"
          @click="setCollapse">
          <el-button
            v-if="!pageHeaderCollapse"
            type="text"
            class="el-icon-s-fold"
            style="font-size: 25px"
          ></el-button>
          <el-button
            v-else
            type="text"
            class="el-icon-s-unfold"
            style="font-size: 25px"
          ></el-button>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="el-page-header__content" style="float:left;padding-top: 15px;">
          <span :class="levelList.meta.icon"></span>
          <slot name="content">{{ levelList.name }}</slot>
        </div>
      </el-col>
      <el-col :span="2" :offset="6">
        <div style="margin: 5px">
          <el-row>
            <el-col :span="9" :offset="6">
              <el-dropdown>
              <span class="el-dropdown-link">
                <el-badge
                  :is-dot="isDot"
                  class="el-icon-message-solid"
                ></el-badge>
              </span>
                <el-dropdown-menu
                  slot="dropdown">
                  <div class="block" style="margin:20px 50px 0 20px;">
                    <el-timeline>
                      <el-timeline-item timestamp="2018/4/12" placement="top" type="danger">
                        <el-card>
                          <h4>更新 Github 模板</h4>
                          <p>王小虎 提交于 2018/4/12 20:46</p>
                        </el-card>
                      </el-timeline-item>
                      <el-timeline-item timestamp="2018/4/3" placement="top" type="info">
                        <el-card>
                          <h4>更新 Github 模板</h4>
                          <p>王小虎 提交于 2018/4/3 20:46</p>
                        </el-card>
                      </el-timeline-item>
                      <el-timeline-item timestamp="2018/4/2" placement="top" type="warning">
                        <el-card>
                          <h4>更新 Github 模板</h4>
                          <p>王小虎 提交于 2018/4/2 20:46</p>
                        </el-card>
                      </el-timeline-item>
                    </el-timeline>
                  </div>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="9">
              <el-dropdown>
              <span class="el-dropdown-link">
                <el-badge
                  :is-dot="isDot"
                  class="el-icon-s-custom"
                ></el-badge>
              </span>
                <el-dropdown-menu
                  slot="dropdown">
                  <el-dropdown-item
                    icon="fa fa-info-circle"
                    @click.native="dialogFormVisible = true"
                  >关于
                  </el-dropdown-item>
                  <el-dropdown-item
                    icon="fa fa-lock"
                    @click.native="dialogFormVisible = true"
                  >密码
                  </el-dropdown-item>
                  <el-dropdown-item
                    divided
                    icon="fa fa-power-off"
                    @click.native="logout"
                  >注销
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-dialog
      title="修改密码"
      :visible.sync="dialogFormVisible">
    </el-dialog>
  </div>
</template>

<script>
  export default {
    props: {
      isCollapse: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        pageHeaderCollapse: this.isCollapse,
        levelList: null,
        isDot: false,
        dialogFormVisible: false,
        text: "这是一条提示！"
      }
    },
    watch: {
      $route() {
        this.getPageHeader()
      }
    },
    created() {
      this.getPageHeader()
    },
    methods: {
      setCollapse(event) {
        this.pageHeaderCollapse = !this.isCollapse;
        this.$emit('setCollapse', this.pageHeaderCollapse)
      },
      getPageHeader() {
        this.levelList = this.$route;
      },
      goBack() {
        this.$router.go(-1)
      },
      setPassword() {
        this.$message({
          showClose: true,
          message: '设置密码！'
        });
      },
      logout() {
        this.$message({
          showClose: true,
          message: '注销！'
        });
      }
    }
  }
</script>
<style scoped>
  .el-badge {
    font-size: 20px;
    margin-top: 10px;
    color: #304156;
  }

  .el-dropdown {
    color: #304156;
  }

  .el-badge:hover {
    color: #000000;
    font-size: 20px;
    margin-top: 10px;
  }

  .el-button {
    color: #000;
  }

  .el-button:hover {
    color: rgba(50, 50, 50, 0.83);
  }
</style>
