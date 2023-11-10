import Vue from 'vue'
import Vuex from 'vuex'
import Products from '@/store/modules/products-module.js'
import Cart from '@/store/modules/cart-module.js'
import auth from "@/store/auth.js";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Products,
    Cart,
    auth
  },
})
