<template>
  <v-card v-if="monster" xs10 md10>
    <v-card-title primary-title>
      <v-layout row wrap>
        <v-flex headline xs12>
          {{ monster.name }}
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-container grid-list-md>
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
      <generic-list title="Damage vulnerabilities" :items="monster.damage_vulnerabilities" />
      <generic-list title="Damage resistances" :items="monster.damage_resistances" />
      <generic-list title="Damage immunities" :items="monster.damage_immunities" />
      <generic-list title="Condition immunities" :items="monster.condition_immunities" />
      <skill-list :creature="monster"/>
      <generic-list title="Senses" :items="[monster.senses]" />
      <generic-list title="Languages" :items="[monster.languages]" />
      <v-layout row wrap>
        <v-flex xs12 text-xs-left>
          <strong>Challenge:</strong>
          {{ monster.challenge_rating }} (# XP)
        </v-flex>
      </v-layout>
      <special-ability-list :special-abilities="monster.special_abilities" />
      <v-flex xs12 text-xs-left>
        Actions
      </v-flex>
      <v-divider />
      <action-list :actions="monster.actions" />
      <!-- place other content here -->
    </v-container>
  </v-card>
</template>

<script>
import AbilityList from '../ability/AbilityList.vue';
import ActionList from '../action/ActionList.vue';
import GenericList from '../generic/GenericList.vue';
import SkillList from '../skill/SkillList.vue';
import SpecialAbilityList from '../ability/special/SpecialAbilityList.vue';

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
    GenericList,
    SkillList,
    SpecialAbilityList,
  },
};
</script>
