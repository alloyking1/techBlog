import Vue from "vue";
import Vuex from "vuex";
import Category from "./api/Category.api"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
  },

  actions: {
    /**fetch user on login */
    async fetchCategories({ commit }) {
      const res = await Category.fetchCategories;
      return console.log(res);
      // commit("UPDATE_USER_INFO", res.data.data);
      // return;
    },
  },

  mutations: {
    //update the state with user details
    // UPDATE_USER_INFO(state, payload) {
    //   state.user = payload;
    //   return;
    // },
  },

});