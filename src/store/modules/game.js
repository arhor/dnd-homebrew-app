import fs from 'fs';

const state = {
  all: [],
  players: null,
};

const getters = {};

const actions = {
  load({ commit }) {
    // const saves = [];
    try {
      const files = fs.readdirSync('./saves');
      files.forEach((file) => {
        const buffer = fs.readFileSync(`./saves/${file}`);
        // STUB START
        const game = JSON.parse(buffer.toString());
        commit('SET_CURRENT_GAME', game);
        // STUB END
      });
    } catch (err) {
      console.log(err);
      fs.mkdirSync('./saves');
    }/* finally {
      *   commit('SET_SAVES', saves);
      * }
      */
  },
};

const mutations = {
  SET_SAVES(state, data) {
    state.all = data;
  },
  SET_CURRENT_GAME(state, data) {
    state.players = data.players;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
