<template>
  <section id="hero" class="hero">
    <div class="container hero-container">
      <div class="hero-content fade-in">
        <span class="hero-greeting">Hello, I'm</span>
        <h1 class="hero-name">Antony Vinothkumar</h1>
        <p class="hero-tagline">.NET Developer building scalable web applications &amp; APIs</p>
        <p class="hero-summary">
          A passionate software developer with 4+ years of experience crafting robust backend systems,
          RESTful APIs, and full-stack applications using ASP.NET Core and modern web technologies.
        </p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            View Projects
          </a>
          <a href="/Antony_Resume.pdf" download class="btn btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Resume
          </a>
          <a href="#contact" class="btn btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Contact Me
          </a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">4+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat">
            <span class="stat-number">15+</span>
            <span class="stat-label">Projects Delivered</span>
          </div>
          <div class="stat">
            <span class="stat-number">10+</span>
            <span class="stat-label">Technologies</span>
          </div>
        </div>
      </div>
      <div class="hero-visual fade-in-right">
        <div class="profile-wrapper">
          <div class="profile-image-container">
            <img src="/profile.jpg" alt="Antony Vinothkumar" class="profile-image" />
          </div>
          <div class="profile-badge">
            <span class="badge-dot"></span>
            Available for opportunities
          </div>
        </div>
      </div>
    </div>
    <div class="hero-scroll-indicator">
      <a href="#about" aria-label="Scroll down">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </a>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-top: 80px;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, var(--color-primary-bg) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-greeting {
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--color-primary);
  font-weight: 500;
  letter-spacing: 1px;
}

.hero-name {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--color-text);
  line-height: 1.1;
  margin: 12px 0 16px;
}

.hero-tagline {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-bottom: 16px;
}

.hero-summary {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 32px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
}

.hero-stats {
  display: flex;
  gap: 40px;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-primary);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

/* Profile Image */
.profile-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-left: auto;
}

.profile-image-container {
  width: 360px;
  height: 420px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 4px solid var(--color-border);
  box-shadow: var(--shadow-xl);
  background: var(--color-bg-alt);
  position: relative;
}

.profile-image-container::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius-xl);
  background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.08) 100%);
  pointer-events: none;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.profile-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  box-shadow: var(--shadow-md);
}

.badge-dot {
  width: 10px;
  height: 10px;
  background: var(--color-success);
  border-radius: 50%;
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
  50% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
}

/* Scroll Indicator */
.hero-scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.hero-scroll-indicator a {
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
}

.hero-scroll-indicator a:hover {
  color: var(--color-primary);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}

@media (max-width: 968px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-name {
    font-size: 2.75rem;
  }

  .hero-summary {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-visual {
    order: -1;
  }

  .profile-wrapper {
    margin: 0 auto;
  }

  .profile-image-container {
    width: 240px;
    height: 280px;
  }
}

@media (max-width: 480px) {
  .hero-name {
    font-size: 2rem;
  }

  .hero-tagline {
    font-size: 1.05rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-stats {
    gap: 24px;
  }

  .stat-number {
    font-size: 1.4rem;
  }

  .profile-image-container {
    width: 200px;
    height: 240px;
  }
}
</style>
