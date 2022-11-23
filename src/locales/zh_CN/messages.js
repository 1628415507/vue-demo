let messages = {
  OPERATIONS: '操作',
  EDIT: '编辑',
  DELETE: '删除',
  MOVEUP: '上移',
  MOVEDOWN: '下移',
  SAVE: '保存',
  SAVED: '已保存',
  SAVE_SUCCESS: '保存成功',
  DELETE_SUCCESS: '删除成功',
  CANCEL: '取消',
  ADD: '添加',
  ADD_RIGHT: '添加>',
  DELETE_LEFT: '<删除',
  ADD_ALL: '添加全部>>',
  DELETE_All: '<<删除全部',
  ROWNUM: '编号',
  SORTING: '排序',
  NEXT: '下一步',
  PREVIOUS: '上一步',
  FINISH: '完成',
  CHECKALL: '全选',
  NOTNULLABLE: '（必选）',
	
  INVALID_MESSAGE: '',
	
  ENTER_DIGIT: '请输入数字',
  ENTER_INTEGER: '请输入整数',
  ENTER_MINUS: '请输入负数',
  ENTER_PLUS: '请输入正数',
  ENTER_MINUS_INTEGER: '请输入负整数',
  ENTER_PLUS_INTEGER: '请输入正整数',
  ENTER_FLOAT: '请输入浮点数',
  ENTER_MINUS_FLOAT: '请输入负浮点数',
  ENTER_PLUS_FLOAT: '请输入正浮点数',
  ENTER_CHINESE: '请输入汉字',
  ENTER_LETTER: '请输入英文字母',
  ENTER_DATE: '请输入有效的日期',
  ENTER_DATETIME: '请输入有效的日期时间',
  ENTER_TIME: '请输入有效的时间',
  ENTER_EMAIL: '请输入有效的 e-mail',
  ENTER_IP: '请输入有效的 IP 地址',
  ENTER_MOBILE: '请输入有效的手机号',
  ENTER_PHONE: '请输入有效的电话号码',
  ENTER_URL: '请输入有效的 URL 地址',
  ENTER_ZIPCODE: '请输入有效的邮政编码',
  ENTER_IDCARD: '请输入有效的身份证号',
  ENTER_UNIQUE: '您输入的值已存在，请重新输入',
    
  INPUT_NON_NULLABLE: '值不能为空。',
  INPUT_GREATER_THAN_MAX: '值超出范围，必须小于等于 “{0}”。',
  INPUT_LESS_THAN_MIN: '值超出范围，必须大于等于 “{0}”。',
  INPUT_LENGTH_LESS_THAN_MIN: '值的长度超出范围，必须大于等于 {0}个字符',
  INPUT_LENGTH_GREATER_THAN_MAX: '值的长度超出范围，必须小于等于 {0}个字符',
    
  SQL_INJECTION: '包含SQL关键字  {sql}。',
  NON_ASCII: '不正确的 ASCII字符',
    
  LOADED_TIME: '本次查询共耗时{0}',
  REQUEST_TIMEOUT: '请求已超时。',
  SESSION_TIMEOUT: '会话已超时，请重新登录。',
  ERR_UNKNOWN: '数据交互发生错误。',
  ERR_RESULT_VALUE_EMPTY: '服务的返回结果不能为空。',
  ERR_LOADING: '加载数据时发生异常。请参考： “{0}”。',
  ERR_SAVING: '保存数据时发生异常。请参考： “{0}”。',
  ERR_SERVICE_INVALID: '服务不可用。',
  ERR_GENERAL: '当前操作中发生异常。请参考： “{0}”。',
  ERR_DELETING: '删除数据时发生异常。请参考： “{0}”。',
  ERR_VALIDATING: '校验数据时发生异常。请参考： “{0}”。',
    
  OPERATION_NOT_ALLOWED:'没有权限进行此操作。',
    
  UPLOAD_COUNT: '{0}个文件',
  UPLOAD_SIZE_LIMIT: '请上传小于“{0}”的文件。',
  FILE_TYPE_LIMITED: '禁止上传文件类型：{0}',
  FILE_TYPE_ALLOWED: '允许上传文件类型：{0}',
  UPLOAD_MAXALLOWED: '上传项最多为：{0}项',
	
  UPLOAD: '上传',
  UPLOADING: '上传中',
  UPLOADED: '已上传',
  UPLOADCACEL: '上传取消',
  UPLOADFAIL: '上传失败',
  DELETEFAIL: '删除失败',
  DOWNLOAD: '下载',
  DOWNLOADED: '下载完成',
  DOWNLOADFAIL: '下载失败',
  DOWNLOADCANCEL: '下载取消',
  NOTUPLOAD: '未上传',
  BROWSE: '浏览...',
  SELECTPICTURE: '请选择一个图片文件',
  DRAGPICTURE: '将图片拖到此处 或',
	
  ERR_DUPLICATED_ITEM: '已包含名称或键为“{0}”的项。',
  SQL_INJECTION: '包含SQL关键字  {sql}。',
  HIDE: '隐藏',
  LOADING: '加载中...',
  SUBMIT: '提交',
  CONFIRM_DELETE: '是否确定删除？',
  CONFIRM_DELETEALL: '是否确定全部删除？',
  PAGE: '页',
  ITEMCOUNT: '条记录',
  TO: '到',
  TOTAL: '共',
  SEARCH: '查询',
  RESET: '重置',
  LOCKED: '锁定',
  DEBLOCKING: '解锁',
  CLOSE: '关闭',
  CLOSEOTHERS: '关闭其他',
  CLOSEALL: '关闭所有',
  RESTORE: '还原',
  WINDOWMAX: '最大化',
  WINDOWMIN: '最小化',
  CONFIRM: '确定',
  FIRST: '首页',
  PREVIOUS: '上一页',
  NEXT: '下一页',
  END: '末页',
    
  DUPLICATED_ITEM: '已包含名称或键为“{0}”的项。',
  NULL_KEYVALUE_NOT_ALLOWED: '键值对不能为空。',
  SET_PRIMARYKEY: '请设置正确的primaryKey属性值',
    	
  EXPORT: '导出',
  EXPORT_SUCCESS: '导出完成',
  EXPORT_FAIL: '导出失败',
	
  IMPORT_EXCEL:'导入Excel',
  IMPORT_OPTIONS:'基础选项',
  IMPORT_IMPORT_OPTIONS:' 导入选项配置',
  IMPORT_COLUMN:'导入的列',
  IMPORT_EXCEL_WIZARD_UPLOAD_EXCEL:'导入文件',
  IMPORT_EXCEL_WIZARD_ANALYSE_RESULT:'分析结果',
  IMPORT_EXCEL_WIZARD_ANALYSE_RESULT_DESCRIPTION:'请保存分析得到的数据',
    
  IMPORT_EXCEL_SELECT_FILE:'选择文件',
  IMPORT_EXCEL_SELECT_AND_UPLOAD_FILE:'请选择文件，并上传',
    
  IMPORT_EXCEL_HORIZONTALBEGIN:'开始行',
  IMPORT_EXCEL_END:'结束行',
  IMPORT_EXCEL_VERTICALBEGIN:'开始列',
  IMPORT_EXCEL_VERTICALEND:'结束列',
  IMPORT_EXCEL_SHEETNUMBER:'Sheet页号',
  IMPORT_EXCEL_SEPRATORNUM:'数据分隔',
    
  SELECT_ONE_ITEM: '请选择一项。',
  SELECT_ONE_DELETE: '请至少勾选一条待删除记录。',
  SELECT_ONLYONE: '选定的记录条数不能超过一条。',
  NOTFOUND: '请求页面不存在或没有权限！',
  LOGOUT_FAIL: '退出失败！',
  REQUEST_FAIL: '请求失败！'
}

export default messages
