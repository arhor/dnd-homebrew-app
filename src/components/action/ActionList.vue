<template>
  <v-layout row wrap>
    <v-flex xs12 text-xs-left>
      Actions
    </v-flex>
    <v-divider />
    <action-details
      v-for="(action, i) in actions"
      :key="`action-${i}`"
      :action="action"
    />
  </v-layout>
</template>

<script>
import ActionDetails from './ActionDetails.vue';

export default {
  name: 'ActionList',
  props: {
    actions: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ActionDetails,
  },
};
</script>
