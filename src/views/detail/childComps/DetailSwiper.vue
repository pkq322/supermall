<template>
  <swiper class="swiper_itemone">
    <van-swipe-item v-for="(item,index) in topImages" :key="index">
      <img :src="item" />
    </van-swipe-item>
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper
  },

  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.swiper_itemone {
  height: 300px;
  overflow: hidden;
}
img {
  width: 100%;
}
</style>