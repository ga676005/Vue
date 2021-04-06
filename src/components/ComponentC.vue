<template>
  <div>C: {{ message }}</div>
</template>

<script>
export default {
  data: function () {
    this.$bus.$on("say-hello", () => {
      //$on使用EventBus的監聽事件
      this.message = "Hello from Component A";
    });

    return {
      message: "Lonely Component Here!",
    };
  },
};
</script>