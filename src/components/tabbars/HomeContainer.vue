<template>
  <div>
    <!-- 使用轮播图的组件，就必须把数据给传过去 -->
    <swiper :lunbotu="lunbotu" :imgname="'img'" :isfull="true"></swiper>
   <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="../../image/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src="../../image/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <img src="../../image/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
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
import swiper from '../sub-components/Swiper.vue'
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
    },
    components:{
      swiper
    },
}
</script>
<style lang="scss" scoped>
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