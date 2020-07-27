<template>
    <v-flex v-if="action" xs12 text-xs-left>
        <strong>{{ action.name }}</strong
        >: {{ action.desc }}
    </v-flex>
</template>

<script>
export default {
    name: 'ActionDetails',
    props: {
        action: {
            type: Object,
            default: null
        }
    }
};
</script>
