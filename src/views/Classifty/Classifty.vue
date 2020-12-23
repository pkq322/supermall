<template>
  <div class="wrapper">
    <ul class="content">
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Classifty",
  mounted() {
    this.scroll = new BScroll(".wrapper", {
      probeType:3,
      pullUpLoad:true
    });
    // this.scroll.on('scroll',(position) => {
    //   console.log(position);
    // })
    this.scroll.on('pullingUp',() => {
      console.log('上拉加载更多');
    })
  }
};
</script>

<style>
.wrapper {
  height: 150px;
  background-color: chartreuse;
  overflow: hidden;
}
</style>