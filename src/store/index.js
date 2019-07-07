import Vue from 'vue';
import Vuex from 'vuex';
import abilities from './modules/abilities';
import application from './modules/application';
import battle from './modules/battle';
import monsters from './modules/monsters';
import game from './modules/game';
import skills from './modules/skills';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    abilities,
    application,
    battle,
    monsters,
    game,
    skills,
  },
});
