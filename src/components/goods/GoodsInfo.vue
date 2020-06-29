<template>
  <div class="goodsinfo-container">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
<swiper  :lunbotu="lunbotu" :imgname="'src'"></swiper>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
              市场价：
              <span style="margin-right:10px;"><del>{{goodsinfo.market_price}}</del></span>
              销售价：
              <span style="font-size:16px;color:red;font-weight:bold;">{{goodsinfo.sell_price}}</span>
            </p>
            <p>
              购买数量：
             <!-- 注意：这里的max是库存量 -->
             <!-- 由于goodsinfo是通过ajax动态获取回来的，但是，ajax是异步请求，需要消耗时间 -->
             <!-- 因此，可能会导致这样的情况：nobox组件先于ajax渲染出来，此时，组件被渲染的时候，goodsinfo为空对象，因此，传递到子组件中的stock_quantity是undefined -->
              <nobox :max="goodsinfo.stock_quantity"></nobox>
            </p>
            <div>
              <mt-button type="primary" size="small">立即购买</mt-button>
               <mt-button type="danger" size="small">加入购物车</mt-button>
            </div>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{goodsinfo.goods_no}}</p>
						<p>库存情况：{{goodsinfo.stock_quantity}}件</p>
						<p>上架时间：{{goodsinfo.add_time |dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer btnarea">
					<mt-button type="primary" size="large" plain>图文介绍</mt-button>
					<mt-button type="danger" size="large" plain>商品评论</mt-button>
				</div>
			</div>
  </div>
</template>
<script>
import swiper from '../sub-components/Swiper.vue';
//导入数字框组件
import nobox from './goodsinfo_nobox.vue'
export default {
  data(){
    return {
      lunbotu:[],
      goodsinfo:{}
    }
  }, 
  created(){
    this.getGoodsInfoById();
    this.getunbotu();
  },
  methods: {
    async getunbotu(){
      const {data}=await this.$http.get('/api/getthumimages/'+this.id)
      if(data.status===0)
       return (this.lunbotu=data.message)
    },
      async getGoodsInfoById(){
        const {data}=await this.$http.get('/api/goods/getinfo/'+this.id)
        if(data.status===0)
        return (this.goodsinfo=data.message[0])
      }
  },
  props:['id'],
  components:{
    swiper,
    nobox
  }
}
</script>
<style lang="scss" scoped>
  
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .btnarea {
    flex-direction: column;
    button + button {
      margin-top: 15px;
    }
  }
}
</style>