<template>
  <v-carousel>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../../public/pics/maps/Barovia/baroviaregion.png")
        },
        {
          src: require("../../public/pics/maps/Barovia/krezk.png")
        },
        {
          src: require("../../public/pics/maps/Barovia/vallaki.png")
        },
        {
          src: require("../../public/pics/maps/Barovia/villageofbarovia.png")
        }
      ]
    };
  }
};
</script>