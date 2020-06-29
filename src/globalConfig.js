import Vue from 'vue'
//全局配置MintUI组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
    //导入vue-preview来渲染缩略图
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)
    //导入MUI样式
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

//引入axios来发起请求
import axios from 'axios'
//把axios挂载到Vue的原型对象上
Vue.prototype.$http = axios.create({
    //在全局设置axios的请求根路径，这样，在发起请求的时候就可以不写根地址了
    baseURL: 'http://api.cms.liulongbin.top'
})

//直接导入并执行filters.js模块，从而为Vue挂载全局的过滤器
import './filters.js'