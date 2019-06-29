<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/dnd_logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-flex>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to D&D Homebrew App!
        </h1>
      </v-flex>
      <v-flex xs12>
        <v-btn
          v-for="(button, i) in buttons"
          :key="`button-${i}`"
          :to="button.path"
        >
          {{ button.name }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MainMenu',
  data() {
    return {
      buttons: [
        { name: 'New Game', path: '/' },
        { name: 'Load Game', path: '/' },
        { name: 'Monsters', path: '/monsters' },
      ],
    };
  },
};
</script>
