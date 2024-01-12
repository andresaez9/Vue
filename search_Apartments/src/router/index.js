import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/viviendas',
      name: 'viviendas',
      component: () => import('../views/ViviendasView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    },
    {
      path: '/preguntas',
      name: 'preguntas',
      component: () => import('../views/PreguntasView.vue')
    }*/
  ]
})

export default router
