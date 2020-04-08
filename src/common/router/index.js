import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'

// /* Layout */
import Layout from '@/common/layout/index'

Vue.use(Router);

export const constantRoutes = [{
  path: '*', // 页面不存在的情况下会跳到404页面
  redirect: '/error',
  name: 'notFound',
  hidden: true,
}, {
  path: '/error',
  component: () => import('@/common/components/error/index'),
  hidden: true,
}, {
  path: '/',
  redirect: '/login',
  hidden: true,
}, {
  path: '/login',
  component: () => import('@/common/components/login/index'),
  hidden: true,
}, {
  path: '',
  component: Layout,
  redirect: 'home',
  hidden: true,
  children: [{
    path: 'home',
    name: '首页',
    component: () => import('@/model/components/home/index'),
    meta: {title: '首页', icon: 'fa fa-home', requireAuth: true}
  }]
}, {
  path: '/task',
  name: '作业管理',
  component: Layout,
  meta: {title: '作业管理', icon: 'fa fa-tasks'},
  children: [{
    path: 'apsSchedule',
    name: '排程操作平台',
    component: () => import('@/model/aps/apsschedule/index'),
    meta: {title: '排程操作平台', icon: 'fa fa-window-restore', requireAuth: true}
  }, {
    path: 'apsDispatch',
    name: '排程任务指派',
    component: () => import('@/model/aps/apsdispatch/index'),
    meta: {title: '排程任务指派', icon: 'fa fa-truck', requireAuth: true}
  }]
}, {
  path: '/gantt',
  name: '甘特图',
  component: Layout,
  meta: {title: '甘特图', icon: 'fa fa-area-chart'},
  children: [{
    path: 'orderGantt',
    name: '订单甘特图',
    component: () => import('@/model/aps/orderGantt/index'),
    meta: {title: '订单甘特图', icon: 'fa fa-map-signs', requireAuth: true}
  }, {
    path: 'eqmGantt',
    name: '设备甘特图',
    component: () => import('@/model/aps/eqmGantt/index'),
    meta: {title: '设备甘特图', icon: 'fa fa-bar-chart', requireAuth: true}
  }]
}, {
  path: '/reports',
  name: '查询报表',
  component: Layout,
  meta: {title: '查询报表', icon: 'fa fa-search'},
  children: [{
    path: 'apsScheduleReport',
    name: '排产结果查询',
    component: () => import('@/model/aps/apsschedulereport/index'),
    meta: {title: '排产结果查询', icon: 'fa fa-file-text', requireAuth: true}
  }]
}, {
  path: '/apsSet',
  name: '排程设置',
  component: Layout,
  meta: {title: '排程设置', icon: 'fa fa-cogs'},
  children: [{
    path: 'apsSetting',
    name: '基础设定',
    component: () => import('@/model/aps/apsset/index'),
    meta: {title: '基础设定', icon: 'fa fa-cog', requireAuth: true}
  }, {
    path: 'apsRegular',
    name: '规则设定',
    component: () => import('@/model/aps/apsregular/index'),
    meta: {title: '规则设定', icon: 'fa fa-pencil-square-o', requireAuth: true}
  }, {
    path: 'apsSend',
    name: '自动发出设定',
    component: () => import('@/model/aps/taskissueset/index'),
    meta: {title: '自动发出设定', icon: 'fa fa-recycle', requireAuth: true}
  }, {
    path: 'apsConfirm',
    name: '自动确认设定',
    component: () => import('@/model/aps/taskonfirmsetting/index'),
    meta: {title: '自动确认设定', icon: 'fa fa-random', requireAuth: true}
  }]
}, {
  path: '/components',
  name: '组件',
  component: Layout,
  meta: {title: '组件', icon: 'mdi-video-input-component'},
  children: [{
    path: 'tree',
    name: '树',
    component: () => import('@/model/components/tree/index'),
    meta: {title: '树', icon: 'mdi-file-tree', requireAuth: true}
  }, {
    path: 'table',
    name: '表格',
    component: () => import('@/model/components/table/index'),
    meta: {title: '表格', icon: 'mdi-file-table', requireAuth: true}
  }, {
    path: 'carousel',
    name: '跑马灯',
    component: () => import('@/model/components/carousel/index'),
    meta: {title: '跑马灯', icon: 'mdi-view-carousel', requireAuth: true}
  }, {
    path: 'collapse',
    name: '折叠板',
    component: () => import('@/model/components/collapse/index'),
    meta: {title: '折叠板', icon: 'mdi-format-align-bottom', requireAuth: true}
  }, {
    path: 'form',
    name: '表单',
    component: () => import('@/model/components/form/index'),
    meta: {title: '表单', icon: 'mdi-book-minus', requireAuth: true}
  }, {
    path: 'draggerable',
    name: '拖动',
    component: () => import('@/model/components/draggerable/index'),
    meta: {title: '拖动', icon: 'mdi-book-minus', requireAuth: true}
  }]
}];


const createRouter = () => new Router({
  mode: 'hash',//去掉url的#
  base: '/aps/',
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
});

const router = createRouter();

/**
 * 路由重复调用报错的问题
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
};

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher
}

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  const token = store.state.token;
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
});

//抛出这个这个实例对象方便外部读取以及访问
export default router
