import '@/common/styles/index.css'

import Vue from 'vue'
import App from './App'
import store from './common/store'
import router from './common/router'
import axios from './common/axios'
import 'babel-polyfill'//兼容IE浏览器
//解决侧边栏隐藏字不隐藏的问题
import Fragment from 'vue-fragment'
//引入elementUI
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css'
//引入Font Awesome图标库
import 'font-awesome/css/font-awesome.min.css'
// 引入echarts
import echarts from 'echarts'
//引入axios


//引入甘特图
import gantt from 'dhtmlx-gantt'
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'
// import 'dhtmlx-gantt/codebase/skins/dhtmlxgantt_material.css'

import 'dhtmlx-gantt/codebase/locale/locale_cn'

Vue.prototype.$ajax = axios;
Vue.prototype.$echarts = echarts;
Vue.use(gantt);
Vue.use(echarts);
Vue.use(Fragment.Plugin);
Vue.use(ElementUI, {locale});
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
