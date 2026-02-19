// Composable for scroll-triggered animations
import { onMounted, onBeforeUnmount, nextTick } from 'vue'

export function useScrollAnimation() {
  let observer = null

  function initObserver() {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      }
    )

    const animatables = document.querySelectorAll(
      '.fade-in, .fade-in-left, .fade-in-right, .scale-in'
    )
    animatables.forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    // Wait for all child components to render
    nextTick(() => {
      initObserver()
    })
  })

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })
}
