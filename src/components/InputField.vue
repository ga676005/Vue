<template>
  <input v-model="value" type="text" name="my-input" />
</template>

<script>
export default {
  //v-model無法使用props
  props: ["default"],

  mounted() {
    //component讀取完成後把props dafault的值賦予給data的value
    this.value = this.default;
  },

  updated() {
    //input值改變時依條件判斷發出事件時附帶的值
    return this.value === this.default
      ? this.$bus.$emit("dirty-field", false)
      : this.$bus.$emit("dirty-field", true);
  },

  data() {
    return {
      value: "",
    };
  },
};
</script>