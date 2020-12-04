import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
  },

  actions: {
    /**fetch user on login */
    // async fetchUser({ commit }) {
    //   const res = await axios.get("/api/user");
    //   commit("UPDATE_USER_INFO", res.data.data);
    //   return;
    // },
  },

  mutations: {
    //update the state with user details
    // UPDATE_USER_INFO(state, payload) {
    //   state.user = payload;
    //   return;
    // },
  },

});