<template>
  <el-form
    ref="form"
    :model="formData"
    :rules="rules"
    label-width="80px">
    <el-form-item
      label="姓名"
      prop="name">
      <el-input v-model="formData.name" />
    </el-form-item>
    <el-form-item label="时间">
      <el-date-picker
        v-model="formData.inductiontime"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        type="date"
        placeholder="选择日期"
        style="width: 100%;"
      />
    </el-form-item>
    <el-form-item label="地址">
      <el-input
        v-model="formData.address"
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="submit">
        保存
      </el-button>
      <el-button @click="hideDialog">
        取消
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import DataHandle from '@/utils/DataHandle'

export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    params: {
      //父页面传递参数
      type: Object,
      default: function() {
        return {}
      }
    },
    parent: {
      //父页面对象
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      //配置数据加载信息
      dataOption: {
        type: 'form', //加载表单数据时设置为form，默认grid
        name: 'formData', //数据返回后要赋值的对象key
        url: $config.baseUrl + '/employee/', //请求url
        primaryKey: 'id', //主键key，默认为id
        autoLoad: true //是否自动加载数据，默认true
      },
      formData: {
        id: '',
        name: '',
        inductiontime: '',
        address: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 50, message: '长度在 3 到 50个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created: function() {
    let dataHandle = new DataHandle()
    //初始化时会为this新增常用方法，以及根据dataOption加载数据
    dataHandle.init(this)
  },
  methods: {
    onSubmitting(args) {
      this.$refs['form'].validate(function(valid) {
        if (!valid) {
          args.cancel = true
        }
      })
    },
    onSaved() {
      this.$message.success(cube.msg('SAVE_SUCCESS'))
      this.hideDialog()
      if (this.parent) {
        this.parent.reload()
      }
    }
  }
}
</script>
