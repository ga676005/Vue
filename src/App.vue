<template>
  <div id="app">
    <Navigation />

    <div class="hero-box">
      <div class="hero-box-left">
        <LargeText />
        <MediumText />
      </div>

      <div class="hero-box-right">
        <MyForm />
      </div>
    </div>
  </div>
</template>

<script>
import MyForm from "./components/MyForm.vue";
import Navigation from "./components/Navigation.vue";
import LargeText from "./components/LargeText.vue";
import MediumText from "./components/MediumText.vue";

export default {
  name: "App",
  components: {
    MyForm,
    Navigation,
    LargeText,
    MediumText,
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
