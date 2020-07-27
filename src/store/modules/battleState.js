// import axios from 'axios';

const state = {
    initiative: [],
    monsters: [],
    players: []
};

const getters = {};

const actions = {};

const mutations = {
    bulkSetMonsters(state, monsters) {
        state.monsters = monsters;
    },
    bulkSetPlayers(state, players) {
        state.players = players;
    },
    addToInitiative(state, creature) {
        state.initiative.push(creature);
    },
    loadEncounter() {
        return true;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
