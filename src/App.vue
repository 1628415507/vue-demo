<template>
	<div id="example">
	  <template v-if="$route.path=='/login'">
	  		<router-view />
	  </template>
	  <template v-else>
		  <el-container>
			  <el-header>
			  		<Header/>
			  </el-header>
			  <el-container>
			  	<template v-if="$route.path=='/'">
			  		<router-view />
			  	</template>
			  	<template v-else>
				    <el-aside width="220px">
				    	<Left/>
				    </el-aside>
				    <el-main>
				    	<Main/>
				    </el-main>
			    </template>
			  </el-container>
		  </el-container>
		  <el-dialog title="表单" :width="$store.state.dialog.width"  :visible.sync="$store.state.dialog.visible" destroy-on-close>
	  		<component :is="$store.state.dialog.component" v-bind="$store.state.dialog.params" :ref="$store.state.dialog.url"></component>
		  </el-dialog>
	   </template>
	</div>
</template>

<script>
import Header from '@/components/main/Header'
import Left from '@/components/main/Left'
import Main from '@/components/main/Main'

export default {
  name: 'App',
  components: {
	  Header,
	  Left,
	  Main
  }
}
</script>
