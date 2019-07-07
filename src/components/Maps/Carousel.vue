<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      contain="true">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Carousel',
  computed: mapState({
    item: state => state.maps.Barovia,
  }),
};
</script>
