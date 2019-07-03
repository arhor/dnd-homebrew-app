<template>
  <v-layout row wrap>
    <v-flex
      v-for="(ability, i) in abilities"
      :key="`ability-${i}`"
      xs2
    >
      <ability-details
        :ability="ability"
        :value="valueOf(ability)"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';
import AbilityDetails from './AbilityDetails.vue';

export default {
  name: 'AbilityList',
  props: {
    creature: {
      type: Object,
      default: null,
    },
  },
  components: {
    AbilityDetails,
  },
  computed: mapState({
    abilities: state => state.abilities.all,
  }),
  methods: {
    valueOf(ability) {
      return this.creature[ability.full_name.toLowerCase()];
    },
  },
};
</script>
