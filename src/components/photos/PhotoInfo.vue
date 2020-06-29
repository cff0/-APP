<template>
  <div class="photoinfo-container">
    <h3 class="title">{{PhotoInfo.title}}</h3>
    <p class="info">
      <span>发表时间：{{PhotoInfo.add_time | dateFormat}}</span>
     <span>点击：{{PhotoInfo.click}}次</span>
     </p>
     <hr>
     <!-- 缩略图区域 -->
        <vue-preview :slides="photolist" class="imgPrev"></vue-preview>
     <!-- 内容区域 -->
     <div class="content" v-html="PhotoInfo.content"></div>
     <!-- 评论子组件 -->
     <comment :newsid='id'></comment>
  </div>
</template>
<script>
import comment from '../sub-components/Comment.vue'
export default {
  data(){
    return {
      PhotoInfo:{},  //图片信息
      photolist:[],//缩略图的数组
    }
  },
  created(){
    this.getPhotoInfo();
    this.getThumblmg()
  },
  methods: {
      async getPhotoInfo(){
       const {data} = await this.$http.get('/api/getimageInfo/'+this.id);
       if(data.status===0) return (this.PhotoInfo=data.message[0])
      },
      async getThumblmg(){
        const {data}=await this.$http.get('/api/getthumimages/'+this.id)
        if(data.status===0){
         data.message.forEach(item => {
                        item.w = 600;   //设置以大图浏览时的宽度
                        item.h = 400;     //设置以大图浏览时的高度
                        item.src = item.src;  //大图
                        item.msrc = item.src;  //小图
                    });            
                   this.photolist=data.message
        } 
      }
  },
  props:['id'],
  components:{
    comment
  }
}
</script>
<style lang="scss" >
  .photoinfo-container{
    padding: 3px;
    }
    .title{
      font-size: 17px;
      text-align: center;
      margin: 15px 0;
      color: #26a2ff;
    }
    .info{
      font-size: 14px;
      display: flex;
      justify-content: space-between;
  }
  .content{
    font-size: 14px;
    text-indent: 2em;
      line-height: 30px;
  }
.imgPrev{
.my-gallery{
figure{
display: inline-block;
margin: 8px;
}
img{
width: 100px;
height: 100px;
box-shadow: 0 0 7px gray;
}
}
}
</style>