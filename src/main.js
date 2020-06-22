// 项目的js打包入口文件
import Vue from 'vue'
// 引入组件
import App from './components/App.vue'
const vm = new Vue({
    el: '#app',
    // 渲染组件
    render: c => c(App)
})