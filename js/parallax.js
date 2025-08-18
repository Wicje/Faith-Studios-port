let lastScroll = 0;
window.addEventListener('scroll', () => {
    const now = performance.now();
    if (now - lastScroll > 16) { // ~60fps
        const parallax = document.querySelector('.parallax');
        if (parallax) {
            const scrollPosition = window.pageYOffset;
            parallax.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
        lastScroll = now;
    }
    requestAnimationFrame(() => {});
});
