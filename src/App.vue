<template>
  <div
    id="app"
    class="bg-gray-300 flex flex-col justify-center items-center h-screen"
  >
    <InputField default="My default text" />
    <IsDirty />
  </div>
</template>

<script>
import InputField from "./components/InputField.vue";
import IsDirty from "./components/IsDirty";

export default {
  name: "App",
  components: {
    InputField,
    IsDirty,
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
