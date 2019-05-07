import Vue from 'vue';
import Vuex from 'vuex';
import { user } from './modules/user/index.js';
import { lobby } from './modules/lobby/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: { user, lobby },

  state: {},
  getters: {},
  mutations: {}
});
