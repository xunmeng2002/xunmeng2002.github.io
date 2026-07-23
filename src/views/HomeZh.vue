<template>
  <div>
    <Navbar lang="zh" />
    <div class="container">
      <Hero lang="zh" />
      <About lang="zh" />
      <Skills lang="zh" />
      <Projects lang="zh" />
      <Experience lang="zh" />
      <Strengths lang="zh" />
      <Footer lang="zh" />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import Experience from '../components/Experience.vue'
import Strengths from '../components/Strengths.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Navbar, Hero, About, Skills, Projects, Experience, Strengths, Footer }
}
</script>