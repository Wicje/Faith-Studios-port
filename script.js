// Single source of truth for all interactions
document.addEventListener("DOMContentLoaded", () => {
  // AOS init
  AOS.init({ duration: 1000, easing: "ease-out-cubic", once: true });

  // 1) “Falling” gallery: stagger in as the grid enters view
  const grid = document.querySelector(".gallery-grid");
  const galleryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          grid.classList.add("fall");
          // Stagger images
          [...grid.querySelectorAll("img")].forEach((img, i) => {
            setTimeout(() => img.classList.add("in"), i * 80);
          });
          galleryObserver.unobserve(grid);
        }
      });
    },
    { threshold: 0.2 }
  );
  if (grid) galleryObserver.observe(grid);

  // 2) Price section reveals only after gallery is ~fully viewed
  const gallerySection = document.querySelector("#gallery");
  const pricingSection  = document.querySelector(".pricing");

  const pricingObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          pricingSection.classList.add("visible");
          pricingObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.3 } // basically fully viewed
  );
  if (gallerySection) pricingObserver.observe(gallerySection);
});

