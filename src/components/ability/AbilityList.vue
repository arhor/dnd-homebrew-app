<template>
  <v-layout row wrap>
    <v-flex v-for="ability in abilities" :key="`ability-${ability.index}`" xs2>
      <AbilityDetails :ability="ability" :value="valueOf(ability)"/>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';
import AbilityDetails from './AbilityDetails.vue';

export default {
  name: 'AbilityList',
  props: ['creature'],
  components: {
    AbilityDetails,
  },
  computed: mapState({
    abilities: state => state.abilities.all,
  }),
  methods: {
    valueOf(ability) {         
      return this.creature[ability.full_name.toLowerCase()];
    }
  }
};
</script>

<style>

</style>
