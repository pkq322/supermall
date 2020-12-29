import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import('views/Home/Home.vue')
const Classifty = () =>
    import('views/Classifty/Classifty.vue')
const Cart = () =>
    import('views/cart/Cart.vue')
const Mine = () =>
    import('views/Mine/Mine.vue')
const Detail = () =>
    import('views/detail/Detail.vue')



Vue.use(VueRouter)
// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err)
}

const routes = [{
    path: '',
    redirect: '/home'
},
{
    path: '/home',
    component: Home
},
{
    path: '/classifty',
    component: Classifty
},
{
    path: '/cart',
    component: Cart
},
{
    path: '/mine',
    component: Mine
},
{
    path: '/detail/:iid',
    component: Detail
}
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

export default router