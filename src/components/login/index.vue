<template>
  <div class="wrapper">
    <div
      class="login-wrapper"
      :model="form">
      <div class="login-logo" />
      <div class="ft20 font-color1 system-tit">
        登录示例
      </div>
      <div class="bg-color3 b-radius8 login-content">
        <div class="frm-login">
          <div
            v-show="isShow"
            class="login-tips">
            {{ resultHint }}
          </div>
          <div class="logins-input">
            <input
              v-model="form.username"
              class="b-radius5 border1"
              type="text"
              name="username"
              placeholder="请输入账号">
          </div>
          <div class="logins-input pwd-bg">
            <input
              v-model="form.password"
              class="b-radius5 border1"
              type="password"
              name="password"
              placeholder="请输入密码">
          </div>
          <div class="login-btn">
            <a
              class="dis-inline bg-color1 b-radius5 font-color1"
              @click="login">登录</a>
          </div>
        </div>
        <div class="login-intr">
          <div class="login-intr-right ">
            为保证最佳效果，请使用<br>
            1280×800以上分辨率<br>
            chromo或IE9以上版本浏览器
          </div>
        </div>
      </div>
      <div class="copy-bom font-color1">
        国家电网公司版权所有<br>
      </div>
    </div>
  </div>
</template>

<script>
import authUtil from '@/utils/AuthUtil'
import logincss from '@/static/css/login.css'

export default {
  name: 'Login',
  data () {
    return {
    	isShow: false,
    	resultHint: '',
    	form: {
    		username: '',
    		password: ''
	    }
    }
  },
  methods: {
    login() {
    	  if ($config.isRemote) {
    		  authUtil.login(this)
    	  } else {
    		  authUtil.setToken('test')
    		  this.$router.push({ path: '/' })
    	  }
    }
  }
}
</script>
