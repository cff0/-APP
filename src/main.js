// 项目的js打包入口文件
import Vue from 'vue'

//全局配置MintUI组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//导入MUI样式
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
// 引入组件
import App from './components/App.vue'
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
    //引入路由组件
import router from './router'
//引入axios来发起请求
import axios from 'axios'
//把axios挂载到Vue的原型对象上
Vue.prototype.$http = axios.create({
    //在全局设置axios的请求根路径，这样，在发起请求的时候就可以不写根地址了
    baseURL: 'http://api.cms.liulongbin.top'
})

const vm = new Vue({
    el: '#app',
    // 渲染组件
    render: c => c(App),
    router, //挂载路由
})