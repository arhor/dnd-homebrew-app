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
      <v-layout row wrap>
        <v-flex class="xs12 text-xs-left">
          Senses: {{ monster.senses }}
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex class="xs12 text-xs-left">
          Languages: {{ monster.languages }}
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 text-xs-left>
          Challenge: {{ monster.challenge_rating }} (# XP)
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex
          v-for="(ab, i) in monster.special_abilities"
          :key="`special-ability${i}`"
          xs12
          text-xs-left>
          <strong>{{ ab.name }}</strong>: <span v-html="processLinebreaks(ab.desc)"></span>
        </v-flex>
      </v-layout>
      <action-list :actions="monster.actions" />
      <!-- place other content here -->
    </v-container>
  </v-card>
</template>

<script>
import { processLinebreaks } from '../../utils/StringUtils';
import AbilityList from '../ability/AbilityList.vue';
import ActionList from '../action/ActionList.vue';
import SkillList from '../skill/SkillList.vue';

export default {
  name: 'MonsterDetails',
  props: {
    monster: {
      type: Object,
      default: null,
    },
  },
  components: {
    AbilityList,
    ActionList,
    SkillList,
  },
  methods: {
    processLinebreaks,
  },
};
</script>
