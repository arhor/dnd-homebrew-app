/* eslint-disable no-param-reassign */
import axios from 'axios';

const state = {
  all: [],
};

const getters = {};

const actions = {
  async loadAbilities({ commit }) {
    const { data } = await axios.get('data/5e-SRD-Ability-Scores.json');
    commit('SET_ABILITIES', data);
  },
};

const mutations = {
  SET_ABILITIES(store, payload) {
    store.all = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
