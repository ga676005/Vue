<template>
  <div>
    {{ message }}

    <ComponentC message="Message sent from ComponentB" />
  </div>
</template>

<script>
import ComponentC from "./ComponentC";

export default {
  components: {
    ComponentC,
  },
  created() {
    this.$bus.$on("say-hello", (message) => {
      //$on使用EventBus的監聽事件
      this.message = message;
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