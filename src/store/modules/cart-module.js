export default {
  namespaced: true,
  state: {
    cartItems: [],
  },
  mutations: {
    addToCart(state, product) {
      state.cartItems.push(product);
    },
    removeFromCart(state, productId) {
      const index = state.cartItems.findIndex(item => item.id === productId);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
    clearCart(state) {
      state.cartItems = [];
    }
  },
  actions: {
    addProductToCart({
      commit
    }, product) {
      commit('addToCart', product);
    },
    removeProductFromCart({
      commit
    }, productId) {
      commit('removeFromCart', productId);
    },
    removeAllProductsFromCart({
      commit
    }) {
      commit('clearCart')
    }
  },
};
