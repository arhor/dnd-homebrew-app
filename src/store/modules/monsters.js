import axios from 'axios';

const state = {
  all: [],
};

const getters = {};

const actions = {
  async loadMonsters({ commit }) {
    const response = await axios.get('data/5e-SRD-Monsters.json');
    commit('setMonsters', response.data);
  },
};

const mutations = {
  setMonsters(state, monsters) {
    state.all = monsters;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
