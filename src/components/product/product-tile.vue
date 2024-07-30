<template>
  <div>
    <div>
      <b-card no-body class="overflow-hidden" style="max-width: 540px">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              :src="product.img"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="product.model">
              <b-card-text>
                {{ product.description }}
              </b-card-text>
              <div class="product__box-order">
                <span class="product__box-price"> {{ product.price }}$ </span>
                <div class="product__box-order-size">
                  <label for="size">Size:</label>
                  <ProductSize @size-selected="onSizeSelected" />
                </div>
                <b-button @click="addToCart" class="product__box-button"
                  >Add to Cart</b-button
                >
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import ProductSize from "@/components/product/product-size.vue";

export default {
  props: {
    product: Object,
  },
  data() {
    return {
      selectedSize: "",
    };
  },
  components: {
    ProductSize,
  },
  methods: {
    onSizeSelected(newSize) {
      this.selectedSize = newSize;
    },
    addToCart() {
      this.$store.dispatch("Cart/addProductToCart", {
        ...this.product,
        selectedSize: this.selectedSize,
      });
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
    display: flex;
    flex-direction: column;
  }
  &__box-order {
    float: right;
    margin: 10px;
    gap: 20px;
    &-size {
      margin-bottom: 10px;
    }
  }
}
.product__box {
  &-button {
    margin-top: 20px;
  }
}

// .product-card {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 100%;
// }

// .product-img {
//   width: 100%;
//   max-height: 800px;
//   object-fit: cover;
// }
</style>