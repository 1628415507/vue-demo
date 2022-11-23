// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import '@/static/css/index.css'
import '@/static/css/style.css'
import App from './App'

import router from '@/router'
import store from '@/store'

if (process.env.NODE_ENV === 'development') {
  require('@/mock/index.js')
}

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  watch: {
	  $route(to, from) {
      let flag = false
      if (to.path === '/' || to.path === '/login') {
        return
      }

      for (let item of this.$store.state.tabs.editableTabs) {
        if (item.route === to.path) {
        	  this.$store.commit('setActiveTab', to.path)
        	  flag = true
        	  break
        }
      }

      if (this.$store.state.menus.length  ===  0) {
        	return
      }

      for (let item of this.$store.state.menus) {
        if (item.path === to.path && item.children && item.children.length > 0) {
            	if (item.children[0].children && item.children[0].children.length > 0) {
            		this.$router.push(item.children[0].children[0])
            	} else {
            		this.$router.push(item.children[0])
            	}

            	return
        }
      }

      if (!flag) {
        this.$store.commit('addTab', {route: to.path, name: to.name})
        this.$store.commit('setActiveTab', to.path)
      }
	  }
  },
  template: '<App/>'
})
