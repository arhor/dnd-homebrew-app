<template>
  <v-chip :color="color" text-color="white">
    <v-avatar :class="`${color} darken-1`">
      <v-img
        :src="pathTo(icon)"
        class="my-3"
        height="23"
        width="23"
      />
    </v-avatar>
      {{ value }}
  </v-chip>
</template>

<script>
export default {
  name: 'Attribute',
  props: {
    value: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  methods: {
    pathTo(icon) {
      return require(`../../assets/images/icons/${icon}.svg`);
    },
  },
};
</script>
