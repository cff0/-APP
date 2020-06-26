<template>
  <div>
   <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in Newlists" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url" >
						<div class="mui-media-body">
							{{item.zhaiyao}}
							<p class='mui-ellipsis'>
                	<span>{{item.add_time |dateFormat}}</span>
					<span>{{item.click}}</span>
              </p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      Newlists:[]
    }
  },
  created(){
    this.getNewslist();
  },
  methods:{
    //发起新闻的请求
    async getNewslist(){
     const {data}=await this.$http.get('/api/getnewslist')
    if(data.status===0)return this.Newlists=data.message
     }
  }
}
</script>
<style lang="scss" scoped>

  .mui-ellipsis{
     color: #26a2ff;
    display: flex;
    justify-content: space-between;
    font-size:13px
  }
</style>