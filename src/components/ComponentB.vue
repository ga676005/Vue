<template>
  <div>
    {{ message }}

    <ComponentC />
  </div>
</template>

<script>
import ComponentC from "./ComponentC";

export default {
  components: {
    ComponentC,
  },
  created() {
    this.$bus.$on("say-hello", () => {
      //$on使用EventBus的監聽事件
      this.message = "Hello from Component A";
    });
  },
  data: function () {
    return {
      message: "Lonely Component Here!",
    };
  },
  beforeDestroy: function () {
    this.$bus.$off("say-hello");
  },
};
</script>