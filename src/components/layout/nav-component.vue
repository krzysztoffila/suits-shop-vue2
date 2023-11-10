<template>
  <b-navbar class="navbar" variant="dark" type="dark">
    <b-navbar-nav>
      <div class="navbar__left">
        <router-link to="/home" class="navbar__left-router-link" variant="dark"
          >SuitShop</router-link
        >
        <router-link to="/shop" class="navbar__left-router-link" variant="dark"
          >Products</router-link
        >
      </div>
    </b-navbar-nav>
    <b-navbar-nav class="ms-auto">
      <cart-component />
      <template v-if="isUserLoggedIn">
        <b-button variant="danger" @click="logout">Logout</b-button>
      </template>
      <template v-else>
        <router-link to="/login" class="navbar__login-button" variant="dark"
          ><b-button variant="primary">Login</b-button></router-link
        >
      </template>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import CartComponent from "@/components/cart/cart-component.vue";
import ProductsComponent from "@/components/product/products-component.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    ProductsComponent,
    CartComponent,
  },
  computed: {
    ...mapGetters("auth", ["isUserLoggedIn"]),
  },
  methods: {
    ...mapMutations("auth", ["logout"]),
  },
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  align-content: space-between;
  &__left {
    display: flex;
    justify-content: center;
    align-items: center;
    &-router-link {
      margin-left: 20px;
      text-decoration: none;
      color: rgb(255, 255, 255, 0.55);
      &:hover {
        cursor: pointer;
      }
    }
  }
  &__login-button {
    margin-right: 20px;
  }
}
</style>
