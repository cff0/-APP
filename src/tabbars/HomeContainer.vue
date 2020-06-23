<template>
  <div>
    <mt-swipe :auto="4000">
  <mt-swipe-item v-for="(item,i) in lunbotu" :key="i">
    <img :src="item.img" alt="">
  </mt-swipe-item>

</mt-swipe>
    <h3>HomeContainer</h3>
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
       console.log(data);
       if(data.status===0)this.lunbotu=data.message
      }
    }
}
</script>
<style lang="scss" scoped>
.mint-swipe{
  height: 180px;
  }
  img{
    width: 100%;
    height: 100%
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

</style>