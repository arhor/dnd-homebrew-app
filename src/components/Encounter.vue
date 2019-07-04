<template>
  <h1>It Works!</h1>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Encounter",
  data() {
    return {};
  },
  methods: {},
  computed: mapState({
    battleState: state => state.battleState
  }),
  mounted() {
    this.$store.dispatch("battleState/loadEncounter");
  }
};
</script>
