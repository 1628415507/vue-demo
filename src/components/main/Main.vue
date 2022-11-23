<template>
<div>
	<el-tabs v-model="$store.state.tabs.activeIndex" closable @tab-click="tabClick" @tab-remove="removeTab">
	  <el-tab-pane
	    v-for="(item, index) in $store.state.tabs.editableTabs"
	    :key="item.route"
	    :label="item.name"
	    :name="item.route">
	    	<component :is="item.component" v-bind="item.params" :ref="item.url"></component>
	  </el-tab-pane>
	</el-tabs>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
	  //切换选项卡
	  tabClick(tab) {
		  this.$router.push({path: this.$store.state.tabs.activeIndex});
	  },
	  //删除选项卡
	  removeTab(targetName) {
	      if(targetName == '/') {
			return
	      }
	      
	      var activeIndex = this.$store.state.tabs.activeIndex
	      var editableTabs = this.$store.state.tabs.editableTabs;
	      var hasRoute = this.$store.state.tabs.hasRoute;
	      
	      this.$store.commit('deleteTab', targetName);
	      if (activeIndex === targetName) {
			if (editableTabs && editableTabs.length >= 1) {
				this.$store.commit('setActiveTab', editableTabs[editableTabs.length - 1].route);
				if (hasRoute) {
					this.$router.push({path: activeIndex});
				}
			} else {
				this.$router.push({path: '/'});
			}
	      }
	    }
    }
}
</script>
