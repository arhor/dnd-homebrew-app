import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about'),
    },
    {
      path: '/dev',
      name: 'dev',
      component: () => import('./views/Dev.vue'),
    },
    {
      path: '/monsters',
      name: 'monsters',
      component: () => import('./views/Monsters.vue'),
    },
    {
      path: '/maps',
      name: 'maps',
      component: () => import('./views/Maps.vue'),
    },
    {
      path: '/encounter',
      name: 'encounter',
      component: () => import('./views/Encounter.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settings.vue'),
    },
  ],
});
