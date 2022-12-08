/*
 * @Description: 
 * @Author: Hongzf
 * @Date: 2022-11-23 14:17:49
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-12-08 11:30:14
 */
export default {
  path: '/system',
  name: '系统管理',
  children: [
    {
      path: '/system/charts',
      name: '图表',
      children: [
        {	path: '/system/charts/map-fly',
          name: '地图飞线',
          component: () => import(/* webpackChunkName: "charts" */ '@/views/system/charts/map-fly/index.vue')
        }
      ]
    },
    {
      path: '/system/basic',
      name: '基本设置',
      children: [
        {	path: '/system/basic/menu1',
          name: '菜单一',
          component: () => import(/* webpackChunkName: "menu1" */ '@/views/system/basic/menu1.vue')
        }
      ]
    },
    { path: '/system/role', name: '角色管理', component: () => import(/* webpackChunkName: "role" */'@/views/system/role/index.vue') }
  ]
}
