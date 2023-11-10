export default {
  namespaced: true,
  state: {
    products: [{
        id: 1,
        model: "Model-1",
        price: 1999.99,
        img: "https://imgur.com/w6FHr0O.jpeg",
        description: "Klasyczna elegancja w czerni – nasze komplety garniturowe podkreślą Twój pewny styl niezależnie od okazji.",
        sizes: ["S", "M", "L", "XL"],
        stock: 10,
      },
      {
        id: 2,
        model: "Model-2",
        price: 999.99,
        img: "https://imgur.com/fLA6wOy.jpeg",
        description: "Subtelna wyrafinowanie w odcieniu khaki – nasze garnitury dodadzą uroku Twojemu wyglądowi.",
        sizes: ["S", "M", "L", "XL"],
        stock: 5,
      },
      {
        id: 3,
        model: "Model-3",
        price: 2999.99,
        img: "https://imgur.com/sTToRbS.jpeg",
        description: "Współczesny szyk w odcieniu szarości – wybierz nasze komplety garniturowe, aby emanować pewnością siebie.",
        sizes: ["S", "M", "L", "XL"],
        stock: 8,
      },
      {
        id: 4,
        model: "Model-4",
        price: 2399.99,
        img: "https://imgur.com/71vYoZN.jpeg",
        description: "Spójrz na świat niebieskimi oczami – nasze garnitury nadadzą Ci wyjątkowy styl i elegancję.",
        sizes: ["S", "M", "L", "XL"],
        stock: 6,
      },
      {
        id: 5,
        model: "Model-5",
        price: 2399.99,
        img: "https://imgur.com/CE9cYaz.jpeg",
        description: "Oliwkowy wyraża charakter – wybierz komplety garniturowe, które odzwierciedlają Twoją indywidualność.",
        sizes: ["S", "M", "L", "XL"],
        stock: 10,
      },
      {
        id: 6,
        model: "Model-6",
        price: 1899.99,
        img: "https://imgur.com/iZkjYma.jpeg",
        description: "Czernią klasycznie zdefiniowany sukces – nasze garnitury staną się Twoim wizytówkowym elementem.",
        sizes: ["S", "M", "L", "XL"],
        stock: 10,
      },
      {
        id: 7,
        model: "Model-7",
        price: 2999.99,
        img: "https://imgur.com/fWvvcrU.jpeg",
        description: "W odcieniu brązu emanuj wyjątkowością – nasze komplety garniturowe podkreślą Twój unikalny styl.",
        sizes: ["S", "M", "L", "XL"],
        stock: 5,
      },
      {
        id: 8,
        model: "Model-8",
        price: 2999.99,
        img: "https://imgur.com/MuVJzc4.jpeg",
        description: "Elegancja w każdym odcieniu szarości – wybierz nasze garnitury, by wyrazić swój niezawodny gust.",
        sizes: ["S", "M", "L", "XL"],
        stock: 10,
      },
      {
        id: 9,
        model: "Model-9",
        price: 2999.99,
        img: "https://imgur.com/Dhu5mRO.jpeg",
        description: "W piaskowych odcieniach ukazuje się spokój – nasze komplety garniturowe zapewnią Ci wyjątkową elegancję.",
        sizes: ["S", "M", "L", "XL"],
        stock: 3,
      },
    ],
  },
  mutations: {
    addToCart(state, product) {
      state.cartItems.push({
        id: product.id,
        size: product.sizes,
        price: product.price,
        img: product.img
      });
    },
  },
  actions: {
    addProductToCart({
      commit
    }, product) {
      commit('addToCart', product);
    },
  }
}
