import Vue from 'vue';
import Vuex from 'vuex';
import abilities from './modules/abilities';
import application from './modules/application';
import monsters from './modules/monsters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    abilities,
    application,
    monsters,
  },
});
