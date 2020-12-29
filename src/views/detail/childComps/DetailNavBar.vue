<template>
  <div>
    <nav-bar>
      <div slot="left" class="backimg" @click="backclick">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          :key="index"
          class="title_item"
          :class="{active:index===currentcolor}"
          @click="titleclick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentcolor: 0
    };
  },
  methods: {
    titleclick(index) {
      this.currentcolor = index;
    },
    backclick() {
      this.$router.back()
    }
  }, 
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title_item {
  flex: 1;
}
.active {
  color: #ff5777;
}
.backimg {
  margin-top: 6px;
}
</style>