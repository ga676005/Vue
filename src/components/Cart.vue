<template>
  <div>
    <div>
      <ul>
        <li class="price-row" v-for="product in products" :key="product.id">
          <div>{{ product.name }}</div>
          <div class="quantity-row">
            <div class="price-quantity">Qty: {{ product.qty }}</div>
            <div>{{ formatPrice(product.price * product.qty) }}</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="price-row">
      <div class="price-label">Sub-total</div>
      <div class="price-wrapper">{{ formatPrice(subtotal) }}</div>
    </div>
    <div class="price-row">
      <div class="price-label">Shipping</div>
      <div class="price-wrapper">{{ formatPrice(shipping) }}</div>
    </div>
    <div class="price-row">
      <div class="price-label">Total</div>
      <div class="price-wrapper">{{ formatPrice(total) }}</div>
    </div>
    <button class="checkout-button">CHECKOUT</button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  created() {
    this.$bus.$on("add-product", (product) => {
      this.addProduct(product);
    });
  },

  data: function () {
    return {
      products: [],
    };
  },

  computed: {
    subtotal() {
      return this.products.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );
    },
    shipping() {
      return this.products.reduce((sum, item) => sum + item.qty * 399, 0);
    },
    total() {
      return this.subtotal + this.shipping;
    },
  },

  methods: {
    addProduct: function (product) {
      let productIndex = this.products.findIndex((p) => p.id === product.id);

      if (productIndex >= 0) {
        this.products[productIndex].qty++;
        return;
      }

      this.products.push({
        ...product,
        qty: 1,
      });
    },
    formatPrice(cents) {
      return "$" + cents / 100;
    },
  },

  beforeDestroy() {
    this.$bus.$off("add-product");
  },
};
</script>
<style scoped>
.quantity-row {
  display: flex;
}
.price-quantity {
  margin-right: 15px;
}
.checkout-button {
  width: 100%;
  text-align: center;
  padding: 10px 0;
  background: #000;
  color: #eee;
}
.price-row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  margin: 10px;
  padding-bottom: 10px;
}
</style>