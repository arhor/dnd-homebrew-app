import Monster from '~/classes/Monster';
import Player from '~/classes/Player';

export default {

  initialize({ dispatch }, data) {
    dispatch('initializeMonsters', data.monsters);
    dispatch('initializePlayers', data.players);
    dispatch('prepareBattleQueue');
  },

  initializeMonsters({ commit }, monsters) {
    monsters.forEach((it) => {
      for (let i = 0; i < it.number; i += 1) {
        commit('ADD_TO_BATTLE', new Monster(it.info));
      }
    });
  },

  initializePlayers({ commit }, players) {
    players.forEach((it) => {
      commit('ADD_TO_BATTLE', new Player(it));
    });
  },

  prepareBattleQueue({ commit }) {
    commit('SORT_BY_INITIATIVE');
  },

  nextTurn({ commit }) {
    commit('NEXT_TURN');
  },

  prevTurn({ commit }) {
    commit('PREV_TURN');
  },

  destroy({ commit }) {
    commit('CLEAR_ALL_DATA');
  },

};
