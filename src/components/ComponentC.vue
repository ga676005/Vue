<template>
  <!-- 顯示data.msg的值 -->
  <div>C: {{ msg }}</div>
</template>

<script>
export default {
  props: {
    message: String,
  },

  data: function () {
    //$on使用EventBus的監聽事件
    this.$bus.$on("say-hello", () => {
      //事件觸發後，用props修改data
      this.msg = this.message + " then modified in ComponentC";
    });

    return {
      //data跟props不能同名
      msg: this.message,
    };
  },
};
</script>