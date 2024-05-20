import { App, DirectiveBinding } from 'vue'

// 这里通用配置了，当然也可以利用binding进行配置
const DISTANCE = 150
const DURATION = 1000

const config = {
    rootMargin: '0px',
    threshold: 0,
}

const animationMap = new WeakMap()

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            /* 
                      这里可以通过entry.target获取到当前元素，但是不推荐因为是通用命令，原来的entry上可能有某些动画这里不要修改
                      entry.target.getAnimation()
                  */
            const animation = animationMap.get(entry.target)
            animation.play()
            observer.unobserve(entry.target)
        }
    })
}, config)

// 只有在视口之下的元素才会触发绑定，在视口之中和视口之上都不触发
function isBlewViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect()
    return rect.top > window.innerHeight
}

export default {
    install(app: App) {
        app.directive('fadeInUp', {
            mounted(el: any, _binding: DirectiveBinding) {
                if (!isBlewViewport(el)) {
                    return
                }
                // 不建议使用直接修改元素的style，而是通过Animation API来实现，这样更有通用性
                const animation = el.animate(
                    [
                        {
                            transform: `translateY(${DISTANCE}px)`,
                            opacity: 0,
                        },
                        {
                            transform: `translateY(0)`,
                            opacity: 1,
                        },
                    ],
                    {
                        duration: DURATION,
                        easing: 'ease',
                    },
                )
                animation.pause()
                animationMap.set(el, animation)
                observer.observe(el)
            },
            unmounted(el) {
                observer.unobserve(el)
            },
        })
    },
}

