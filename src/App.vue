<template>
  <div id="app">
    <Card name="Dodo Go" company="Best company" />
    <HelloWorld msg="yyyyyyy" />
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    Card,
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
