import Mock from 'mockjs';
import { resultSuccess } from '../utils';

const Random = Mock.Random;

const token = Random.string('upper', 32, 32);

const userInfo = {
  userId: '1',
  userName: 'admin',
  realName: '管理员大人',
  avatar: 'https://z3.ax1x.com/2021/10/29/5jnWgf.jpg',
  role: 'admin',
  password: '123456',
};
const userRoutes = [
  {
    name: 'dashboard',
    path: '/dashboard',
    redirect: '/dashboard/workbench',
    meta: {
      title: '仪表盘',
      requiresAuth: true,
      icon: 'icon-park-outline:analysis',
    },
    children: [
      {
        name: 'dashboard_workbench',
        path: '/dashboard/workbench',
        meta: {
          title: '工作台',
          requiresAuth: true,
          icon: 'icon-park-outline:alarm',
        },
      },
      {
        name: 'dashboard_monitor',
        path: '/dashboard/monitor',
        meta: {
          title: '监控页',
          requiresAuth: true,
          icon: 'icon-park-outline:anchor',
        },
      },
    ],
  },
  {
    name: 'test',
    path: '/test',
    redirect: '/test/test1',
    meta: {
      title: '多级菜单演示',
      requiresAuth: true,
      icon: 'icon-park-outline:list',
    },
    children: [
      {
        name: 'test1',
        path: '/test/test1',
        meta: {
          title: '多级菜单1',
          requiresAuth: true,
          icon: 'icon-park-outline:list',
        },
      },
      {
        name: 'test2',
        path: '/test/test2',
        meta: {
          title: '多级菜单2',
          requiresAuth: true,
          icon: 'icon-park-outline:list',
        },
        children: [
          {
            name: 'test2_detail',
            path: '/test/test2/detail',
            meta: {
              title: '多级菜单2的详情页',
              requiresAuth: true,
              icon: 'icon-park-outline:list',
              hide: true,
              activeMenu: '/test/test2',
            },
          },
        ],
      },
      {
        name: 'test3',
        path: '/test/test3',
        meta: {
          title: '多级菜单3',
          requiresAuth: true,
          icon: 'icon-park-outline:list',
        },
        children: [
          {
            name: 'test4',
            path: '/test/test3/test4',
            meta: {
              title: '多级菜单3-1',
              requiresAuth: true,
              icon: 'icon-park-outline:list',
            },
          },
        ],
      },
    ],
  },
  {
    name: 'list',
    path: '/list',
    redirect: '/list/commonList',
    meta: {
      title: '列表页',
      requiresAuth: true,
      icon: 'icon-park-outline:list-two',
    },
    children: [
      {
        name: 'list_commonList',
        path: '/list/commonList',
        meta: {
          title: '常用列表',
          requiresAuth: true,
          icon: 'icon-park-outline:list-view',
        },
      },
      {
        name: 'list_cardList',
        path: '/list/cardList',
        meta: {
          title: '卡片列表',
          requiresAuth: true,
          icon: 'icon-park-outline:view-grid-list',
        },
      },
    ],
  },
  {
    name: 'plugin',
    path: '/plugin',
    redirect: '/plugin/charts',
    meta: {
      title: '组件示例',
      requiresAuth: true,
      icon: 'icon-park-outline:application-one',
    },
    children: [
      {
        name: 'plugin_charts',
        path: '/plugin/charts',
        meta: {
          title: '图表',
          requiresAuth: true,
          icon: 'icon-park-outline:chart-line',
        },
        children: [
          {
            name: 'echarts',
            path: '/plugin/charts/echarts',
            meta: {
              title: 'ECharts',
              requiresAuth: true,
              icon: 'icon-park-outline:chart-proportion',
            },
          },
          {
            name: 'antV',
            path: '/plugin/charts/antV',
            meta: {
              title: 'antV',
              requiresAuth: true,
              icon: 'ant-design:ant-design-outlined',
            },
          },
        ],
      },
      {
        name: 'plugin_map',
        path: '/plugin/map',
        meta: {
          title: '地图',
          requiresAuth: true,
          icon: 'carbon:map',
        },
      },
      {
        name: 'plugin_editor',
        path: '/plugin/editor',
        meta: {
          title: '编辑器',
          requiresAuth: true,
          icon: 'icon-park-outline:editor',
        },
        children: [
          {
            name: 'md',
            path: '/plugin/editor/md',
            meta: {
              title: 'MarkDown',
              requiresAuth: true,
              icon: 'ri:markdown-line',
            },
          },
          {
            name: 'rich',
            path: '/plugin/editor/rich',
            meta: {
              title: '富文本',
              requiresAuth: true,
              icon: 'icon-park-outline:edit-one',
            },
          },
        ],
      },
    ],
  },
  {
    name: 'about',
    path: '/about',
    meta: {
      title: '关于',
      requiresAuth: true,
      icon: 'icon-park-outline:info',
    },
  },
];

export default [
  {
    url: '/mock/login',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess({ token });
    },
  },
  {
    url: '/mock/getUserInfo',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(userInfo);
    },
  },
  {
    url: '/mock/getUserRoutes',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess(userRoutes);
    },
  },
];
