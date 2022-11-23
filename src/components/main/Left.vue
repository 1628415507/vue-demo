<template>
<div>
    <el-menu :unique-opened="true" :default-active="$route.path" router >
         <template  v-for="(item , index) in $store.state.menus" v-if="item.path == '/'+$route.path.split('/')[1]">
               <template  v-for="(itemChild , index1) in item.children"  v-if="item.children && item.children.length > 0">
               	   <el-submenu :index="itemChild.path" v-if="itemChild.children && itemChild.children.length > 0">
                		 <template slot="title">
                       {{itemChild.name}}
                   </template>
                    <el-menu-item v-for="(itemChild1 , index2) in itemChild.children" :index="itemChild1.path" :key="index2">
                       <span>{{itemChild1.name}}</span>
                   </el-menu-item>
               		</el-submenu>
               		<el-menu-item :index="itemChild.path" v-else>
                  	{{itemChild.name}}
            		</el-menu-item>
             </template>
             <el-menu-item :index="item.path" v-else>
                 {{item.name}}
             </el-menu-item>
         </template>
     </el-menu>
</div>
</template>
<script>
export default {
  name: 'Left',
  data () {
      return {
         
      }
  },
  methods: {
     
  }
}
</script>