<template>
  <div id="app">
    <Todo />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  name: "App",
  components: {
    Todo,
  },
  data: function () {
    return {};
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
  padding: 15px 0;
  font-size: 14px;
  background: #eeffff;
  color: #888;
}
h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 15px;
}
</style>
