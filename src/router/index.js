import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeZh from '../views/HomeZh.vue'
import HomeEn from '../views/HomeEn.vue'
import ResumeDocument from '../components/ResumeDocument.vue'
import generalZh from '../data/resumes/general.zh.js'
import generalEn from '../data/resumes/general.en.js'
import semiconductorZh from '../data/resumes/semiconductor.zh.js'

const routes = [
  { path: '/zh', name: 'HomeZh', component: HomeZh },
  { path: '/en', name: 'HomeEn', component: HomeEn },
  { path: '/resume-zh', name: 'ResumeZh', component: ResumeDocument, props: { doc: generalZh } },
  { path: '/resume-en', name: 'ResumeEn', component: ResumeDocument, props: { doc: generalEn } },
  { path: '/resume-zh-semi', name: 'ResumeZhSemi', component: ResumeDocument, props: { doc: semiconductorZh } },
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
