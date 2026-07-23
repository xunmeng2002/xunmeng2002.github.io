<template>
  <div class="section" id="strength">
    <div class="section-title">{{ t.strengths.title }}</div>
    <div class="strength-grid">
      <div class="strength-card" v-for="card in t.strengths.cards" :key="card.title">
        <i :class="card.icon"></i>
        <h4>{{ card.title }}</h4>
        <p>{{ card.desc }}</p>
      </div>
    </div>
    <div style="background: #eaf4f9; border-radius: 28px; padding: 1.5rem; text-align: center; margin-top: 2rem;">
      <i class="fas fa-quote-left" style="color:#2c7da0; opacity:0.6;"></i>
      <p style="font-size:0.9rem; margin:0.5rem 0;">{{ t.quote }}</p>
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