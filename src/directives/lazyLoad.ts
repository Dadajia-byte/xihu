const config = {
    rootMargin: "0px",
    threshold: 0
}

export default {
    install(app: any) {
        app.directive("lazy", {
            mounted(el: any, binding: any) {
                el.src = "@/assets/loading.gif";
                const observer = new IntersectionObserver((entries, self) => {
                    entries.forEach(entry => {
                        if (entry.intersectionRatio > 0) {
                            el.src = binding.value;
                            self.unobserve(el);
                        }
                    }, config);
                })
                observer.observe(el)
            },
        })
    }
}