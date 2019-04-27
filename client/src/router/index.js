import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/lobby',
      component: () => import('@/views/Lobby.vue')
    },
    {
      path: '/game',
      component: () => import('@/views/Game.vue')
    }
  ]
});
