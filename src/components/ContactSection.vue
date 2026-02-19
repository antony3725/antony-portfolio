<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">// Contact</span>
        <h2 class="section-title">Let's Work Together</h2>
        <p class="section-subtitle">
          Looking for a dedicated .NET developer? Let's discuss how I can contribute to your team.
        </p>
      </div>

      <div class="contact-grid">
        <div class="contact-info fade-in-left">
          <h3 class="contact-info-title">Get In Touch</h3>
          <p class="contact-info-text">
            I'm open to full-time opportunities, product-based company roles, and interesting
            SaaS projects. Feel free to reach out — I'd love to connect.
          </p>

          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <span class="contact-label">Email</span>
                <a href="mailto:antonyvinoth.colas@gmail.com" class="contact-value">antonyvinoth.colas@gmail.com</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div>
                <span class="contact-label">LinkedIn</span>
                <a href="https://www.linkedin.com/in/antony-vinothkumar-a623691b3/" target="_blank" rel="noopener" class="contact-value">linkedin.com/in/antony-vinothkumar</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <span class="contact-label">Location</span>
                <span class="contact-value">India</span>
              </div>
            </div>
          </div>
        </div>

        <form class="contact-form fade-in-right" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name" class="form-label">Full Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="form-input"
              placeholder="Your name"
              required
            />
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Email Address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-input"
              placeholder="your@email.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="subject" class="form-label">Subject</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              class="form-input"
              placeholder="How can I help?"
            />
          </div>
          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              class="form-input form-textarea"
              placeholder="Tell me about your project or opportunity..."
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

function handleSubmit() {
  const to = 'antonyvinoth.colas@gmail.com'
  const subject = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`)
  const body = encodeURIComponent(
    `Hi Antony,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.contact-info-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 16px;
}

.contact-info-text {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 32px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.contact-icon {
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

.contact-label {
  display: block;
  font-size: 0.82rem;
  color: var(--color-text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2px;
}

.contact-value {
  font-size: 0.95rem;
  color: var(--color-text);
  font-weight: 500;
}

a.contact-value:hover {
  color: var(--color-primary);
}

/* Form */
.contact-form {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 36px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: var(--color-text);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  outline: none;
}

.form-input::placeholder {
  color: var(--color-text-muted);
}

.form-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-full {
  width: 100%;
  justify-content: center;
}

.btn-full:disabled {
  cursor: default;
  transform: none;
  opacity: 0.85;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-form {
    padding: 24px;
  }
}
</style>
