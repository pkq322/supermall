<template>
  <div id="home">
    <nav-bar class="nav_bg">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template> 

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
    });
  }
};
</script>

<style scope>
.nav_bg {
  background-color: var(--color-tint);
  color: #fff;
}
</style>