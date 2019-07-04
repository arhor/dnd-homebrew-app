/* eslint-disable no-param-reassign */
import axios from 'axios';

const state = {
  all: [],
};

const getters = {};

const actions = {
  async load({ commit }) {
    const { data } = await axios.get('data/5e-SRD-Monsters.json');
    commit('SET_MONSTERS', data);
  },
};

const mutations = {
  SET_MONSTERS(state, payload) {
    state.all = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
