<template>
  <v-container>
    <v-layout row>
      {{ players }}
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'BattleSceneDetails',
  props: {
    players: {
      type: Array,
      required: true,
    },
    monsters: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState('battle', [
      'queue',
    ]),
  },
  methods: {
    ...mapActions('battle', [
      'nextTurn',
      'prevTurn',
    ]),
  },
  mounted() {
    this.$store.dispatch('battle/initializeMonsters', this.monsters);
    this.$store.dispatch('battle/initializePlayers', this.players);
    this.$store.dispatch('battle/prepareBattleQueue');
    console.log(this.monsters);
    console.log(this.players);
  },
};
</script>
