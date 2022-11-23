export default {
	path: "/organizational", 
	name: "组织管理",
	children: [
		{ path: '/organizational/department', name: '部门管理', component: () => import(/* webpackChunkName: "department" */ '@/components/organizational/department.vue') },
		{ path: '/organizational/employee', name: '员工管理', component: () => import(/* webpackChunkName: "employee" */ '@/components/organizational/employee.vue') }
	]
}