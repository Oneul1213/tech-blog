import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import Article from '@/components/Article.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
      meta: {
        title: "Oneul dev"
      }
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
      meta: {
        title: "article"
      }
    }
  ]
})

export default router
