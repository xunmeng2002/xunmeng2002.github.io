<template>
  <footer>
    <div class="footer-tagline">© {{ year }} {{ t.footer.name }} · {{ t.footer.tagline }}</div>
    <div class="footer-links">
      <a v-for="link in t.footer.links" :key="link.label" :href="link.url" target="_blank" rel="noopener">{{ link.label }}</a>
    </div>
  </footer>
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
    },
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 0.4rem;
}
.footer-links a {
  color: #2c7da0;
  text-decoration: none;
  font-weight: 500;
}
.footer-links a:hover {
  text-decoration: underline;
}
</style>
