<template>
    <v-layout align-center justify-center fill-height>
      <v-flex xs12>
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
      class="evelation-1"
      :headers="headers"
      :items="monsters"
      :search="search"
    >
      <template v-slot:items="props">
        <td @click="showDetails(props.item)">
          {{ props.item.name }}
        </td>
        <td @click="showDetails(props.item)">
          {{ props.item.size }}
        </td>
        <td @click="showDetails(props.item)">
          {{ props.item.type }}
        </td>
        <td @click="showDetails(props.item)">
          {{ props.item.challenge_rating }}
        </td>
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
    <v-dialog
      v-model="dialog"
      max-width="800"
    >
      <monster-details :monster="monster" />
    </v-dialog>
  </v-card>
      </v-flex>
    </v-layout>
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
