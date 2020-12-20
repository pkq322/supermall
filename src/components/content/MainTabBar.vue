<template>
  <Tab-bar>
    <!-- path,activeColor作为属性参数传入子组件中 -->
    <tab-baritem path="/home" activeColor="deeppink">
      <img slot="item-img" src="assets/img/tabbar/home.png" />
      <img slot="item-img-active" src="assets/img/tabbar/home_active.png" />
      <div slot="item-text">首页</div>
    </tab-baritem>
    <tab-baritem path="/classifty" activeColor="deeppink">
      <img slot="item-img" src="assets/img/tabbar/classify.png" />
      <img slot="item-img-active" src="assets/img/tabbar/classifty_active.png" />
      <div slot="item-text">分类</div>
    </tab-baritem>
    <tab-baritem path="/find" activeColor="deeppink">
      <img slot="item-img" src="assets/img/tabbar/find.png" />
      <img slot="item-img-active" src="assets/img/tabbar/find_active.png" />
      <div slot="item-text">发现</div>
    </tab-baritem>
    <tab-baritem path="/mine" activeColor="deeppink">
      <img slot="item-img" src="assets/img/tabbar/mine.png" />
      <img slot="item-img-active" src="assets/img/tabbar/mine_active.png" />
      <div slot="item-text">我的</div>
    </tab-baritem>
  </Tab-bar>
</template>

<script>
// 导入tabbar组件
import TabBar from "components/common/tabbar/TabBar";
import TabBaritem from "components/common/tabbar/TabBar";
export default {
  name: "MainTabBar",
  // 注册组件
  components: {
    TabBar,
    TabBaritem
  }
};
</script>

<style>
</style>