import axios from 'axios';

const state = {
  loaded: false,
  all: [],
};

const getters = {
  getMonstersByName: state => (name) => {
    const query = String(name);
    return query
      ? state.all.filter(m => m.name.toLowerCase().includes(query))
      : [];
  },
};

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
