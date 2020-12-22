<template>
  <div class="tab_control">
    <div
      v-for="(item ,index) in titles"
      :key="index"
      class="tab_control_items"
      :class="{active:index === currentindex}"
      @click="itemclick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentindex: 0
    };
  },
  methods: {
    itemclick(index) {
      this.currentindex = index;
      this.$emit('tabClick',index)
    }
  }
};
</script>

<style scoped>
.tab_control {
  position: sticky;
  top: 44px;
  z-index: 4;
  display: flex;
  text-align: center;
  font-size: 14px;
  background-color: #fff;
}
.tab_control_items {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab_control_items span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
}
</style>