/*
 * @Author: your name
 * @Date: 2019-12-13 15:37:21
 * @LastEditTime: 2019-12-16 09:57:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tiger-prawn-adfw\src\config\menu.js
 */
// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  { name: 'test', path: '/table/fixed', id: 'Menu_1hulo' },
];

const asideMenuConfig = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'el-icon-menu',
    children: [
      {
        path: '/analysis',
        name: 'pdf',
      },

      {
        path: '/monitor',
        name: '404',
      },

    ],
  },
  {
    appPath: '/tiger-prawn-adgjaq',
    name: '国家安全',
    icon: 'el-icon-menu',
  },
  {
    appPath: '/tiger-prawn-adgjaq',
    name: '社区治理',
    icon: 'el-icon-menu',
  },
 
];

export { headerMenuConfig, asideMenuConfig };
