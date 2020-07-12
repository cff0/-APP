<template>
  <div class="mui-numbox" data-numbox-min='1' data-numbox-max='max'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" ref="nobox" @change="changde"/>
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
  methods:{
    // 获取选择的商品数量
    changde(){
      const refs=this.$refs.nobox.value;
      console.log('数量改变了'+refs);
      // 每当nobox子组件中的count变化之后，要立即把最新的数量值，传递给goodsinfo父组件，这样，每当我们点击【加入购物车】按钮时候，就能立即把最新的count值，同步到购物车的徽标中
      // 这样就涉及到了父子组件传值，子组件向父组件传递数据
      this.$emit("func",parseInt(refs))
    }
  },
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