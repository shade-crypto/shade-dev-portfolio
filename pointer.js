(() => {
  if (window.Shade?.reducedMotion || !window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  const art = document.querySelector('.hero-art');
  const glow = document.querySelector('.cursor-glow');
  document.addEventListener('pointermove', event => {
    document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    if (art) {
      art.style.setProperty('--parallax-x', `${(event.clientX / window.innerWidth - 0.5) * 8}px`);
      art.style.setProperty('--parallax-y', `${(event.clientY / window.innerHeight - 0.5) * 8}px`);
    }
    if (glow) glow.classList.add('is-active');
  }, { passive: true });
})();
