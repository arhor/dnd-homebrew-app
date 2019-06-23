<template>
  <v-card>
    <v-card-title>{{ monster.name }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ['monster'],
}
</script>
