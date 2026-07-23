<template>
  <footer>
    <i class="far fa-copyright"></i> {{ t.footer }}
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
    }
  }
}
</script>

<style scoped>
/* 全局样式已包含 */
</style>