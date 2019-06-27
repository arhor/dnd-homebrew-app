<template>
  <span v-if="skill" class="ml-2">
    {{ skill.name }} {{ skill.value }}
  </span>
</template>

<script>
export default {
  name: 'SkillDetails',
  props: ['skill'],
}
</script>
