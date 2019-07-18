import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import modules from './modules';

const state = {
  name: 'D&D Homebrew App',
  dark: true,
  drawers: [
    'Default (no property)',
    'Permanent',
    'Temporary',
  ],
  primaryDrawer: {
    model: null,
    type: 'default (no property)',
    clipped: false,
    floating: false,
    mini: false,
  },
  footer: {
    inset: false,
  },
};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules,
});
