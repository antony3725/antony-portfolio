<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">// Technical Skills</span>
        <h2 class="section-title">My Tech Stack</h2>
        <p class="section-subtitle">
          Technologies and tools I use to bring ideas to life.
        </p>
      </div>

      <div class="skills-grid">
        <div
          class="skill-category scale-in"
          v-for="(category, idx) in skillCategories"
          :key="idx"
          :style="{ transitionDelay: `${idx * 100}ms` }"
        >
          <div class="category-header">
            <div class="category-icon" v-html="category.icon"></div>
            <h3 class="category-title">{{ category.title }}</h3>
          </div>
          <div class="skill-tags">
            <span class="skill-tag" v-for="skill in category.skills" :key="skill">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    title: 'Backend',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    skills: ['ASP.NET Core Web API', 'C#', 'Entity Framework Core', 'ADO.NET', 'RESTful APIs', 'JWT Authentication']
  },
  {
    title: 'Frontend',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    skills: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'PrimeVue']
  },
  {
    title: 'Database',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    skills: ['SQL Server', 'Stored Procedures', 'Database Design', 'Query Optimization']
  },
  {
    title: 'Architecture & Concepts',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    skills: ['Clean Architecture', 'Layered Architecture', 'Repository Pattern', 'Dependency Injection', 'API Security', 'Performance Optimization']
  },
  {
    title: 'Tools & Platforms',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    skills: ['Git', 'Azure', 'Visual Studio', 'VS Code', 'Postman', 'IIS']
  }
]
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
}

.skill-category {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: all var(--transition-base);
}

.skill-category:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}

.category-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--color-primary-bg);
  color: var(--color-primary);
  border-radius: var(--radius-md);
}

.category-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  display: inline-block;
  padding: 8px 16px;
  background: var(--color-bg-alt);
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 50px;
  border: 1px solid var(--color-border-light);
  transition: all var(--transition-fast);
}

.skill-tag:hover {
  background: var(--color-primary-bg);
  color: var(--color-primary);
  border-color: var(--color-primary);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
