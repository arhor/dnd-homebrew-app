import Vue from 'vue';
import Vuex from 'vuex';
import abilities from '@/store/modules/abilities';
import skills from '@/store/modules/skills';
import monsters from '@/modules/monsters/store';
import spells from '@/modules/spells/store';
import maps from '@/modules/maps/store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        abilities,
        maps,
        monsters,
        spells,
        skills
    }
});
