<!--
 * @Description:
 * @Author: Hongzf
 * @Date: 2022-11-23 14:17:48
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-30 10:12:01
-->
<template>
  <div>
    <div class="logo">
      {{ webName }}
    </div>
    <el-menu
      :default-active="'/'+$route.path.split('/')[1]"
      router
      class="el-menu-demo"
      mode="horizontal"
      background-color="rgb(0, 150, 136)"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item
        v-for="(item,index) in $store.state.menus"
        :key="index"
        :index="item.path"
      >
        <i :class="item.icon" />
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
    <div class="userinfo">
      <el-avatar
        shape="square"
        size="small"
        icon="el-icon-user-solid"
      />
      <span>{{ $store.state.userName }}</span>
      <a @click="logout">退出</a>
    </div>
  </div>
</template>

<script>
import authUtil from '@/utils/AuthUtil'

export default {
  name: 'Header',
  data() {
    return {
    	  webName: $config.webName
    }
  },
  mounted () {
    console.log('【  $store.state.menus 】-68',  this.$store.state.menus)
  },
  methods: {
    	logout() {
    		if ($config.isRemote) {
    			authUtil.logout(this)
    		} else {
    			authUtil.setToken(null)
    			localStorage.removeItem('userName')
    			localStorage.removeItem('menus')
    			this.$router.push({ path: '/login' })
    		}

    }
  }
}
</script>
