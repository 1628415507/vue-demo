export default { 
	path: '/login', 
	name: '登录', 
	meta: {
		isShow: false
	},
	component: () => import(/* webpackChunkName: "login" */ '@/components/login/index') 
}