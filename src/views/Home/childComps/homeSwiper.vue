<template>
  <swiper>
    <van-swipe-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </van-swipe-item>
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
export default {
  name: "homeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>