import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
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

// GitHub Pages 不支持 SPA 服务端回退，使用 hash 路由
// Vercel 有 rewrite 规则，使用 history 路由（干净 URL）
const useHashHistory = import.meta.env.VITE_DEPLOY_TARGET === 'gh-pages'

const router = createRouter({
  history: useHashHistory ? createWebHashHistory() : createWebHistory(),
  routes
})

export default router
