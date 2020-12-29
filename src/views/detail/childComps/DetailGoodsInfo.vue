<template>
  <div v-if='Object.keys(detailInfo).length !== 0' class="goods_info">
    <div class="info_desc clear_fix">
      <div class="strat">
      </div>
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info_list">
    <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" 
    :src="item"  alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailGoodsInfo',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style scoped>
.goods_info{
  background-color: #fff;
  padding: 20px 0;
}
  img{
    width: 100%;
  }
</style>