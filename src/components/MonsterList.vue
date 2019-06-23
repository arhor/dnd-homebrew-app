<template>
  <v-card>
    <v-card-title>
      Monsters
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="monsters"
      :search="search"
      :loading="loading"
      class="evelation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.size }}</td>
        <td>{{ props.item.type }}</td>
        <td>{{ props.item.challenge_rating }}</td>
      </template>
      <template v-slot:no-results>
        <v-alert
          :value="true"
          color="error"
          icon="warning"
        >
          Nothing found for '{{ search }}'.
        </v-alert>
      </template>
    </v-data-table>
    <!-- <v-dialog v-model="dialog" max-width="300">
      <MonsterDetails :monster="monster" />
    </v-dialog> -->
  </v-card>
</template>

<script>
import store from '../store.js';

export default {
  name: 'MonsterList',
  data() {
    return {
      search: '',
      dialog: false,
      loading: 'info',
      monsters: [],
      errors: [],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Size', value: 'size' },
        { text: 'Type', value: 'type' },
        { text: 'CR', value: 'challenge_rating' },
      ],
    };
  },
  methods: {
    showDetails(concreteMonster) {
      this.monster = concreteMonster;
      this.dialog = true;
    },
  },
  async mounted() {
    await setTimeout(() => {
      this.monsters = store.findMonsters();
      this.loading = false;
    }, 200);
  },
};
</script>
