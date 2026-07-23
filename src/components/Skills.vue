<template>
  <div class="section" id="skills">
    <div class="section-title">{{ t.skills.title }}</div>
    <div class="skills-wrapper">
      <div class="skill-category" v-for="cat in t.skills.categories" :key="cat.name">
        <h3>{{ cat.name }}</h3>
        <div class="skill-tags">
          <span class="skill-tag" v-for="tag in cat.tags" :key="tag">{{ tag }}</span>
        </div>
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
/* 样式已在全局 global.css 中定义 */
</style>