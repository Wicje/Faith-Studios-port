
// Init AOS
AOS.init({
  duration: 1200,
  once: true
});

// Example GSAP effect for parallax image gallery
// (optional, for more immersive 4K-like scrolling)
document.addEventListener("scroll", () => {
  const galleryImages = document.querySelectorAll(".gallery-grid img");
  galleryImages.forEach(img => {
    const speed = img.dataset.speed || 0.3;
    img.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});
