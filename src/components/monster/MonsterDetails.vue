<template>
  <v-card v-if="monster" xs10 md10>
    <v-card-title primary-title>
      <div class="headline text-md-center">{{ monster.name }}</div>
    </v-card-title>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 text-xs-left>
          {{ monster.size }} {{ monster.type }}, {{ monster.alignment }}
        </v-flex>
      </v-layout>
      <v-divider/>
      <v-layout row wrap>
        <v-flex xs12 text-xs-left>
          Armor class: {{ monster.armor_class }}
        </v-flex>
        <v-flex xs12 text-xs-left>
          Hit points: {{ monster.hit_points }} ({{ monster.hit_dice }})
        </v-flex>
        <v-flex xs12 text-xs-left>
          Speed: {{ monster.speed }}
        </v-flex>
      </v-layout>
      <v-divider/>
      <AbilityList :abilities="abilities" :monster="monster"/>
      <v-divider/>
      <!-- place other content here -->
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import AbilityList from '../ability/AbilityList.vue';

export default {
  name: 'MonsterDetails',
  props: ['monster'],
  components: {
    AbilityList,
  },
  computed: mapState({
    abilities: state => state.abilities.all,
  }),
  data() {
    return {
      secondary: [
        { abbv: 'HP', name: 'hit_points' },
        { abbv: 'CR', name: 'challenge_rating' },
      ]
    };
  },
};
</script>
