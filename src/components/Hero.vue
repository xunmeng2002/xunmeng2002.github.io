<template>
  <div class="hero">
    <div class="hero-left">
      <div class="hero-badge">{{ t.hero.badge }}</div>
      <div class="hero-name">{{ t.hero.name }}</div>
      <div class="hero-title">{{ t.hero.title }}</div>
      <div class="hero-desc">{{ t.hero.desc }}</div>
      <div class="hero-stats">
        <div class="stat" v-for="stat in t.hero.stats" :key="stat.label">
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
    <div class="hero-right">
      <div class="avatar-circle">{{ t.hero.avatarChar }}</div>
      <div class="contact-info">
        <p v-for="item in t.hero.contacts" :key="item.icon">
          <i :class="item.icon"></i>
          <a v-if="item.link" :href="item.link" target="_blank">{{ item.text }}</a>
          <span v-else>{{ item.text }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import zh from '../locales/zh.js'
import en from '../locales/en.js'

export default {
  props: {
    lang: {
      type: String,
      required: true
    }
  },
  computed: {
    t() {
      return this.lang === 'zh' ? zh : en
    }
  }
}
</script>

<style scoped>
.hero {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
}
.hero-left { flex: 1; min-width: 260px; }
.hero-badge {
  background: #e6f0f5;
  color: #1e6f8c;
  padding: 0.3rem 1rem;
  border-radius: 30px;
  font-size: 0.8rem;
  display: inline-block;
  margin-bottom: 1rem;
}
.hero-name {
  font-size: 3.2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #0b2b3b, #2c7da0);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 0.5rem;
}
.hero-title {
  font-size: 1.2rem;
  color: #475569;
  margin-bottom: 1.2rem;
  border-left: 3px solid #2c7da0;
  padding-left: 1rem;
}
.hero-desc {
  color: #334155;
  margin-bottom: 1.5rem;
  max-width: 500px;
}
.hero-stats {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}
.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: #0f3b4f;
}
.stat-label {
  font-size: 0.75rem;
  color: #62748c;
}
.hero-right {
  flex: 0.8;
  min-width: 220px;
  background: linear-gradient(145deg, #eef2f8, #ffffff);
  border-radius: 32px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 15px 30px -12px rgba(0,0,0,0.1);
}
.avatar-circle {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #1a5d7a, #2c7da0);
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  font-weight: 700;
  color: white;
}
.contact-info {
  text-align: left;
  margin-top: 1rem;
}
.contact-info p {
  font-size: 0.85rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  word-break: break-word;
}
.contact-info i {
  width: 24px;
  color: #2c7da0;
}
.contact-info a {
  color: #2c7da0;
  text-decoration: none;
}
.contact-info a:hover {
  text-decoration: underline;
}
@media (max-width: 750px) {
  .hero-name { font-size: 2.4rem; }
}
</style>