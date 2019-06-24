<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item"
    />
  </v-carousel>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      computed: mapState({
        items: state => state.maps.Barovia,
      }),
      mounted() {
        this.$store.dispatch('maps/loadMaps');
      },
    };
  },
};
</script>
