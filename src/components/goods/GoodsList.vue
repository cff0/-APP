<template>
  <div>
    <!-- 商品列表区域 -->
      <div class="goods-list">
         <router-link tag="div" :to="'/home/goodsinfo/'+item.id" class="goods-item" v-for="item in GoodsList" :key="item.id">
          <img :src="item.img_url" alt="">
          <h1 class="title">{{item.title}}</h1>
          <div class="info">
            <p class="price">
              <span class="new">{{item.market_price}}</span>
              <span class="old">{{item.sell_price}}</span>
            </p>
            <p class="sell">
              <span>热卖中</span>
              <span>剩余{{item.stock_quantity}}件</span>
            </p>
          </div>
        </router-link>
      </div>
      <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
    data(){
      return { 
        page:1, //默认获取第一页的数据
        GoodsList:[],
        //设置节流阀
        isloaded:false,
      }
    },
    created(){
      this.getGoodsListByPage()
    },
    methods:{
     async getGoodsListByPage(){
        const {data}=await this.$http.get('/api/getgoods?pageindex='+this.page)
        if(data.status===0) {
         if(data.message.length<=0){
         // 当获取到的数组长度为0，表示数据已经加载完毕了。
          this.isloaded=true;
        }  
         this.GoodsList=this.GoodsList.concat(data.message)
      }},
      getMore(){
        //如果为true，表示数据已经加载完毕了，此时直接return结束  减少资源的获取浪费
        if(this.isloaded) return
        this.page++;
        this.getGoodsListByPage();
      }
}
}
</script>
<style lang="scss" scoped>
    .goods-list{
      //设置父盒子为弹性盒模型
      display: flex;
      // 默认flex布局的盒子，内部的子元素不会换行，可以使用下面的属性使其换行
    flex-wrap: wrap;
        justify-content: space-between;
        padding: 7px;
        padding-top: 0;
    .goods-item{
     border:1px solid #ccc;
     width: 49%;
     margin-top: 7px;
     box-shadow: 0 0 7px #ccc;
     padding:2px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
      img{
        width: 100%;
        min-height: 170px;
      }
      .title{
        font-size: 14px;
      }
      .info{
           background-color: #eee;
            overflow: hidden;
            p{
              margin: 0;
            }
        .price{
        .new{
          color: red;
          font-size: 16px;
          font-weight: bold;
          margin-right: 10px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
        }
         }
        .sell{
          display: flex;
          justify-content: space-between; 
          font-size: 13px;
        }
        }
    }
    }
</style>