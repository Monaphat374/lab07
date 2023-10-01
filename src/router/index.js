import { createRouter, createWebHistory } from 'vue-router'
import HomeCard from '../views/HomeCard.vue'
import Cardout from '../views/Cardout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeCard
    },
    {
      path: '/:cardId',
      name: 'Cardout',
      component: Cardout
    },

  ],
});

export default router
