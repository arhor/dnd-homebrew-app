<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs4>
        <v-checkbox
          v-for="(player, i) in players"
          v-model="selected"
          :key="`player-${i}`"
          :label="player.name"
          :value="player"
        >
        </v-checkbox>
      </v-flex>
      <v-flex xs4>
        <monster-picker @mob-selected="logIt" />
      </v-flex>
      <v-flex xs12 text-xs-center>
        <v-btn
          :to="{path: `/battle/scene/${JSON.stringify({ players: selected, monsters: monstersSelected })}`,}"
          color="primary"
        >
          Start battle!
        </v-btn>
      </v-flex>
    </v-layout>
    
    
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import MonsterPicker from '~/components/battle/MonsterPicker.vue';

export default {
  name: 'BattleCreator',
  components: {
    MonsterPicker,
  },
  computed: {
    ...mapState('game', [
      'players',
    ]),
  },
  methods: {
    logIt(event) {
      const targetName = event.name;
      const included = this.monstersSelected.map(mob => mob.info.name).includes(targetName);
      if (included) {
        this.monstersSelected.forEach((mob) => {
          if (mob.info.name === targetName) {
            mob.number += 1;
          }
        });
      } else {
        this.monstersSelected.push({
          info: event,
          number: 1,
        });
      }
    },
  },
  data() {
    return {
      selected: [],
      monstersSelected: [],
    };
  },
};
</script>
