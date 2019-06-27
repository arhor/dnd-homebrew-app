<template>
  <v-layout row wrap>
    <v-flex v-for="ability in abilities" :key="`ability-${ability.index}`" xs2>
      <AbilityDetails :ability="ability" :value="valueOf(ability)"/>
    </v-flex>
  </v-layout>
</template>

<script>
import AbilityDetails from './AbilityDetails.vue';

export default {
  name: 'AbilityList',
  props: ['abilities', 'monster'],
  components: {
    AbilityDetails,
  },
  methods: {
    valueOf(ability) {         
      return this.monster[ability.full_name.toLowerCase()];
    }
  }
};
</script>

<style>

</style>
