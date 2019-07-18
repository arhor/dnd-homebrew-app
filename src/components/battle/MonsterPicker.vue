<template>
  <v-container>
    <v-layout row>
      <v-text-field
        v-model="name"
        label="Name"
      ></v-text-field>
      <v-btn @click="search">Search</v-btn>
      <v-btn @click="clear">Clear</v-btn>
    </v-layout>
    <v-divider />
    <v-layout column>
      <v-list>
        <v-list-tile v-for="(mob, i) in searchResult" :key="`mob-${i}`" @click="">
          <v-list-tile-content>
            {{ mob.name }}
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn @click="$emit('mob-selected', mob)" icon ripple>
              <v-icon color="teal">
                +
              </v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { notEmptyArray } from '~/utils/ArrayUtils';

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
    },
  },
  data() {
    return {
      name: '',
      searchResult: [],
    };
  },
};
</script>
