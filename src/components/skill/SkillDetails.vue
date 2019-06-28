<template>
  <span v-if="value"
    class="ml-2">
    {{ skill.name }} {{ value }}
  </span>
</template>

<script>
export default {
  name: 'SkillDetails',
  props: ['skill', 'value'],
}
</script>
