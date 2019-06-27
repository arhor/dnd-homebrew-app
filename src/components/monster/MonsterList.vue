<template>
  <v-card>
    <v-card-title>
      Monsters
      <v-spacer/>
      <v-text-field v-model="search"
        append-icon="android"
        label="Search"
        single-line
        hide-details>
      </v-text-field>
    </v-card-title>
    <v-data-table class="evelation-1"
      :headers="headers"
      :items="monsters"
      :search="search">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.size }}</td>
        <td>{{ props.item.type }}</td>
        <td>{{ props.item.challenge_rating }}</td>
        <td><v-btn @click="showDetails(props.item)"></v-btn></td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true"
          color="error"
          icon="warning">
          Nothing found for '{{ search }}'.
        </v-alert>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="800">
      <MonsterDetails :monster="monster" />
    </v-dialog>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import MonsterDetails from './MonsterDetails.vue';

export default {
  name: 'MonsterList',
  components: {
    MonsterDetails,
  },
  data() {
    return {
      search: '',
      dialog: false,
      monster: null,
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
  computed: mapState({
    monsters: state => state.monsters.all,
  }),
};
</script>
