import { App, DirectiveBinding } from 'vue'

const config = {
  rootMargin: '0px',
  threshold: 0,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      // 这里给entry上的src赋值为binding上的value
      const element = entry.target as HTMLImageElement
      ;(entry.target as HTMLImageElement).src = element.dataset.src as string
      observer.unobserve(entry.target)
    }
  })
}, config)

function isBlewViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return rect.top > window.innerHeight
}

export default {
  install(app: App) {
    app.directive('lazy', {
      mounted(el: HTMLImageElement, binding: DirectiveBinding) {
        if (!isBlewViewport(el)) {
          return
        }
        el.src = '@/assets/loading.gif'
        el.dataset.src = binding.value
        observer.observe(el)
      },
      unmounted(el: HTMLImageElement) {
        observer.unobserve(el)
      },
    })
  },
}
