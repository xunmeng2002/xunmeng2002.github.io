<template>
  <div class="section" id="about">
    <div class="section-title">{{ t.about.title }}</div>
    <div class="about-text">
      <p v-for="(para, idx) in t.about.content" :key="idx" v-html="para"></p>
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
/* 样式已在全局 global.css 中定义，此处不需要重复 */
</style>