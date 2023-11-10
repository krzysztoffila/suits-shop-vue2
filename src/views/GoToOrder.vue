<template>
  <div class="order">
    <div class="order__section">
      <h1>Check your order:</h1>
      <CartTile :cartItems="cartItems" :showButton="false" />
      <div class="order__summary">
        <div class="cart__total">
          <span class="cart__total-price">Total: {{ cartTotal }}$</span>
        </div>
        <router-link to="/shop">
          <b-button class="cart__total-order" variant="warning"
            >Back to Shop</b-button
          >
        </router-link>
      </div>
    </div>
    <div v-if="!isUserLoggedIn" class="login__section">
      <LoginComponent />
    </div>
    <div v-else class="login__section login__section-summary-button">
      <b-button variant="success" size="lg"> Go to Order Details </b-button>
    </div>
  </div>
</template>

<script>
import CartTile from "@/components/cart/cart-tile.vue";
import LoginComponent from "@/components/login/login-component.vue";

export default {
  components: {
    CartTile,
    LoginComponent,
  },
  computed: {
    cartItems() {
      return this.$store.state.Cart.cartItems;
    },
    cartTotal() {
      return this.$store.state.Cart.cartItems
        .reduce((total, product) => total + product.price, 0)
        .toFixed(2);
    },
    isUserLoggedIn() {
      return localStorage.getItem("token") !== null;
    },
  },
};
</script>

<style lang="scss">
.order {
  display: flex;
  padding: 40px 40px;

  &__section {
    flex: 1;
    border: 1px solid black;
    padding: 20px;

    .cart__order-product-image img.fullCart {
      width: 100px;
      height: 120px;
    }
  }

  .order__summary {
    justify-content: space between;
    line-height: 40px;
  }
}

.login__section,
.order__section {
  flex: 1;
  border: 1px solid black;
  padding: 20px;
}

.cart__total {
  font-size: 2rem;
  margin-top: 30px;
}
.login__section-summary-button {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
