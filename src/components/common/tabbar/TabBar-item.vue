<template>
  <div class="tabbar-item" @click="my_click">
    <!-- <div>首页</div> -->
    <!-- 定义2个插槽，分别是图片和文字，因为是需要改动这2个元素的。所以运用插槽 -->
    <!-- 定义第三个插槽作为2张图片之间的切换，使用v-if来进行显示隐藏，并利用自定义的属性，来切换字体的颜色变动 -->
    <!-- 所有插槽外都用div进行包裹，可以防止插槽再被替换时，无法显示自己自定义的属性 -->
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBaritem",
  // 父传子，从父组件传入值，更改为string类型
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return { 
      // isActive: true
    };
  },
  computed:{
    isActive(){
      // 判断获取到的传入的path值与点击处于活跃时的页面的路径完全相等时，为true,则显示该页面的内容
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods: {
    my_click() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
  color: black;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin: 3px 0 4px 0;
  vertical-align: middle;
}
/* .active {
  color: red;
} */
</style>