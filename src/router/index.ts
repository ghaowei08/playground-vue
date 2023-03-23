import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/input',
      name: 'Input',
      component: () => import('@cc/views/InputView.vue')
    },
    {
      path: '/watch',
      name: 'Watch',
      component: () => import('@cc/views/WatchersView.vue')
    }
  ]
})

export default router
