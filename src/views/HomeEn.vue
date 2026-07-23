<template>
  <div>
    <Navbar lang="en" />
    <div class="container">
      <Hero lang="en" />
      <About lang="en" />
      <Skills lang="en" />
      <Projects lang="en" />
      <Experience lang="en" />
      <Strengths lang="en" />
      <Footer lang="en" />
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