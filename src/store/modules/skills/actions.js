export default {

  async load({ commit }) {
    const module = await import('~/assets/data/5e-SRD-Skills.json');
    commit('SET_SKILLS', module.default);
  },

};
