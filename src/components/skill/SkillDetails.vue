<template>
    <span v-if="value"
      class="ml-2">
      {{ skill.name }} {{ value >= 0 ? '+' : '-' }}{{ value }}
    </span>
</template>

<script>
export default {
  name: 'SkillDetails',
  props: {
    skill: Object,
    value: {
      type: Number,
      default: 0,
    },
  },
};
</script>
