import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

export const router = new Router({
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
    },
    {
      path: '/voting',
      component: () => import('@/views/Voting.vue')
    },
    {
      path: '/final',
      component: () => import('@/views/Final.vue')
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth) && !Auth.loggedIn) {
//     next({ path: '/login', query: { redirect: to.fullPath } });
//   } else {
//     next();
//   }
// });
