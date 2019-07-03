<template>
  <v-layout v-if="notEmpty" row wrap>
    <v-flex
      v-for="(ability, i) in specialAbilities"
      :key="`special-ability${i}`"
      xs12
      text-xs-left
    >
      <strong>{{ ability.name }}</strong>:
      <span v-html="processLinebreaks(ability.desc)"></span>
    </v-flex>
  </v-layout>
</template>

<script>
import { processLinebreaks } from '../../../utils/StringUtils';

export default {
  name: 'SpecialAbilityList',
  props: {
    specialAbilities: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    notEmpty() {
      return this.specialAbilities !== null
          && this.specialAbilities !== undefined
          && this.specialAbilities.length > 0;
    },
  },
  methods: {
    processLinebreaks,
  },
};
</script>
