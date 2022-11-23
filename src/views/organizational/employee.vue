<template>
  <div>
    <el-header>
      <el-form
        :model="searchData"
        :inline="true">
        <el-form-item label="名称：">
          <el-input
            v-model="searchData.name"
            placeholder="请输入名称..."
            clearable />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="search">
            查询
          </el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-row
      type="flex"
      class="row-bg"
      justify="end">
      <el-col>
        <div class="algin-right">
          <el-button
            type="primary"
            icon="el-icon-plus"
            @click="add">
            新增2
          </el-button>
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="update">
            修改
          </el-button>
          <el-popconfirm
            :title="msg('CONFIRM_DELETE')"
            @onConfirm="removeItems">
            <el-button
              slot="reference"
              type="primary"
              icon="el-icon-delete">
              删除
            </el-button>
          </el-popconfirm>
        </div>
      </el-col>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="index"
        width="50" />
      <el-table-column
        type="selection"
        width="55" />
      <el-table-column
        prop="inductiontime"
        label="日期"
        width="180" />
      <el-table-column
        prop="name"
        label="姓名"
        width="180" />
      <el-table-column
        prop="address"
        label="地址"
        :show-overflow-tooltip="true"
      />
    </el-table>

    <el-pagination
      layout="prev, pager, next"
      :total="dataOption.itemCount"
      :page-size="dataOption.pageSize"
      :current-page.sync="dataOption.pageIndex"
      @current-change="currentChange" />
  </div>
</template>
<script>
import DataHandle from '@/utils/DataHandle'

export default {
  data() {
    return {
    	  //配置数据加载信息
    	  dataOption: {
	    		name: 'tableData', //数据返回后要赋值的对象key
	    		searchName: 'searchData', // 查询框绑定的数据对象key
	    		url: $config.baseUrl + '/employee/', //请求url
	    		primaryKey: 'id', //主键key，默认为id
    			autoLoad: true //是否自动加载数据，默认true
	      },
	      searchData: {
	    	  name: ''
	      },
      tableData: []
    }
  },
  created: function() {
    	let dataHandle = new DataHandle()
    	//初始化时会为this新增常用方法，以及根据dataOption加载数据
    dataHandle.init(this)
  },
  methods: {
    	add: function() {
    		//页面弹出为窗口
    		this.showDialog('/organizational/employeedetail')
    		//页面显示为选项卡
    		//this.addTab("新增员工", "/organizational/departmentdetail");
    	},
    	update: function(){
    		if (!this.selectedItems || this.selectedItems.length === 0) {
        cube.indicate('warning', cube.msg('SELECT_ONE_ITEM'))
        return
  	        } else if (this.selectedItems.length > 1) {
  	        	cube.indicate('warning', cube.msg('SELECT_ONLYONE'))
  	  			return
  	        }

    		//页面弹出为窗口
    		this.showDialog('/organizational/employeedetail', {id: this.selectedItems[0].id})
    		//页面显示为选项卡
    		//this.addTab("编辑员工", "/organizational/departmentdetail", {id: this.selectedItems[0].id});
    	},
    	removeItems: function(){
    		this.remove(this.selectedItems)
    	},
    	handleSelectionChange: function(val){
    		this.selectedItems = val
    	}
  }
}
</script>
