<template>
  <div>
    <li
      class="cart__order-product"
      v-for="(item, index) in cartItems"
      :key="index"
    >
      {{ item.model }}
      <ul class="cart__order-product-details">
        <li class="cart__order-product-image">
          <img :src="item.img" alt="" :class="{ fullCart: !showButton }" />
        </li>
        <li>Size: {{ item.selectedSize }}</li>
        <li>Price: {{ item.price }}$</li>
      </ul>
    </li>
    <router-link v-if="showButton" to="/go-to-order">
      <b-button class="cart__total-order" variant="success"
        >Go to Order Details</b-button
      >
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    cartItems: Array,
    showButton: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
</style>
