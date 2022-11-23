<template>
  <div>
    <!-- 查询组件 -->
    <filter-panel
      :filter-config="filterConfig"
      :value="filterForm" />
    <table-component
      :data="records"
      :options="tableConfig"
      :pagination="params"
      :columns="columns"
      :operates="operates"
      :list-loading="listLoading"
      @handleIndexChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    />
  </div>
</template>
<script>
import tableMix from '@/mixins/table-mixin'
import { filterConfig, tableConfig, columns, operates } from './config-data.js'

export default {
  mixins: [tableMix],
  data() {
    let a = 0
    return {
      // 查询
      filterConfig: filterConfig(this),
      filterForm: {
        name: '',
        deptCode: '', // 入职部门
        staffDutyId: '', // 入职岗位
        technicalName: '', // 岗位职称
        jobStatus: ''
      },
      // 表格
      records: [],
      listLoading: false,
      tableConfig,
      columns: columns(this),
      operates: operates(this)
    }
  },
  methods: {}
}
</script>
