const state = {
  isLoggedIn: localStorage.getItem("token") !== null,
};

const getters = {
  isUserLoggedIn: (state) => state.isLoggedIn,
};

const mutations = {
  login(state) {
    state.isLoggedIn = true;
  },
  logout(state) {
    state.isLoggedIn = false;
    localStorage.removeItem("token");
    alert('Wylogowano uzytkownika');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
