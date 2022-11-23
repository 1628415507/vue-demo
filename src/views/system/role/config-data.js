export const filterConfig = _this => {
  return {
    inline: false,
    gutter: 2, // 栅格的间隔
    col: 9, // 栅格的格数
    operateCol: 5,//操作按钮的宽度
    labelWidth: 'auto', //100px
    filterList: [
      {
        type: 'input',
        label: '名称：',
        prop: 'name',
        width: '200px',
        clearable: true,
        placeholder: '请输入名称...',
        col: 5
      }
      // {
      //   type: 'customSlot', // 自定义插槽
      //   col: 8,
      //   label: '描述',
      //   prop: 'staffDutyId'
      // },
      // 岗位职称
      // {
      //   type: 'select',
      //   label: '岗位职称',
      //   prop: 'technicalTitleId',
      //   width: '200px',
      //   clearable: true,
      //   placeholder: '请选择岗位职称',
      //   col: 8,
      //   optionLabel: 'technicalName',
      //   optionValue: 'technicalTitleId',
      //   optionKey: 'technicalTitleId',
      //   options: []
      // },
    ],
    operates: [
      {
        type: 'primary',
        buttonLabel: '查询',
        btnType: 'primary',
        // icon:'el-icon-search',
        method: () => {
          _this.handleQuery()
        }
      },
      {
        type: 'primary',
        buttonLabel: '重置',
        btnType: 'primary',
        plain: true,
        method: () => {
          _this.resetQueryForm(_this.filterForm)
        }
      }
    ]
  }
}

// table 的配置参数
export const tableConfig = {
  border: false,
  stripe: true, // 是否为斑马纹 table
  loading: false, // 是否添加表格loading加载动画
  highlightCurrentRow: true, // 是否支持当前行高亮显示
  mutiSelect: false, // 是否支持列表项选中功能
  indexShow: true,
  pagination: true,
  height: '460px'
}

// 表格列
export const columns = _this => {
  return [
    {
      prop: 'name',
      label: '名称',
      minWidth: '100px'
    },
    {
      prop: 'sex',
      label: '描述',
      width: '60px',
      formatter: (row, column) => {
        return _this.$dict.getDictNameByCode('SEX', row.sex)
      }
    }
    // {
    //   prop: 'jobStatus',
    //   label: '在职状态',
    //   width: '100',
    //   formatter: (row, column) => {
    //     return _this.$dict.getDictNameByCode('JOB_STATUS', row.jobStatus)
    //   }
    // }
  ]
}

export const operates = _this => {
  return {
    list: [
      {
        id: 'edit',
        label: '编辑',
        type: 'text',
        show: true,
        disabled: false,
        method: (row, index) => {
          console.log('【 row 】-172', row)
          // console.log('【 index 】-163', index)
          _this.handleOpen(row, 'edit')
        }
      },
      {
        id: 'detail',
        label: '查看',
        type: 'text',
        show: true,
        disabled: false,
        method: row => {
          _this.handleOpen(row, 'detail')
        }
      }
    ],
    fixed: false,
    width: 250
  } // 列操作按钮
}
