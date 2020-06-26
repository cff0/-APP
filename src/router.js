    import VueRouter from 'vue-router'
    //引入对应的路由组件
    import HomeContainer from './components/tabbars/HomeContainer.vue'
    import MemberContainer from './components/tabbars/MemberContainer.vue'
    import SearchContainer from './components/tabbars/SearchContainer.vue'
    import ShopcarContainer from './components/tabbars/ShopcarContainer.vue'
    import NewsList from './components/news/NewsList.vue'
    import NewsInfo from './components/news/NewsInfo.vue'
    import photolist from './components/photos/PhotoList.vue'
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
            {
                path: '/home/newslist',
                component: NewsList
            },
            { path: '/home/newsinfo/:id', component: NewsInfo, props: true },
            { path: '/home/photolist', component: photolist }

        ],
        linkActiveClass: 'mui-active', //手动设置被激活的路由链接的高亮
    })
    export default router;