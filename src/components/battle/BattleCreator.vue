<template>
  <v-container fluid>
    <p>{{ selected }}</p>
    <v-checkbox
      v-for="(player, i) in players"
      v-model="selected"
      :key="`player-${i}`"
      :label="player.name"
      :value="player"
    >
    </v-checkbox>
    <v-btn
      :to="{
        path: `/battlescene/${JSON.stringify({ players: selected, monsters: [] })}`,
      }"
      color="primary"
    >
      Start battle!
    </v-btn>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BattleCreator',
  computed: {
    ...mapState('game', [
      'players',
    ]),
  },
  data() {
    return {
      selected: [],
    };
  },
};
</script>
