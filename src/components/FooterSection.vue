<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <a href="#hero" class="footer-logo">
            <span class="logo-icon">AV</span>
            <span class="logo-text">Antony Vinothkumar</span>
          </a>
          <p class="footer-role">.NET Backend Developer &amp; Full Stack Developer</p>
        </div>

        <div class="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div class="footer-social">
          <a href="mailto:antonyvinoth.colas@gmail.com" aria-label="Email" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/antony-vinothkumar-a623691b3/" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Antony Vinothkumar. All rights reserved.</p>
        <p class="footer-credit">Built with Vue.js</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--color-bg-alt);
  border-top: 1px solid var(--color-border);
  padding: 48px 0 24px;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 24px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--color-text);
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: var(--color-primary);
  color: #fff;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.logo-text {
  font-size: 1.05rem;
  font-weight: 600;
}

.footer-role {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  margin-top: 6px;
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--color-primary);
}

.footer-social {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
}

.social-link:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background: var(--color-primary-bg);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-bottom p {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.footer-credit {
  font-family: var(--font-mono);
  font-size: 0.8rem !important;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
