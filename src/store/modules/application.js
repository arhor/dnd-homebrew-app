export default {
    namespaced: true,
    state: {
        name: 'D&D Homebrew App',
        dark: true,
        drawers: ['Default (no property)', 'Permanent', 'Temporary'],
        primaryDrawer: {
            model: null,
            type: 'default (no property)',
            clipped: false,
            floating: false,
            mini: false
        },
        footer: {
            inset: false
        }
    },
    mutations: {
        switchDark(state) {
            state.dark = !state.dark;
        },
        switchMiniMode(state) {
            state.primaryDrawer.mini = !state.primaryDrawer.mini;
        },
        switchFloatingMode(state) {
            state.primaryDrawer.floating = !state.primaryDrawer.floating;
        },
        switchClippedMode(state) {
            state.primaryDrawer.clipped = !state.primaryDrawer.clipped;
        },
        switchFooterInsetMode(state) {
            state.footer.inset = !state.footer.inset;
        }
    },
    actions: {
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
        }
    }
};
