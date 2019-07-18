import getters from './getters';
import actions from './actions';
import mutations from './mutations';

import baroviaregion from '~/assets/images/maps/barovia/baroviaregion.png';
import krezk from '~/assets/images/maps/barovia/krezk.png';
import vallaki from '~/assets/images/maps/barovia/vallaki.png';
import villageofbarovia from '~/assets/images/maps/barovia/villageofbarovia.png';

const state = {
  barovia: {
    links: [
      baroviaregion,
      krezk,
      vallaki,
      villageofbarovia,
    ],
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
