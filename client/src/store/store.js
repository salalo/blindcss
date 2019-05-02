import Vue from 'vue';
import Vuex from 'vuex';
import { user } from './modules/user';
import { lobby } from './modules/lobby';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: { user, lobby },

  state: {},
  getters: {},
  mutations: {}
});
