<template>
  <div class="goods_item">
    <img :src="goodsItem.show.img" alt />
    <div class="goods_text">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.goods_item {
  flex: 0 0 47%;
  font-size: 13px;

}
.goods_item img {
  width: 100%;
  border-radius: 5px;
}
.goods_text{
    text-align: center;
}
.goods_text p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.price{
    color: var(--color-high-text);
    margin-right: 20px;
}
.cfav{
    position: relative;
}
.cfav::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>