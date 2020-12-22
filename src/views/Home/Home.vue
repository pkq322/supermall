<template>
  <div id="home">
    <nav-bar class="nav_bg"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners='banners'/>
    <recommend-view :recommends='recommends'/>
    <featureView/>
  </div>
</template> 

<script>
import NavBar from "components/common/navbar/NavBar";
import homeSwiper from 'views/Home/childComps/homeSwiper';
import recommendView from './childComps/recommendView';
import featureView from './childComps/featureView'
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    homeSwiper,
    recommendView,
    featureView
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  // 生命周期函数，组件创建时
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      console.log(res);
      // 获取banner和recommend的数据并赋值给data，进行保存，因为函数在调用完会被回收，如果直接使用获取的数据，则数据会被回收
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style>
#home{
  padding-top: 44px;
}
.nav_bg {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 5;
}
</style>