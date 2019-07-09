<template>
  <battle-scene-details
    :players="players"
    :monsters="monsters"
  />
</template>

<script>
import BattleSceneDetails from '../../components/battle/BattleSceneDetails.vue';

export default {
  name: 'BattleScene',
  props: {
    data: {
      type: String,
      required: true,
    },
  },
  components: {
    BattleSceneDetails,
  },
  computed: {
    players() {
      return JSON.parse(this.data).players;
    },
    monsters() {
      return JSON.parse(this.data).monsters;
    },
  },
};
</script>
