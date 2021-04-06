<template>
  <button
    class="p-4 border bg-gray-100 rounded-lg mb-12"
    @click.prevent="sayHello"
  >
    Say Hello to Component B!
  </button>
</template>

<script>
export default {
  methods: {
    sayHello: function () {
      this.$bus.$emit("say-hello");
      //$emit註冊事件到EventBus
    },
  },
};
</script>