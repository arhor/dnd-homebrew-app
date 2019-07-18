export default {

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
  },

};
