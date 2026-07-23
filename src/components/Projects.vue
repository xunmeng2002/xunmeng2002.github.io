<template>
  <div class="section" id="projects">
    <div class="section-title">{{ t.projects.title }}</div>
    <div class="projects-grid">
      <div class="project-card" v-for="proj in t.projects.list" :key="proj.title">
        <div class="project-icon">{{ proj.icon }}</div>
        <div class="project-title">{{ proj.title }}</div>
        <div class="project-desc">{{ proj.desc }}</div>
        <ul class="project-features">
          <li v-for="feat in proj.features" :key="feat">{{ feat }}</li>
        </ul>
        <a :href="proj.link" target="_blank" class="project-link">GitHub →</a>
      </div>
    </div>
  </div>
</template>

<script>
import zh from '../locales/zh.js'
import en from '../locales/en.js'

export default {
  props: {
    lang: String
  },
  computed: {
    t() {
      return this.lang === 'zh' ? zh : en
    }
  }
}
</script>

<style scoped>
/* 样式全局 */
</style>