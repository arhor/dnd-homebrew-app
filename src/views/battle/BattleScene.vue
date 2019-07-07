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
      this.parsedData.players;
    },
    monsters() {
      this.parsedData.monsters;
    },
  },
  data() {
    return {
      parsedData: null,
    };
  },
  mounted() {
    this.parsedData = JSON.parse(this.data);
  },
};
</script>
