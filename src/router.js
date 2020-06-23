    import VueRouter from 'vue-router'
    //引入对应的路由组件
    import HomeContainer from './tabbars/HomeContainer.vue'
    import MemberContainer from './tabbars/MemberContainer.vue'
    import SearchContainer from './tabbars/SearchContainer.vue'
    import ShopcarContainer from './tabbars/ShopcarContainer.vue'
    //创建路由对象
    const router = new VueRouter({
        routes: [
            { path: '/', redirect: '/home' }, {
                path: '/home',
                component: HomeContainer
            },
            {
                path: '/member',
                component: MemberContainer
            },
            {
                path: '/search',
                component: SearchContainer
            },
            {
                path: '/shopcar',
                component: ShopcarContainer
            },
        ],
        linkActiveClass: 'mui-active', //手动设置被激活的路由链接的高亮
    })
    export default router;