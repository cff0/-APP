<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsInfo.title}}</h3>
    <p class="info">
      <span>发表时间：{{newsInfo.add_time|dateFormat}}</span>
      <span>点击：{{newsInfo.click}}次</span> 
    </p>
    <hr>
    <!-- 新闻内容 -->
    <div class="content" v-html="newsInfo.content"></div>
    <!-- 评论子组件的位置 -->
    <!-- 父组件向子组件传值，通过属性绑定的形式 v-bind-->
    <comment :newsid="id"></comment>
  </div>
</template>
<script>
// 导入Comment.vue子组件
import comment from '../sub-components/Comment.vue'
export default {
  data(){
    return {
      newsInfo:{}
    }
  },
  methods:{
    async getnewsInfo(){
       const {data}=await this.$http.get('/api/getnew/'+this.id)
       if(data.status===0)return (this.newsInfo=data.message[0])
    }
  },
  created(){
    this.getnewsInfo()
  },
  props:['id'],
  components:{
    //为当前的NewsInfo.vue组件注册私有的子组件
      comment
  }
}
</script>
<style lang="scss" scoped>
.newsinfo-container{
  padding: 3px 0;
  .title{
    font-size: 15px;
    text-align: center;
    color: red;
    margin:15px 0;
  }
  .info{
    color: #26a2ff;
    display: flex;
    justify-content: space-between
  }
}
</style>