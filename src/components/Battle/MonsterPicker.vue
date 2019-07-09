<template>
  <div>
    <div v-if="notEmpty">
      <v-layout
        v-for="(mob, i) in searchResult"
        :key="`mob-${i}`"
        row
        wrap
      >
        <v-flex xs12>{{ mob.name }}</v-flex>
      </v-layout>
    </div>
    <div>
      <v-text-field
        v-model="name"
        label="Name"
      ></v-text-field>
      <v-btn @click="search">Search</v-btn>
      <v-btn @click="clear">Clear</v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { notEmptyArray } from '../../utils/ArrayUtils';

export default {
  name: 'MonsterPicker',
  computed: {
    ...mapGetters('monsters', [
      'getMonstersByName',
    ]),
    notEmpty() {
      return notEmptyArray(this.searchResult);
    },
  },
  methods: {
    search() {
      this.searchResult = this.getMonstersByName(this.name);
    },
    clear() {
      this.name = '';
      this.searchResult = [];
    }
  },
  data() {
    return {
      name: '',
      searchResult: [],
    };
  },
};
</script>
