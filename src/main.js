// 项目的js打包入口文件
import Vue from 'vue'

//导入全局的配置模块，这个模块中的代码和main.js中的vm实例，没有关系，只是全局的Vue配置；
//因此，抽离出去之后，可以让项目解构更加清晰
import './globalConfig.js'

//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
    //引入路由组件
import router from './router.js'
// 引入根组件
import App from './components/App.vue'

const vm = new Vue({
    el: '#app',
    // 渲染组件
    render: c => c(App),
    router, //挂载路由
})