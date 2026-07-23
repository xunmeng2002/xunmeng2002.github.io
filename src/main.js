import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'

// 处理 GitHub Pages SPA 回退重定向（来自 404.html 的 sessionStorage 标记）
const redirectPath = sessionStorage.getItem('gh-pages-redirect')
if (redirectPath) {
  sessionStorage.removeItem('gh-pages-redirect')
  window.history.replaceState(null, '', redirectPath)
}

createApp(App).use(router).mount('#app')