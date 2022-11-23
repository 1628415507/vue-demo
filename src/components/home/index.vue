<template>
  <div style="width:100%;">
	 	<el-calendar v-model="value"></el-calendar>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    	 value: new Date()
    }
  },
  methods: {
	  
  }
}
</script>