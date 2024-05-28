import Vue from 'vue';
import Vuex from 'vuex';
import { encryptAndSaveTokens, decryptAndReadTokens } from '../utils/crypto';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwt: null,
    refreshToken: null,
  },
  mutations: {
    setTokens(state, { jwt, refreshToken }) {
      state.jwt = jwt;
      state.refreshToken = refreshToken;
    },
  },
  actions: {
    async saveTokens({ commit }, { jwt, refreshToken }) {
      await encryptAndSaveTokens(jwt, refreshToken);
      commit('setTokens', { jwt, refreshToken });
    },
    async loadTokens({ commit }) {
      const { jwt, refreshToken } = await decryptAndReadTokens();
      commit('setTokens', { jwt, refreshToken });
    },
  },
  getters: {
    jwt: (state) => state.jwt,
    refreshToken: (state) => state.refreshToken,
  },
});