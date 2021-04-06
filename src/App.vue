<template>
  <div id="app">
    <ComponentA />
    <ComponentB />
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

export default {
  name: "App",
  components: {
    ComponentA,
    ComponentB,
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
body {
  background: #fff;
  color: #777;
}

.hero-box {
  background: #f3f3ff;
  display: flex;
}
.hero-box-left {
  width: 400px;
  margin: 25px;
}
.hero-box-right {
  width: 100%;
  margin: 25px;
}
</style>
