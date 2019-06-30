<template>
  <v-layout row wrap>
    <v-flex xs12 text-xs-left>
      Skills:
      <skill-details v-for="(skill, i) in skills"
        :key="`skill-${i}`"
        :skill="skill"
        :value="valueOf(skill)">
      </skill-details>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';
import SkillDetails from './SkillDetails.vue';

export default {
  name: 'SkillList',
  props: ['creature'],
  components: {
    SkillDetails,
  },
  computed: mapState({
    skills: state => state.skills.all,
  }),
  methods: {
    valueOf(skill) {
      const name = skill.name.replace(/ /g, '_').toLowerCase();
      return this.creature[name];
    },
  },
};
</script>

<style>

</style>
