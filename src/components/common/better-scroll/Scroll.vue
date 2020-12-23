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
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    setTimeout(() => {
      //this.$refs.warpper获取节点元素名为warpper的节点
      this.scroll = new BScroll(this.$refs.warpper, {
        click: true,
      });
    }, 300);
  }
};
</script>

<style scoped>
</style>