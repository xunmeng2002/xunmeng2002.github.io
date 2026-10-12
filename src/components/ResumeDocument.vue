<template>
  <div class="resume-container">
    <div class="header">
      <div class="name">{{ doc.name }}</div>
      <div class="contact-bar">
        <component
          :is="contact.link ? 'a' : 'span'"
          v-for="contact in doc.contacts"
          :key="contact.text"
          :href="contact.link"
          :target="contact.link ? '_blank' : null"
          :rel="contact.link ? 'noopener' : null"
        >
          <i :class="contact.icon"></i> {{ contact.text }}
        </component>
      </div>
      <div class="page-links">
        <router-link v-for="page in doc.pageLinks" :key="page.to" :to="page.to" class="page-link">{{ page.label }}</router-link>
      </div>
    </div>

    <div class="content">
      <div v-for="section in doc.sections" :key="section.title" class="section">
        <div class="section-title">{{ section.title }}</div>

        <template v-if="section.kind === 'lines'">
          <div v-for="line in section.lines" :key="line.strong" class="line-item"><strong>{{ line.strong }}</strong>{{ line.text }}</div>
        </template>

        <div v-else-if="section.kind === 'tags'" class="skills-grid">
          <span v-for="tag in section.tags" :key="tag" class="skill-badge">{{ tag }}</span>
        </div>

        <template v-else-if="section.kind === 'jobs'">
          <div v-for="job in section.jobs" :key="job.title + job.date" class="job-item">
            <div class="job-header">
              <span class="job-title">{{ job.title }} · <span class="job-company">{{ job.company }}</span></span>
              <span class="job-date">{{ job.date }}</span>
            </div>
            <div class="job-desc">
              <ul>
                <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </div>
          </div>
        </template>

        <template v-else-if="section.kind === 'projects'">
          <div v-for="project in section.projects" :key="project.name" class="project-item">
            <div class="project-title">
              {{ project.icon }} {{ project.name }}
              <a v-if="project.link" :href="project.link" target="_blank">{{ linkLabel(project.link) }}</a>
            </div>
            <div class="project-desc">{{ project.desc }}</div>
          </div>
        </template>

        <template v-else-if="section.kind === 'strengths'">
          <ul class="strength-list">
            <li v-for="highlight in section.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
          <div class="strength-details">
            <template v-for="(detail, index) in section.details" :key="detail">✔ {{ detail }}<br v-if="index < section.details.length - 1"></template>
          </div>
        </template>

        <div v-else-if="section.kind === 'prose'" class="summary-text">{{ section.text }}</div>
      </div>

      <hr>
      <div class="footer-note"><i class="fas fa-code"></i> {{ doc.footerNote }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumeDocument',
  props: {
    doc: {
      type: Object,
      required: true
    }
  },
  methods: {
    linkLabel(link) {
      return link.replace(/^https?:\/\//, '')
    }
  }
}
</script>

<style scoped>
/* 简历专用样式 */
.resume-container {
  max-width: 1100px;
  margin: 2rem auto;
  background: white;
  border-radius: 32px;
  box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}
.header {
  background: linear-gradient(135deg, #0b2b3b 0%, #123e52 100%);
  padding: 2.4rem 2.8rem;
  color: white;
  position: relative;
}
.name {
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}
.contact-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.9;
}
.contact-bar a, .contact-bar span {
  color: #e0f0ff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.contact-bar a:hover {
  color: white;
  text-decoration: underline;
}
.contact-bar i {
  width: 18px;
  font-size: 1rem;
}
.page-links {
  position: absolute;
  top: 2rem;
  right: 2.8rem;
  display: flex;
  gap: 1rem;
}
.page-link {
  background: rgba(255,255,255,0.2);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 40px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: background 0.2s;
}
.page-link:hover {
  background: rgba(255,255,255,0.35);
  color: white;
}
.content {
  padding: 2rem 2.8rem;
}
.section {
  margin-bottom: 2rem;
}
.section-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #0f3b4f;
  border-left: 5px solid #2c7da0;
  padding-left: 1rem;
  margin-bottom: 1rem;
}
.line-item + .line-item {
  margin-top: 4px;
}
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 0.5rem;
}
.skill-badge {
  background: #eef2fa;
  padding: 0.35rem 1rem;
  border-radius: 40px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #1e4a6e;
  border: 1px solid #dce5f0;
}
.job-item {
  margin-bottom: 1.6rem;
}
.job-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.4rem;
}
.job-title {
  font-weight: 700;
  font-size: 1rem;
  color: #0b2b3b;
}
.job-company {
  font-weight: 600;
  color: #2c7da0;
}
.job-date {
  font-size: 0.75rem;
  color: #5e7a93;
}
.job-desc ul {
  padding-left: 1.2rem;
  margin-top: 0.2rem;
}
.job-desc li {
  margin-bottom: 0.3rem;
  font-size: 0.88rem;
  color: #2c3e4e;
}
.project-item {
  background: #f8fafd;
  border-radius: 20px;
  padding: 1rem 1.3rem;
  margin-bottom: 1rem;
  border: 1px solid #e9edf2;
}
.project-title {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.project-title a {
  color: #2c7da0;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  background: #eef2fa;
  padding: 0.2rem 0.7rem;
  border-radius: 20px;
}
.project-desc {
  font-size: 0.86rem;
  color: #2a4055;
  line-height: 1.45;
}
.strength-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 0.6rem 0 0.2rem;
  list-style: none;
}
.strength-list li {
  background: white;
  border-radius: 30px;
  padding: 0.25rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid #dce5f0;
  color: #145c7a;
}
.strength-details {
  margin-top: 10px;
  font-size: 0.86rem;
  color: #2c5068;
}
.summary-text {
  background: #f5f9fe;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border-left: 4px solid #2c7da0;
  color: #1e3a4b;
}
hr {
  margin: 1rem 0;
  border: none;
  border-top: 1px solid #e2e8f0;
}
.footer-note {
  text-align: center;
  font-size: 0.7rem;
  padding: 10px 0 5px;
  color: #7f8c8d;
}
@media (max-width: 700px) {
  .content {
    padding: 1.5rem;
  }
  .header {
    padding: 1.6rem;
  }
  .name {
    font-size: 2rem;
  }
  .contact-bar {
    gap: 1rem;
    font-size: 0.75rem;
  }
  .page-links {
    position: static;
    justify-content: flex-end;
    margin-top: 1rem;
  }
}
</style>
