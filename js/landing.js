/* Progressive enhancement: content and project details also work without JavaScript. */
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((element) => {
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add('pending');
      observer.observe(element);
    }
  });
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) {
      document.querySelectorAll('.pending').forEach((element) => element.classList.remove('pending'));
      observer.disconnect();
    }
  });
}
