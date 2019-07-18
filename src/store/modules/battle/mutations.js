export default {

  ADD_TO_BATTLE(state, creature) {
    state.queue.push(creature);
  },

  SORT_BY_INITIATIVE(state) {
    state.queue = state.queue.sort((one, two) => {
      const oneIni = Number(one.initiative);
      const twoIni = Number(two.initiative);

      let result = 0;
      if (oneIni > twoIni) {
        result = -1;
      } else if (oneIni < twoIni) {
        result = 1;
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

  CLEAR_ALL_DATA(state) {
    state.queue = [];
  },

};
