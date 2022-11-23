<template>
	<div>
		<el-header>
			<el-form :model="searchData" :inline="true">
		      <el-form-item label="名称：">
		        <el-input v-model="searchData.depname" placeholder="请输入名称..." clearable></el-input>
		      </el-form-item>
		      <el-form-item>
		        <el-button @click="search" type="primary" icon="el-icon-search">查询</el-button>
		      </el-form-item>
		    </el-form>
	    </el-header>
	   <el-row type="flex" class="row-bg" justify="end">
	   		<el-col>
	   			<div class="algin-right">
					<el-button type="primary" icon="el-icon-plus" @click="add">新增</el-button>
				    <el-button type="primary" icon="el-icon-edit" @click="update">修改</el-button>
					<el-popconfirm
				      @onConfirm="removeItems"
					  :title="msg('CONFIRM_DELETE')">
						<el-button slot="reference" type="primary" icon="el-icon-delete">删除</el-button>
					</el-popconfirm>
				</div>
			</el-col>
		</el-row>
	 	<el-table
	      :data="tableData"
	      ref="multipleTable"
	      @selection-change="handleSelectionChange"
	      style="width: 100%">
	      <el-table-column
		      type="index"
		      width="50">
		    </el-table-column>
	      <el-table-column
		      type="selection"
		      width="55">
		  </el-table-column>
	      <el-table-column
	        prop="depname"
	        label="名称"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="depdesc"
	        label="描述"
	        :show-overflow-tooltip="true"
	        >
	      </el-table-column>
	    </el-table>
	
	  <el-pagination
	    layout="prev, pager, next"
	    :total="dataOption.itemCount"
	    :page-size="dataOption.pageSize"
	    :current-page.sync="dataOption.pageIndex"
	    @current-change="currentChange">
	  </el-pagination>
	  
	</div>
</template>
<script>
import DataHandle from '@/utils/DataHandle'

export default {
   data() {
      return {
    	  //配置数据加载信息
    	  dataOption: {
	    		name: "tableData", //数据返回后要赋值的对象key
	    		searchName: "searchData", // 查询框绑定的数据对象
	    		url: $config.baseUrl + "/department/", //请求url
	    		primaryKey: "id", //主键key，默认为id
    			autoLoad: true, //是否自动加载数据，默认true
	      },
	      searchData: {
	    	  depname: ""
	      },
          tableData: []
      }
    },
    methods: {
    	add: function() {
    		//页面弹出为窗口
    		this.showDialog("/organizational/departmentdetail");
    		//页面显示为选项卡
    		//this.addTab("新增部门", "/organizational/departmentdetail");
    	},
    	update: function(){
    		if (!this.selectedItems || this.selectedItems.length == 0) {
				cube.indicate("warning", cube.msg("SELECT_ONE_ITEM"));
				return;
  	        } else if (this.selectedItems.length > 1) {
  	        	cube.indicate("warning", cube.msg("SELECT_ONLYONE"));
  	  			return;
  	        }
    		
    		//页面弹出为窗口
    		this.showDialog("/organizational/departmentdetail", {id: this.selectedItems[0].id});
    		//页面显示为选项卡
    		//this.addTab("编辑部门", "/organizational/departmentdetail", {id: this.selectedItems[0].id});
    	},
    	removeItems: function(){
    		 this.remove(this.selectedItems);
    	},
    	handleSelectionChange: function(val){
    		 this.selectedItems = val;
    	}
    },
    created: function() {
    	var dataHandle = new DataHandle();
    	//初始化时会为this新增常用方法，以及根据dataOption加载数据
		dataHandle.init(this);
    }
}
</script>