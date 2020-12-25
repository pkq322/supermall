<template>
  <div id="home">
    <!-- 头部导航区 -->
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- tab假象停留效果 -->
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabcontrol"
      calss="tab_control"
      v-show='isTabFixed'
    ></tab-control>

    <!-- scroll框架的组件 -->
    <scroll
      class="warpper"
      ref="scroll"
      :probe-type="3"
      @scroll="contentscroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- banner区域 -->
      <home-swiper :banners="banners" @swiperimageload="swiperimageload" />
      <!-- 圆框图区 -->
      <recommend-view :recommends="recommends" />
      <!-- 本周流行 -->
      <featureView />
      <!-- 选择控制 -->
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabcontrol2"></tab-control>
      <!-- 商品展示 -->
      <goods-list :goods="goods[currenttype].list" :good="true"></goods-list>
    </scroll>

    <backtop @click.native="backclick" v-show="isshowbacktop" />
    <!-- .native监听组件的点击事件 -->
  </div>
</template> 

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import scroll from "components/common/better-scroll/Scroll";
import backtop from "components/content/backTop/BackTop";

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
    scroll,
    backtop,
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
      currenttype: "pop",
      // 显示隐藏按钮的默认值
      isshowbacktop: false,
      // 滑动位置固定tabcontrol，设一个默认值
      tabcontrol: 0,
      isTabFixed:false
    };
  },

  // 生命周期函数，组件创建时
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  mounted() {
    // 1.监听item中图片加载完成(加入防抖函数的使用)
    const refresh = this.debounce(this.$refs.scroll.refresh, 200);
    // 总线机制的使用$on
    this.$bus.$on("itemimageload", () => {
      refresh();
    });

    // 2.获取tabcontrol的offsettop的值
    // 所有的组件都有一个$el，用来获取组件的元素
  },

  methods: {
    //事件监听的方法

    // 防抖动函数
    debounce(func, delay) {
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },

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
      this.$refs.tabcontrol.currentindex = index
      this.$refs.tabcontrol2.currentindex = index
    },

    // 回到顶部
    backclick() {
      // 获取better-scroll中的scroll，在使用To属性，回到顶部
      //0,0是x和y值 500是时长
      this.$refs.scroll.scrollTo(0, 0, 500);
    },

    // 在home页监听滚动的位置
    contentscroll(position) {
      // 大于500时为true，显示返回按钮，反之则不显示
      // 1.判断backtop是否显示
      this.isshowbacktop = -position.y > 500;

      // 2.决定tabcontrol是否吸顶（position：fixed）
      this.isTabFixed = -position.y > this.tabcontrol;
    },

    // 在home页面监听加载更多的事件
    loadMore() {
      this.getHomeGoods(this.currenttype);
    },

    swiperimageload() {
      this.tabcontrol = this.$refs.tabcontrol2.$el.offsetTop;
      console.log("tabcontrol距离nav的距离 " + this.tabcontrol);
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
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
/* #home {
  padding-top: 44px;
} */
/* 在使用浏览器原生滚动时为了实现不和一起滚动时所用 */
/* .nav_bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
} */
.warpper {
  touch-action: none;
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab_control {
  position: relative;
  z-index: 9;
}
</style>