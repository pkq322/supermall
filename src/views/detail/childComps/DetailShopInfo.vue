<template>
  <div class="shopInfo">
    <div class="shopInfo_top">
      <div class="shop_img">
        <img :src="shop.shopLogo" alt />
      </div>
      <div class="shop_toptext">
        <p>{{shop.name}}</p>
      </div>
    </div>
    <div class="shopInfo_bottom">
      <div class="shop_lefttext">
        <div class="text1">
          <p>{{shop.sells}}</p>
          <p>总销量</p>
        </div>
        <div class="text2">
          <p>{{shop.goodsCount}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop_righttext">
        <div class="shop_item" v-for="(item,index) in shop.score" :key="index">
          <span>{{item.name}}&ensp;</span>
          <span class="score" :class="{'score_better':item.isBetter}">{{item.score}}&ensp;</span>
          <span
            class="better"
            :class="{'better_more':item.isBetter}"
          >&ensp;{{item.isBetter ? "高":"低"}}</span>
        </div>
      </div>
    </div>
    <div class="going">
      <p>进店逛逛</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang='less' scoped>
.shopInfo {
  background-color: #fff;
  .going { 
    width: 100%;
    text-align: center;
    color: #555;
    font-size: 14px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding-bottom: 20px;
    border-bottom: 5px solid #ededed;
    p {
      background-color: #f4f4fc;
      border-radius: 5px;
      flex: 0 0 120px;
      height: 22px;
    }
  }
}
.shopInfo_top {
  display: flex;
}
.shop_img {
  flex: 0 0 60px;
  border: 1px solid #ccc;
  border-radius: 30px;
  margin: 20px 0px 0px 10px;
  img {
    width: 100%;
    border-radius: 30px;
  }
}
.shop_toptext {
  flex: 1;
  line-height: 60px;
  margin: 20px 0px 0px 10px;
}
.shopInfo_bottom {
  display: flex;
  margin-top: 20px;
  .shop_lefttext {
    flex: 1;
    display: flex;
    text-align: center;
    color: #000;
    border-right: 1px solid #ccc;
    box-sizing: border-box;
    .text1 {
      flex: 1;
      p {
        margin-top: 10px;
      }
    }
    .text2 {
      flex: 1;
      p {
        margin-top: 10px;
      }
    }
  }
  .shop_righttext {
    flex: 1;
    display: flex;
    flex-direction: column;
    color: #000;
    font-size: 14px;
    .shop_item {
      flex: 1;
      margin-left: 20px;
      .score {
        color: chartreuse;
      }
      .score_better {
        color: red;
      }
      .better {
        color: #fff;
        background-color: chartreuse;
      }
      .better_more {
        background-color: red;
      }
    }
  }
}
</style>