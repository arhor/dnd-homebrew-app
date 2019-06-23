<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">{{ app_name }}</span>
      </v-toolbar-title>
      <v-spacer/>
      <v-btn to="/" flat>Home</v-btn>
      <v-btn to="/about" flat>About</v-btn>
      <v-btn to="/dev" flat>Dev</v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import store from './store.js';

export default {
  name: 'App',
  computed: {
    app_name: () => store.appData.name,
  },
};
</script>
