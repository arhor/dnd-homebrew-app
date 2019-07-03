<template>
  <v-layout v-if="notEmpty" row wrap>
    <v-flex xs12 text-xs-left>
      <strong v-if="title">
        {{ title + ':' }}
      </strong>
      {{ commaSeparatedString }}
    </v-flex>
  </v-layout>
</template>

<script>
import { commaSeparate, notEmptyArray } from '../../utils/ArrayUtils';

export default {
  name: 'GenericList',
  props: {
    title: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    notEmpty() {
      return notEmptyArray(this.items);
    },
    commaSeparatedString() {
      return commaSeparate(this.items);
    },
  },
};
</script>
