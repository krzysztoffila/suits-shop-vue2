<template>
  <div id="app">
    <header>
      <Nav-component>
        <cart-component />
      </Nav-component>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
import NavComponent from "@/components/layout/nav-component.vue";
import CartComponent from "@/components/cart/cart-component.vue";
import Products from "@/components/product/products-component.vue";

export default {
  components: {
    NavComponent,
    CartComponent,
    Products,
  },
  created() {
    this.$router.push("shop");
  },
};
</script>
<style lang="scss">
</style>
