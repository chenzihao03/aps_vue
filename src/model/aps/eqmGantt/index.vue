<template>
  <div id="gantt_here" style="height: 100%;"></div>
</template>
<script>

  export default {
    data() {
      return {
        tasks: {
          data: [],
          links: []
        }
      }
    },
    mounted() {
      this.getOrderGantt();
    },
    methods: {
      getOrderGantt() {
        let that = this;
        this.$ajax.get('findOrderGantt').then((response) => {
          // 响应成功回调
          that.tasks.data = response.data;
          this.$ajax.get('findOrderLinks').then((response) => {
            that.tasks.links = response.data;
            that.showGantt();
          }, function (response) {
            // 响应错误回调
            that.$notify.error({
              title: '查询甘特图数据失败！',
              message: response
            });
          });
        }, function (response) {
          // 响应错误回调
          that.$notify.error({
            title: '查询甘特图数据失败！',
            message: response
          });
        });
      },
      showGantt() {
        gantt.clearAll();
        gantt.config.scale_unit = "month";
        gantt.config.date_scale = "%Y,%F";
        gantt.config.subscales = [
          {unit: "day", step: 1, date: "%j, 星期%D"}
        ];
        this.statusFlag = "day";

        //行高
        gantt.config.scale_height = 50;
        gantt.config.autofit = false;

        //拖出屏幕自动滚动
        gantt.config.autoscroll = true;
        gantt.config.autoscroll_speed = 100;

        //设置工作时间，周六日自动跳过
        gantt.config.work_time = false;
        gantt.config.correct_work_time = false;

        //+号打开数据框
        gantt.config.details_on_create = false;

        //是否可调整进度
        gantt.config.drag_progress = false;

        //双击打开数据框
        gantt.config.details_on_dblclick = false;

        //设置持续时间单位“分钟”，“小时”，“日”，“周”，“月”，“年”
        gantt.config.duration_unit = "hour";

        //可以通过拖放调整任务大小
        gantt.config.drag_resize = true;

        //是否选中行
        gantt.config.multiselect = false;

        //是否只读
        gantt.config.readonly = false;

        //表格的行高（数据列及甘特图高度）
        gantt.config.row_height = 30;

        //自动调度
        gantt.config.auto_scheduling = true;

        //是否显示进度
        gantt.config.show_progress = true;

        //表格列宽自适应
        gantt.config.autofit = true;

        //是否可以增加连接线
        gantt.config.drag_links = false;

        //是否允许拖动
        gantt.config.drag_move = true;

        //当点击任务时，将任务放在可见的范围。
        gantt.config.scroll_on_click = true;

        //发生异常时，禁止弹出警告到UI界面
        gantt.config.show_errors = false;

        //按需渲染
        gantt.config.smart_rendering = true;
        gantt.config.smart_scales = true;

        //触屏模式
        //gantt.config.touch = "force";

        //启用撤销
        gantt.config.undo = true;

        //启用键盘导航
        gantt.config.keyboard_navigation = true;

        //自动调整比例
        gantt.config.fit_tasks = true;

        gantt.templates.scale_cell_class = function (dates) {
          if (dates.getDay() == 0 || dates.getDay() == 6) {
            return "weekend";
          }
        };
        gantt.templates.task_cell_class = function (item, dates) {
          if (dates.getDay() == 0 || dates.getDay() == 6) {
            return "weekend";
          }
        };

        //数据列设置
        gantt.config.columns = [
          {name: "text", label: "任务信息", tree: true, width: "200"},
          {name: "item", label: "物料说明", align: "center"},
          {name: "quantity", label: "数量", align: "center"},
          {name: "endDate", label: "结束时间", align: "center"}
        ];
        //设置数据列网格的宽度
        gantt.config.grid_width = 460;
        //鼠标悬停
        gantt.templates.tooltip_text = function (start, end, task) {
          if (task.dataSources == 1) {
            return "<b>使用设备:</b> " + task.text + "<br/><b>开始时间:</b> " + task.startDate +
              "<br/><b>结束时间:</b> " + task.endDate + "<br/><b>锁定状态: 该任务为锁定任务</b> ";
          } else {
            return "<b>使用设备:</b> " + task.text + "<br/><b>开始时间:</b> " + task.startDate +
              "<br/><b>结束时间:</b> " + task.endDate;
          }
        };
        gantt.init("gantt_here");
        gantt.parse(this.tasks);
      }
    }
  }
</script>
