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
      <ability-list :creature="monster"/>
      <v-divider/>
      <skill-list :creature="monster"/>
      <v-divider/>
      <!-- place other content here -->
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import AbilityList from '../ability/AbilityList.vue';
import SkillList from '../skill/SkillList.vue';

export default {
  name: 'MonsterDetails',
  props: ['monster'],
  components: {
    AbilityList,
    SkillList,
  },
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
