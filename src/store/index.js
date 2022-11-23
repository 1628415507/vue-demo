import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  debug: true,
  state: {
	  //显示用户名称
	  userName: 'test',
	  //菜单
	  menus: [],
	  //模态框信息
	  dialog: {
		  width: null,
		  component: null,
		  params: {},
		  visible: false
	  },
	  //选项卡信息
	  tabs: {
		  editableTabs: [],
		  activeIndex: null,
		  hasRoute: true
	  }
  },
  mutations: {
	  //设置用户名称
	  setUserName(state, userName) {
		  state.userName = userName
		  if (userName) {
			  localStorage.setItem('userName', userName)
		  }
	  },
	  //设置菜单
	  setMenus (state, p_menus) {
		   let menus = []
		   for (let i = 0; i < p_menus.length; i++) {
			   if (p_menus[i].meta && p_menus[i].meta.isShow == false) {
				   continue
			   }
			   menus.push(p_menus[i])
		   }
		   state.menus = menus
		   if (menus) {
			   localStorage.setItem('menus', JSON.stringify(menus))
		   }
	  },
	  //显示模态框
	  showDialog(state, p_params, p_width, p_height) {
		  state.dialog.component = p_params.component
		  state.dialog.params = p_params.params
		  state.dialog.width = p_width || $config.dialogWidth
		  state.dialog.visible = true
	  },
	  //隐藏模态框
	  hideDialog(state) {
      state.dialog.visible = false
	  },
	  //添加选项卡
	  addTab (state, data) {
		  import(/* webpackChunkName: "[request]" */ '@/views/' + data.route.substring(1)).then(function(component) {
				 state.tabs.editableTabs.push({
					 route: data.route,
					 name: data.name,
					 params: data.params,
					 component: component.default
				 })
		  })
	  },
	  //删除选项卡
	  deleteTab (state, route) {
	      let index = 0
	      for (let option of state.tabs.editableTabs) {
	        if (option.route === route) {
	          break
	        }
	        index++
	      }
	      state.tabs.editableTabs.splice(index, 1)
	   },
	   //选择选项卡
	   setActiveTab (state, index, hasRoute) {
		   if (typeof(index) === 'string') {
			   state.tabs.activeIndex = index
		   } else {
			   state.tabs.activeIndex = index.route
			   state.tabs.hasRoute = index.hasRoute
		   }
	   }
  }

})

//刷新页面时从localStorage获取菜单
let menusItem = localStorage.getItem('menus')
if (menusItem) {
  try {
    let menus = JSON.parse(menusItem)
    store.commit('setMenus', menus)
  } catch(e) {

  }
}

let userName = localStorage.getItem('userName')
if (userName) {
  store.commit('setUserName', userName)
}

export default store
