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
        <div class="project-links">
          <a
            v-for="link in proj.links"
            :key="link"
            :href="link"
            target="_blank"
            rel="noopener"
            class="project-link"
          >{{ repositoryPlatformName(link) }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import zh from '../locales/zh.js'
import en from '../locales/en.js'
import { repositoryPlatformName } from '../utils/repoLink.js'

export default {
  props: {
    lang: String
  },
  computed: {
    t() {
      return this.lang === 'zh' ? zh : en
    }
  },
  methods: {
    repositoryPlatformName
  }
}
</script>

<style scoped>
/* 样式全局 */
</style>