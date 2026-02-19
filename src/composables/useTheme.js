import { ref, watch, onMounted } from 'vue'

export function useTheme() {
  const isDark = ref(false)

  function toggleTheme() {
    isDark.value = !isDark.value
  }

  watch(isDark, (val) => {
    document.documentElement.setAttribute('data-theme', val ? 'dark' : 'light')
    localStorage.setItem('portfolio-theme', val ? 'dark' : 'light')
  })

  onMounted(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'dark') {
      isDark.value = true
    } else if (!saved) {
      // Check system preference
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  })

  return { isDark, toggleTheme }
}
