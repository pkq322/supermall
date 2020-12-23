<template>
  <Tab-bar class='Tab_bar'>
    <!-- path,activeColor作为属性参数传入子组件中 -->
    <tab-baritem path="/home" activeColor="deeppink">
      <img slot="item-img" src="~assets/img/tabbar/home.svg" />
      <img slot="item-img-active" src="~assets/img/tabbar/home_active.svg" />
      <div slot="item-text">首页</div>
    </tab-baritem>
    <tab-baritem path="/classifty" activeColor="deeppink">
      <img slot="item-img" src="~assets/img/tabbar/category.svg" />
      <img slot="item-img-active" src="~assets/img/tabbar/category_active.svg" />
      <div slot="item-text">分类</div>
    </tab-baritem>
    <tab-baritem path="/cart" activeColor="deeppink">
      <img slot="item-img" src="~assets/img/tabbar/shopcart.svg" />
      <img slot="item-img-active" src="~assets/img/tabbar/shopcart_active.svg" />
      <div slot="item-text">购物车</div>
    </tab-baritem>
    <tab-baritem path="/mine" activeColor="deeppink">
      <img slot="item-img" src="~assets/img/tabbar/profile.svg" />
      <img slot="item-img-active" src="~assets/img/tabbar/profile_active.svg" />
      <div slot="item-text">我的</div>
    </tab-baritem>
  </Tab-bar>
</template>

<script>
// 导入tabbar组件
import TabBar from "components/common/tabbar/TabBar";
import TabBaritem from "components/common/tabbar/TabBar-item";
export default {
  name: "MainTabBar",
  // 注册组件
  components: {
    TabBar,
    TabBaritem
  }
};
</script>

<style scoped>
  .Tab_bar{
    position: relative;
    z-index: 7;
  }
</style>