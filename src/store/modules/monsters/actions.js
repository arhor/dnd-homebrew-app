export default {

  async load({ commit }) {
    const module = await import('~/assets/data/5e-SRD-Monsters.json');
    commit('SET_MONSTERS', module.default);
  },

};
