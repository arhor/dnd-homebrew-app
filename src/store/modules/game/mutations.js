export default {

  SET_SAVES(state, data) {
    state.all = data;
  },

  SET_CURRENT_GAME(state, data) {
    state.players = data.players;
  },

};
