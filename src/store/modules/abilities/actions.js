export default {

  async load({ commit }) {
    const module = await import('~/assets/data/5e-SRD-Ability-Scores.json');
    commit('SET_ABILITIES', module.default);
  },

};
