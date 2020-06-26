<template>
  <div>
    <mt-swipe :auto="4000">
  <mt-swipe-item v-for="(item,i) in lunbotu" :key="i">
    <img :src="item.img" alt="">
  </mt-swipe-item>
</mt-swipe>
   <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="../../image/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src="../../image/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                  <img src="../../image/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                 <img src="../../image/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul>
  </div>
</template>
<script>
export default {
    data(){
      return {
        lunbotu:[]
      }
    },
    created(){
      this.getlunbotu()
    },
    methods:{
      async getlunbotu(){
       const {data}=await this.$http.get('/api/getlunbo')
       if(data.status===0)this.lunbotu=data.message
      }
    }
}
</script>
<style lang="scss" scoped>
.mint-swipe{
  height: 180px;
   img{
    width: 100%;
    height: 100%
  }
  }
  .mint-swipe-item{
  &:nth-child(1){
    background-color: pink;
  }
  &:nth-child(2){
    background-color: green;
  }&:nth-child(3){
    background-color: hotpink;
  }
}

.mui-grid-view{
  img{
    width: 60px;
    height: 60px;
  }
   background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 13px
  }
</style>