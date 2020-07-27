<template>
    <v-container>
        <v-layout>
            <v-flex sm6 offset-sm3>
                <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
                    <v-layout row wrap>
                        <v-flex v-for="(component, i) in testComponents" :key="i" xs3>
                            <v-btn :to="`/${component.name}`" :color="component.color">
                                {{ component.name }}
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        size: 'xs',
        testComponents: [{ name: 'monsters', color: 'success' }]
    })
};
</script>
