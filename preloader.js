(() => {
  const loader = document.getElementById('preloader');
  if (!loader || window.Shade?.reducedMotion) return;
  const hide = () => loader.classList.add('is-hidden');
  window.addEventListener('load', () => window.setTimeout(hide, 320), { once: true });
  window.setTimeout(hide, 1800);
})();
