import axios from 'axios';
import firstMap from '../../../public/pics/maps/Barovia/baroviaregion.png';

const state = {
  Barovia: [firstMap],
};

const links = [
  {
    src: '../../../public/pics/maps/Barovia/baroviaregion.png',
  },
  {
    src: '../../../public/pics/maps/Barovia/krezk.png',
  },
  {
    src: '../../../public/pics/maps/Barovia/vallaki.png',
  },
  {
    src: '../../../public/pics/maps/Barovia/villageofbarovia.png',
  },
];

const getters = {};

const actions = {
  loadMaps({ commit }) {
    const arrayOfMaps = [];
    links.forEach(async (link) => {
      arrayOfMaps.push(await axios.get(link.src));
      console.log(arrayOfMaps);
    });

    commit('SET_MAPS', arrayOfMaps);
  },
};

const mutations = {
  SET_MAPS(state, arrayOfMaps) {
    state.Barovia = arrayOfMaps;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
