export default {
  path: '/system',
  name: '系统管理',
  children: [
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
