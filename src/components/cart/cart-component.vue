<template>
  <div class="cart">
    <b-button v-b-toggle.sidebar-right>
      <b-icon icon="cart" class="cart-icon"></b-icon>Cart
    </b-button>
    <b-sidebar id="sidebar-right" title="Your Cart" right shadow>
      <div class="px-3 py-2">
        <p>Your Order:</p>
        <ol class="cart__order">
          <li
            class="cart__order-product"
            v-for="(item, index) in cartItems"
            :key="index"
          >
            {{ item.model }}
            <ul class="cart__order-product-details">
              <li class="cart__order-product-image">
                <img :src="item.img" alt="" />
              </li>
              <li>Size: {{ item.selectedSize }}</li>
              <li>Price: {{ item.price }}$</li>
            </ul>
            <div class="cart__order-product-button">
              <b-button @click="removeFromCart(item.id)" variant="danger"
                >Delete Product</b-button
              >
            </div>
          </li>
        </ol>
        <div class="cart__total">
          <br />
          <span class="cart__total-price">Total: {{ cartTotal }}$</span>
          <div class="cart__total-buttons">
            <router-link to="/go-to-order"
              ><b-button class="cart__total-order" variant="success"
                >Go to Order Details</b-button
              ></router-link
            >
            <b-button
              @click="clearCart()"
              class="cart__total-order"
              variant="danger"
              >Clear Cart</b-button
            >
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.Cart.cartItems;
    },
    cartTotal() {
      return this.$store.state.Cart.cartItems
        .reduce((total, product) => total + product.price, 0)
        .toFixed(2);
    },
  },
  methods: {
    removeFromCart(productId) {
      this.$store.dispatch("Cart/removeProductFromCart", productId);
    },
    clearCart() {
      this.$store.dispatch("Cart/removeAllProductsFromCart");
    },
  },
};
</script>

<style lang="scss">
.cart {
  margin-right: 20px;
  &-icon {
    margin-right: 10px;
  }
}

.cart__order-product {
  &-details {
    list-style-type: none;
  }
  &-image img {
    width: 50px;
    height: 50px;
  }
}

.cart__total {
  margin-top: 30px;
  &-price {
    line-height: 40px;
  }
  &-buttons {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
