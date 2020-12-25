<template>
  <div class="warpper" ref="warpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  // 父传子一个probeType属性为3
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // 1.创建BSscroll对象
    //this.$refs.warpper获取节点元素名为warpper的节点
    this.scroll = new BScroll(this.$refs.warpper, {
      click: true, //使元素内点击事件可以点击(button按钮等除外,默认是false)
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    // 2.监听滚动区域的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    }

    // 3.监听底部上拉加载更多
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
        // console.log(this.scroll);
      });
    }
  },


  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // scroll中的回调函数，可以做到页面下拉加载新的内容
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // scroll中的回调函数，会重新计算页面，并刷新
    refresh() {
      this.scroll && this.scroll.refresh();
      console.log("重新计算");
    }
  }
};
</script>

<style scoped>
</style>