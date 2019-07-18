<template>
  <v-carousel>
    <v-carousel-item
      v-for="(link, i) in barovia.links"
      :key="`link-${i}`"
      :src="link"
      contain>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Carousel',
  computed: {
    ...mapState('maps', [
      'barovia',
    ]),
  },
};
</script>
