<template>
  <v-card>
    <v-card-title text-xs-center>
      {{ unit.name }}
    </v-card-title>
    <v-card-text>
      <v-layout column>
        <attribute
          :value="unit.hit_points"
          icon="health"
          color="red"
        />
        <attribute
          :value="unit.armor_class"
          icon="shield"
          color="gray"
        />
        <attribute
          :value="unit.initiative"
          icon="speed"
          color="blue"
        />
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import Attribute from './Attribute.vue';

export default {
  name: 'BattleParticipant',
  props: {
    unit: {
      type: Object,
      required: true,
    },
  },
  components: {
    Attribute,
  },
};
</script>
