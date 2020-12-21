import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// 轮播插件
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')