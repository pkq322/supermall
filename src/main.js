import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// 轮播插件
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false
// 总线机制加入一个原型$bus
Vue.prototype.$bus = new Vue()

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')