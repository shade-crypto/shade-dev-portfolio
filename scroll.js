(() => {
  const progress = document.getElementById('scroll-progress');
  const backTop = document.getElementById('back-top');
  const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${max > 0 ? Math.min(100, window.scrollY / max * 100) : 0}%`;
    backTop?.classList.toggle('is-visible', window.scrollY > 520);
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: window.Shade?.reducedMotion ? 'auto' : 'smooth' }));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }), { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach(section => observer.observe(section));
  }

  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
