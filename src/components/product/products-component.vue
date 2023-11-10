<template>
  <div class="products__container">
    <ProductTile
      v-for="(product, index) in products"
      :key="index"
      :product="product"
      class="product__box"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script>
import ProductTile from "@/components/product/product-tile.vue";
import { mapState } from "vuex";

export default {
  components: {
    ProductTile,
  },
  computed: {
    ...mapState("Products", ["products"]),
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("Cart/addProductToCart", product);
    },
  },
};
</script>


<style lang="scss">
.products {
  &__container {
    margin: 40px 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 50px;
  }
  &__box {
    flex-basis: 33%;
    height: 100%;
    &-order {
      float: right;
      margin: 10px;
      gap: 20px;
      &-size {
        margin-bottom: 10px;
      }
    }
  }
}
.product__box {
  &-stock {
    float: right;
  }
  &-button {
    margin-top: 20px;
  }
}
</style>
