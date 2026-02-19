<template>
  <section id="strengths" class="section">
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">// Strengths</span>
        <h2 class="section-title">What Sets Me Apart</h2>
        <p class="section-subtitle">
          Core professional strengths developed through real-world project experience.
        </p>
      </div>

      <div class="strengths-grid">
        <div
          class="strength-item fade-in"
          v-for="(strength, idx) in strengths"
          :key="idx"
          :style="{ transitionDelay: `${idx * 80}ms` }"
        >
          <div class="strength-marker">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="strength-content">
            <h4 class="strength-title">{{ strength.title }}</h4>
            <p class="strength-desc">{{ strength.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const strengths = [
  {
    title: 'Scalable Backend Design',
    description: 'Building APIs and services that handle increasing load with clean, maintainable architecture.'
  },
  {
    title: 'Clean & Maintainable Code',
    description: 'Writing well-structured, documented code following SOLID principles and industry best practices.'
  },
  {
    title: 'API Architecture Expertise',
    description: 'Designing RESTful APIs with proper versioning, authentication, and error handling patterns.'
  },
  {
    title: 'Database Optimization',
    description: 'Tuning SQL queries, designing efficient schemas, and implementing performant stored procedures.'
  },
  {
    title: 'Problem Solving',
    description: 'Strong analytical and debugging skills to identify root causes and implement effective solutions.'
  },
  {
    title: 'Independent Feature Development',
    description: 'Capable of owning features end-to-end — from requirement analysis to production deployment.'
  },
  {
    title: 'System Performance Improvement',
    description: 'Profiling and optimizing application performance, reducing response times and resource usage.'
  }
]
</script>

<style scoped>
.strengths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.strength-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.strength-item:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
  transform: translateX(4px);
}

.strength-marker {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--color-primary-bg);
  color: var(--color-primary);
  border-radius: 50%;
}

.strength-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 4px;
}

.strength-desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .strengths-grid {
    grid-template-columns: 1fr;
  }
}
</style>
