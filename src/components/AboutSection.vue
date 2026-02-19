<template>
  <section id="about" class="section section-alt">
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">// About Me</span>
        <h2 class="section-title">Who I Am</h2>
        <p class="section-subtitle">
          A results-driven software developer with a passion for building high-quality, scalable applications.
        </p>
      </div>

      <div class="about-grid">
        <div class="about-text fade-in-left">
          <p class="about-intro">
            With <strong>4+ years of professional experience</strong> in software development, I specialize in
            designing and building robust backend systems and full-stack web applications. My core expertise
            lies in <strong>ASP.NET Core</strong>, <strong>C#</strong>, and <strong>Web API development</strong>,
            complemented by frontend skills in <strong>Vue.js</strong> and modern JavaScript frameworks.
          </p>
          <p>
            I have a strong understanding of backend architecture, database design, and API security patterns.
            I'm experienced in building scalable business applications that serve real-world operational needs
            — from inventory management to stock transaction processing.
          </p>
          <p>
            I'm deeply interested in <strong>SaaS product development</strong> and continuously seek opportunities
            to build products that solve meaningful problems. My goal is to contribute to product-based companies
            where engineering excellence and innovation drive growth.
          </p>
        </div>

        <div class="about-highlights fade-in-right">
          <div class="highlight-card" v-for="(item, idx) in highlights" :key="idx">
            <div class="highlight-icon" v-html="item.icon"></div>
            <div>
              <h4 class="highlight-title">{{ item.title }}</h4>
              <p class="highlight-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const highlights = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    title: '4+ Years Experience',
    description: 'Delivering production-grade software solutions across diverse business domains.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    title: 'Backend Specialist',
    description: 'Deep expertise in ASP.NET Core Web API, clean architecture, and API security.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    title: 'Database Design',
    description: 'SQL Server optimization, stored procedures, and efficient query design.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',
    title: 'SaaS Enthusiast',
    description: 'Passionate about building scalable SaaS products and product-driven development.'
  }
]
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.about-text p {
  color: var(--color-text-secondary);
  margin-bottom: 20px;
  line-height: 1.85;
  font-size: 1.02rem;
}

.about-text strong {
  color: var(--color-text);
  font-weight: 600;
}

.about-intro {
  font-size: 1.05rem;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.highlight-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.highlight-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.highlight-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--color-primary-bg);
  color: var(--color-primary);
  border-radius: var(--radius-sm);
}

.highlight-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 4px;
}

.highlight-desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
