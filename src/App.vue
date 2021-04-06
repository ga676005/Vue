<template>
  <div id="app">
    <h1>The Cup Store</h1>
    <ProductComponent
      v-for="product in products"
      :product="product"
      :key="product.id"
    />
    <Cart />
  </div>
</template>

<script>
import ProductComponent from "./components/ProductComponent.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  components: {
    ProductComponent,
    Cart,
  },
  data: function () {
    return {
      products: [
        {
          id: 120,
          name: "Colorful Cups",
          price: 999,
          img: "assets/cups1.jpg",
        },
        {
          id: 121,
          name: "Coffee & Home",
          price: 1499,
          img: "assets/cups2.jpg",
        },
        {
          id: 122,
          name: "Old Red Friend",
          price: 1999,
          img: "assets/cups3.jpg",
        },
      ],
    };
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
