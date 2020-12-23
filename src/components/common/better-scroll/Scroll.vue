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
	props:{
		probeType:{
			type:Number,
			default:0
		}
	},
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    setTimeout(() => {
			// 1.创建BSscroll对象
      //this.$refs.warpper获取节点元素名为warpper的节点
      this.scroll = new BScroll(this.$refs.warpper, {
				click: true,   //使元素内点击事件可以点击(button按钮等除外,默认是false)
				probeType:this.probeType
			});
			// 2.监听滚动区域的位置
			this.scroll.on('scroll',(position) => {
				this.$emit('scroll',position)
			})
    }, 350);
  }
};
</script>

<style scoped>
</style>