<template>
  <!-- dirty變為true時會顯示，變為false時會再消失 -->
  <p v-if="dirty">Field is dirty</p>
</template>

<script>
export default {
  mounted() {
    //接收input改變時發出的事件
    this.$bus.$on("dirty-field", (dirty) => {
      //更新data dirty的值
      this.dirty = dirty;
    });
  },

  data() {
    return {
      dirty: false,
    };
  },
};
</script>