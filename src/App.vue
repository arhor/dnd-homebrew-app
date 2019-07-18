<template>
  <v-app :dark="dark">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      absolute
      overflow
      app
    />
    <v-toolbar :clipped-left="primaryDrawer.clipped" app>
      <v-toolbar-side-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">{{ name }}</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn to="/" flat>Home</v-btn>
      <v-btn to="/about" flat>About</v-btn>
      <v-btn to="/dev" flat>Dev</v-btn>
      <v-btn to="/maps" flat>Maps</v-btn>
      <v-btn to="/encounter" flat>Encounter</v-btn>
      <v-btn to="/settings" flat>Settings</v-btn>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer :inset="footer.inset" app>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState([
      'name',
      'dark',
      'drawers',
      'primaryDrawer',
      'footer',
    ]),
  },
  mounted() {
    this.$store.dispatch('abilities/load');
    this.$store.dispatch('monsters/load');
    this.$store.dispatch('skills/load');
    // STUB
    this.$store.dispatch('game/load');
  },
};
</script>
