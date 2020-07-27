<template>
    <v-app :dark="dark">
        <v-navigation-drawer
            v-model="primaryDrawer.model"
            :permanent="primaryDrawer.type === 'permanent'"
            :temporary="primaryDrawer.type === 'temporary'"
            :clipped="primaryDrawer.clipped"
            :floating="primaryDrawer.floating"
            :mini-variant="primaryDrawer.mini"
            absolute
            overflow
            app
        />
        <v-app-bar :clipped-left="primaryDrawer.clipped" dark app>
            <v-app-bar-nav-icon @click.stop="primaryDrawer.model = !primaryDrawer.model" />

            <v-toolbar-title v-if="primaryDrawer.type !== 'permanent'">
                <v-btn text to="/">
                    {{ app_name }}
                </v-btn>
            </v-toolbar-title>

            <v-spacer />

            <v-btn to="/" text>Home</v-btn>
            <v-btn to="/about" text>About</v-btn>
            <v-btn to="/dev" text>Dev</v-btn>
            <v-btn to="/maps" text>Maps</v-btn>
            <v-btn to="/encounter" text>Encounter</v-btn>
            <v-btn to="/settings" text>Settings</v-btn>
        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>
        <v-footer :inset="footer.inset" app>
            <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'App',
    computed: mapState({
        app_name: (state) => state.application.name,
        dark: (state) => state.application.dark,
        drawers: (state) => state.application.drawers,
        primaryDrawer: (state) => state.application.primaryDrawer,
        footer: (state) => state.application.footer
    }),
    mounted() {
        this.$store.dispatch('abilities/load');
        this.$store.dispatch('monsters/load');
        this.$store.dispatch('skills/load');
    }
};
</script>
