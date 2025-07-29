import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/invitation-letter/:inviteName?',
      component: () => import('@/views/InvitationLetter/index.vue'),
    },
  ],
})

export default router
