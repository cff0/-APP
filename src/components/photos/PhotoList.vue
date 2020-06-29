<template>
  <div>
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<span :class="['mui-control-item',item.id===0?'mui-active':'']" v-for="item in category" :key="item.id" @tap="getPhotoByCategory(item.id)">
						{{item.title}}
						</span>
					</div>
				</div>
			</div>
<!-- 图片分类区域 -->
    <ul class="lazyul">
			<router-link tag="li" v-for="item in photolist" :key="item.id" :to="'/home/photinfo/'+item.id">
				<img v-lazy="item.img_url">
				<div class="info">
					<h1 class="info-title">{{item.title}}</h1>
					<div class="info-content">{{item.zhaiyao}}</div>
				</div>
			</router-link>
			</ul>
  </div>
</template>
<script>
// 导入 mui 的JS文件，这样，就可以使用mui来初始化滑动控件了
import mui from "../../../lib/mui/js/mui.js";
export default {
  data() {
    return {
			category:[],
			photolist:[]
			};
		},
		created(){
		this.getPhotoCategory();
		// 显示所有的图片
		this.getPhotoByCategory(0);
	},
  methods: {
	async	getPhotoCategory(){
			//获取图片的分类数据
			const {data}=await this.$http.get('/api/getimgcategory');
			if(data.status===0){
					//手动补全分类的信息
			data.message.unshift({title:'全部',id:0});
			this.category=data.message;
			}
		},
		async getPhotoByCategory(id){
			// 根据图片分类的id获取图片的数据
			const {data}=await this.$http.get('/api/getimages/'+id)
			if(data.status===0)return (this.photolist=data.message)
		
		}
	},
		
  mounted() {
    // 当此钩子函数执行的时候，我们才可以进行控件或插件的初始化工作；
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });}
};
</script>
<style lang="scss" scoped>
.mui-slider {
  touch-action: pan-x;

}
.lazyul{
		margin:0;
		padding: 10px;
		li{
			background-color: #ccc;
			text-align: center;
			box-shadow: 0 0 7px gray;
			position: relative;
		& + li{
			margin-top:10px;
		}
		}
	img{
		width: 100%;
		vertical-align: middle
	}
	img[lazy=loading]{
		width: 40px;
		height: 300px;
		margin: auto
	}
}
.info{
	position: absolute;
	bottom: 0;
	color:#fff;
	max-height: 86px;
	background-color: rgba(0,0,0,0.4);
	overflow: hidden;
	text-overflow: ellipsis;
	display:-webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
	.info-title{
		font-size: 16px
	}
	.info-content{
		font-size: 14px;
		text-align: left;
		text-indent: 2em;
	}
}
</style>