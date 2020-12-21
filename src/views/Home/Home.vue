<template>
  <div id="home">
    <nav-bar class="nav_bg">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper>
      <van-swipe-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image"/>
        </a>
      </van-swipe-item>
    </swiper>
  </div>
</template> 

<script>
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper
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
.nav_bg {
  background-color: var(--color-tint);
  color: #fff;
}
img {
  width: 100%;
}
</style>