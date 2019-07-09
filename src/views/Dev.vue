<template>
  <v-container>
    <v-layout>
      <v-flex sm6 offset-sm3>
        <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
          <v-layout row wrap>
            <v-btn
              v-for="(component, i) in testComponents"
              :key="i"
              :to="`/${component.name}`"
              :color="component.color"
            >
              {{ component.name }}
            </v-btn>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      size: 'xs',
      testComponents: [
        { name: 'monsters', color: 'success' },
        { name: 'battle/creation', color: 'success' },
        { name: 'monsterpicker', color: 'success' },
      ],
    };
  },
};
</script>
