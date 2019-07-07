import Monster from '../../classes/Monster';
import Player from '../../classes/Player';

const state = {
  queue: [],
};

const getters = {};

const actions = {
  initializeMonsters({ commit }, monsters) {
    monsters.forEach((it) => {
      for (let i = 0; i < it.number; i += 1) {
        commit('ADD_TO_BATTLE', new Monster(it.info));
      }
    });
  },
  initializePlayers({ commit }, players) {
    players.forEach(it => commit('ADD_TO_BATTLE', new Player(it)));
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
};

const mutations = {
  ADD_TO_BATTLE(state, creature) {
    state.queue.push(creature);
  },
  SORT_BY_INITIATIVE(state) {
    state.queue = state.queue.sort((one, two) => {
      const oneIni = Number(one.initiative);
      const twoIni = Number(two.initiative);

      let result = 0;
      if (oneIni > twoIni) {
        result = 1;
      } else if (oneIni < twoIni) {
        result = -1;
      }
      return result;
    });
  },
  NEXT_TURN(state) {
    const head = state.queue.shift();
    state.queue.push(head);
  },
  PREV_TURN(state) {
    const tail = state.queue.pop();
    state.queue.unshift(tail);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
