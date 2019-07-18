export default {

  switchTheme({ commit }) {
    commit('switchDark');
  },

  switchMiniMode({ commit }) {
    commit('switchMiniMode');
  },

  switchFloatingMode({ commit }) {
    commit('switchFloatingMode');
  },

  switchClippedMode({ commit }) {
    commit('switchClippedMode');
  },

  switchFooterInsetMode({ commit }) {
    commit('switchFooterInsetMode');
  },

};
