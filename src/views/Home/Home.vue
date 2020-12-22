<template>
  <div id="home">
    <!-- 头部导航区 -->
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- banner区域 -->
    <home-swiper :banners="banners" />
    <!-- 圆框图区 -->
    <recommend-view :recommends="recommends" />
    <!-- 本周流行 -->
    <featureView />
    <!-- 选择控制 -->
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
    <!-- 商品展示 -->
    <goods-list :goods="goods[currenttype].list"></goods-list>
  </div>
</template> 

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import homeSwiper from "views/Home/childComps/homeSwiper";
import recommendView from "./childComps/recommendView";
import featureView from "./childComps/featureView";

import { getHomeMultidata } from "network/home";
import { getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    homeSwiper,
    recommendView,
    featureView
  },
  data() {
    return {
      // 获取的banner图片的数据
      banners: [],
      // 获取的圆框图的数据
      recommends: [],
      // 三栏商品列表数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currenttype:'pop'
    };
  },

  // 生命周期函数，组件创建时
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //2. 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  methods: {
    //事件监听的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currenttype = "pop";
          break;
        case 1:
          this.currenttype = "new";
          break;
        case 2:
          this.currenttype = "sell";
          break;
      }
    },

    // 网络请求的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        // 获取banner和recommend的数据并赋值给data，进行保存，因为函数在调用完会被回收，如果直接使用获取的数据，则数据会被回收
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page + 1;
      });
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  /* padding-bottom: 600px; */
}
</style>