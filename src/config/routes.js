/*
 * @Author: your name
 * @Date: 2019-12-13 15:37:21
 * @LastEditTime: 2019-12-13 17:43:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tiger-prawn-adfw\src\config\routes.js
 */
import HeaderAsideLayout from '@/layouts/HeaderAsideLayout';
import NotFound from '@/pages/NotFound';
import Dashboard from '@/pages/Dashboard';

const routerConfig = [
  // {
  //   path: '/',
  //   component: HeaderAsideLayout,
  //   children: [
      { path: '/dashboard/analysis', component: Dashboard },
      { path: '/dashboard/monitor', component: NotFound },
      { path: '/dashboard/workplace', component: NotFound },
  //   ],
  // },
  // { path: '*', component: NotFound },
];

export default routerConfig;
