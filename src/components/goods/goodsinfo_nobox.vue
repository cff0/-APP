<template>
  <div class="mui-numbox" data-numbox-min='1' data-numbox-max='max'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="5" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
			    	</div>
</template>
<script>
import mui from '../../../lib/mui/js/mui.js'
export default { 
  data(){
    return {}
  },
  mounted(){
      mui(".mui-numbox").numbox()
    },
  methods:{},
  props:["max"],  //接收父组件传递过库存量max
  //使用场景：监听单个的虚拟的数据
  watch:{
    max:function(newval,oldval){
      // 不论外界传递给nobox的max值到底是什么；
      // 最终，最后传递的那个max值，肯定是一个合法的数值；
      // 每个 监听到max值的改变，不论这个值是否合法，我们都重新为数字框，使用JS API，来手动设置最大值
      mui(".mui-numbox").numbox().setOption('max',newval)
    }
  }
}
</script>
<style lang="scss" scoped>
  
</style>