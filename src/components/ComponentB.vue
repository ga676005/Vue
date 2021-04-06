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