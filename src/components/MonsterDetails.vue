<template>
  <v-card v-if="monster" xs10 md10>
    <v-card-title>{{ monster.name }}</v-card-title>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex v-for="(stat, i) in stats" :key="`stat-${i}`" xs1>
          <v-card color="primary">
            <v-card-title class="py-1" primary-title>
              <strong>
                {{ stat.abbv }}
              </strong>
            </v-card-title>
            <v-card-text class="py-1">
              {{ monster[stat.name] }} ({{ monster[stat.name] | calcBonus }})
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="(attr, i) in secondary" :key="`attr-${i}`" xs2>
          <v-card>
            <v-card-title class="py-1" primary-title>
              <strong>
                {{ attr.abbv }}
              </strong>
            </v-card-title>
            <v-card-text class="py-1">
              {{ monster[attr.name] }}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        { abbv: 'STR', name: 'strength' },
        { abbv: 'DEX', name: 'dexterity' },
        { abbv: 'CON', name: 'constitution' },
        { abbv: 'INT', name: 'intelligence' },
        { abbv: 'WIS', name: 'wisdom' },
        { abbv: 'CHA', name: 'charisma' },
      ],
      secondary: [
        { abbv: 'AC', name: 'armor_class' },
        { abbv: 'HP', name: 'hit_points' },
        { abbv: 'CR', name: 'challenge_rating' },
      ]
    };
  },
  filters: {
    calcBonus(stat) {
      const result = Math.floor((stat - 10) / 2);
      return (result >= 0 ? '+' : '').concat(result);
    }
  },
  props: ['monster'],
};
</script>

<style lang="scss" scoped>
.text-centered {
  text-align: center;
}
</style>

