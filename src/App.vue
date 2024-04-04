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
    <Footer />
  </div>
</template>
<script>
import NavComponent from "@/components/layout/nav-component.vue";
import CartComponent from "@/components/cart/cart-component.vue";
import Products from "@/components/product/products-component.vue";
import Footer from "@/components/layout/footer-component.vue";

export default {
  components: {
    NavComponent,
    CartComponent,
    Products,
    Footer,
  },
  created() {
    this.$router.push("home");
  },
};
</script>
<style lang="scss"></style>
