<template>
    <v-layout align-center justify-center fill-height>
        <v-flex xs12>
            <v-card>
                <v-card-title>
                    Spells
                    <v-spacer />
                    <v-text-field
                        v-model="search"
                        append-icon="search"
                        label="Search"
                        single-line
                        hide-details
                    />
                </v-card-title>
                <v-data-table
                    class="evelation-1"
                    :headers="headers"
                    :items="allSpells"
                    :search="search"
                    @click:row="showDetails"
                >
                    <template v-slot:items="props" @click.stop="showDetails(props.item)">
                        <td>{{ props.item.level }}</td>
                        <td>{{ props.item.name }}</td>
                        <td>{{ props.item.school.name }}</td>
                    </template>
                    <template v-slot:no-results>
                        <v-alert :value="true" color="error" icon="warning">
                            Nothing found for '{{ search }}'.
                        </v-alert>
                    </template>
                </v-data-table>
                <!-- <v-dialog v-model="dialog" max-width="800">
                    <monster-details :monster="monster" />
                </v-dialog> -->
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'SpellList',
    data: () => ({
        search: '',
        dialog: false,
        spell: null,
        errors: [],
        headers: [
            { text: 'Level', value: 'level' },
            { text: 'Name', value: 'name' },
            { text: 'School', value: 'school.name' }
        ]
    }),
    methods: {
        showDetails(concreteSpell) {
            this.spell = concreteSpell;
            this.dialog = true;
        }
    },
    computed: {
        ...mapState('spells', ['allSpells'])
    }
};
</script>
