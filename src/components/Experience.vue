<template>
  <div class="section" id="experience">
    <div class="section-title">{{ t.experience.title }}</div>
    <div class="timeline">
      <div class="timeline-item" v-for="item in t.experience.items" :key="item.title">
        <div class="timeline-header">
          <span class="timeline-title">{{ item.title }}</span>
          <span class="timeline-date">{{ item.date }}</span>
        </div>
        <div class="timeline-desc">{{ item.desc }}</div>
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
/* 全局样式已包含 */
</style>