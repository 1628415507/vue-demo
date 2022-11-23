import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import authUtil from '@/utils/AuthUtil'

import homeRoutes from './indexHome'
import loginRoutes from './indexLogin'
import organizationalRoutes from './indexOrganizational'
import systemRoutes from './indexSystem'

Vue.use(Router)

var router = new Router({
	routes: [
		homeRoutes,
		loginRoutes,
		organizationalRoutes,
		systemRoutes
	]
})

//如果没有开启远程加载菜单，使用路由配置作为菜单
if (!$config.isRemote) {
	authUtil.setMenus(router.options.routes);
}

//路由守卫进行鉴权
router.beforeEach((to, from, next) => {
	if (to.path == "/login") {
		next();
	} else {
		//判断是否登录
		if (authUtil.isLogin()) {
			//判断是否有权限
			if (authUtil.hasAuth(to.path)) {
				next();
			} else {
				cube.indicate("warning", cube.msg("NOTFOUND"));
			}
		} else {
			next('/login');
		}
	}
})

export default router;
