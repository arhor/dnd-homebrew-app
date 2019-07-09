<template>
  <v-container>
    <v-layout row wrap>
      <v-flex v-for="(unit, i) in queue" :key="`part-${i}`" xs2  px-1>
        <battle-participant :unit="unit" />
      </v-flex>
    </v-layout>
    <v-btn @click="prevTurn">Prev Turn</v-btn>
    <v-btn @click="nextTurn">Next Turn</v-btn>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BattleParticipant from '~/components/battle/BattleParticipant.vue';

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
  components: {
    BattleParticipant,
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
    const self = this;
    this.$store.dispatch('battle/initialize', {
      monsters: self.monsters,
      players: self.players,
    });
  },
  destroyed() {
    this.$store.dispatch('battle/destroy');
  },
};
</script>
