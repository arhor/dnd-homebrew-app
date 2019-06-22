<template>
  <v-card>
    <v-card-title>
      Monsters
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon=search
        label="Search"
        single-line
        hide-details>
      </v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="monsters"
      :search="search"
      class="evelation-1">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.size }}</td>
        <td>{{ props.item.type }}</td>
        <td>{{ props.item.challenge_rating }}</td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Nothing found for '{{ search }}'.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import store from '../data/store.js';
import { async } from 'q';

export default {
  name: 'MonsterList',
  data() {
    return {
      search: '',
      monsters: [],
      errors: [],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Size', value: 'size' },
        { text: 'Type', value: 'type' },
        { text: 'CR', value: 'challenge_rating' },
      ]
    };
  },
  async mounted() {
    try {
      const response = await store.findMonsters();
      this.monsters = response.data;
    } catch(error) {
      this.errors.push(error);
    }
  },
}
</script>
