<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">{{ t.nav.logo }}</div>
      <div class="nav-links">
        <a href="#about">{{ t.nav.about }}</a>
        <a href="#skills">{{ t.nav.skills }}</a>
        <a href="#projects">{{ t.nav.projects }}</a>
        <a href="#experience">{{ t.nav.experience }}</a>
        <a href="#strength">{{ t.nav.strengths }}</a>
        <a :href="langLink" class="lang-link">{{ t.nav.langSwitch }}</a>
        <a :href="resumeLink" class="lang-link">{{ t.nav.resume }}</a>
      </div>
    </div>
  </nav>
</template>

<script>
import zh from '../locales/zh.js'
import en from '../locales/en.js'

export default {
  props: {
    lang: {
      type: String,
      required: true,
      validator: v => ['zh', 'en'].includes(v)
    }
  },
  computed: {
    t() {
      return this.lang === 'zh' ? zh : en
    },
    langLink() {
      return this.lang === 'zh' ? '/en' : '/zh'
    },
    resumeLink() {
      return this.lang === 'zh' ? '/resume-zh' : '/resume-en'
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  z-index: 1000;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.logo {
  font-weight: 700;
  font-size: 1.3rem;
  background: linear-gradient(135deg, #0f3b4f, #2c7da0);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
}
.nav-links a {
  text-decoration: none;
  color: #334155;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-links a:hover { color: #2c7da0; }
.lang-link {
  background: #eef2fa;
  padding: 0.2rem 0.8rem;
  border-radius: 30px;
  font-size: 0.85rem;
}
@media (max-width: 750px) {
  .navbar { padding: 0.8rem 1rem; }
  .nav-links { gap: 1rem; }
}
</style>