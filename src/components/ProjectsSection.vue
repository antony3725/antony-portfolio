<template>
  <section id="projects" class="section section-alt">
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">// Projects</span>
        <h2 class="section-title">Featured Work</h2>
        <p class="section-subtitle">
          A selection of professional software projects I've built and contributed to.
        </p>
      </div>

      <div class="projects-grid">
        <div
          class="project-card scale-in"
          v-for="(project, idx) in projects"
          :key="idx"
          :style="{ transitionDelay: `${idx * 100}ms` }"
        >
          <div class="project-number">{{ String(idx + 1).padStart(2, '0') }}</div>
          <h3 class="project-name">{{ project.name }}</h3>
          <p class="project-desc">{{ project.description }}</p>
          <div class="project-tech">
            <span class="tech-tag" v-for="tech in project.technologies" :key="tech">
              {{ tech }}
            </span>
          </div>
          <div class="project-footer">
            <span class="project-type">{{ project.type }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: 'Inventory Management System',
    description: 'End-to-end inventory tracking and warehouse management solution with real-time stock monitoring.',
    technologies: ['ASP.NET Core', 'Vue.js', 'SQL Server', 'REST API'],
    type: 'Full Stack Application'
  },
  {
    name: 'Stock Transaction Management APIs',
    description: 'High-performance RESTful APIs for processing and managing stock transactions at scale.',
    technologies: ['C#', 'Web API', 'Entity Framework', 'JWT Auth'],
    type: 'Backend API'
  },
  {
    name: 'Business Process Automation',
    description: 'Automated workflow tools streamlining repetitive business operations and approval processes.',
    technologies: ['ASP.NET Core', 'SQL Server', 'JavaScript', 'Azure'],
    type: 'Enterprise Solution'
  },
  {
    name: 'SaaS Application Concepts',
    description: 'Multi-tenant SaaS application prototypes with subscription management and role-based access.',
    technologies: ['Clean Architecture', 'Vue.js', 'C#', 'SQL Server'],
    type: 'Product Development'
  },
  {
    name: 'Report Generation Engine',
    description: 'Dynamic reporting system generating business intelligence reports with configurable parameters.',
    technologies: ['ASP.NET Core', 'Stored Procedures', 'ADO.NET', 'PDF Export'],
    type: 'Backend Service'
  },
  {
    name: 'User Access Management Portal',
    description: 'Centralized authentication and authorization portal with role-based permission management.',
    technologies: ['C#', 'JWT', 'Vue.js', 'SQL Server'],
    type: 'Security Module'
  }
]
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
}

.project-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 32px;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-base);
}

.project-card:hover::before {
  transform: scaleX(1);
}

.project-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.project-number {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 16px;
}

.project-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
  line-height: 1.4;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
  flex-grow: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  padding: 5px 12px;
  background: var(--color-primary-bg);
  color: var(--color-primary);
  font-size: 0.78rem;
  font-weight: 500;
  border-radius: 50px;
  font-family: var(--font-mono);
}

.project-footer {
  padding-top: 16px;
  border-top: 1px solid var(--color-border-light);
}

.project-type {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
