import { createRouter, createWebHistory } from 'vue-router'
import HomeZh from '../views/HomeZh.vue'
import HomeEn from '../views/HomeEn.vue'
import ResumeZh from '../views/ResumeZh.vue'
import ResumeEn from '../views/ResumeEn.vue'

const routes = [
  { path: '/zh', name: 'HomeZh', component: HomeZh },
  { path: '/en', name: 'HomeEn', component: HomeEn },
  { path: '/resume-zh', name: 'ResumeZh', component: ResumeZh },
  { path: '/resume-en', name: 'ResumeEn', component: ResumeEn },
  { path: '/', redirect: '/zh' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router