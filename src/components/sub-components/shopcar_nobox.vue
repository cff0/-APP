<template>
  <div class="mui-numbox" data-numbox-min='1' data-numbox-max='max' style="height:25px;">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="initcount" ref="nobox" @change="changde"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
			    	</div>
</template>
<script>
import mui from '../../../lib/mui/js/mui.js';
import {mapMutations} from 'vuex'
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
      const val=parseInt(this.$refs.nobox.value);
      //调用mutations方法，更新数量
      this.updateGoodsCount({id:this.id,count:val})
    },
    ...mapMutations(['updateGoodsCount'])
  },
  props:['initcount','id']
}
</script>
<style lang="scss" scoped>
  
</style>