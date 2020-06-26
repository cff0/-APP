import Vue from 'vue'
//导入时间格式化模块
import moment from 'moment'
//定义全局的时间过滤器
Vue.filter('dateFormat', function(dateStr, formatStr = 'YYYY-MM-DD HH:mm:ss') {
    //在过滤器的处理函数中，最后，必须return一个东西，这样，才是一个合法的过滤器
    return moment(dateStr).format(formatStr)
})