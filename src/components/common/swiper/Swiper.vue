<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="red">
      <slot></slot>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Swiper"
};
</script>

<style>

</style>