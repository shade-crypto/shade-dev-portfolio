(() => {
  const button = document.getElementById('menu-toggle');
  const menu = document.getElementById('nav-links');
  if (!button || !menu) return;

  const close = () => {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Відкрити меню');
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Закрити меню' : 'Відкрити меню');
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  document.addEventListener('click', event => {
    if (menu.classList.contains('is-open') && !menu.contains(event.target) && !button.contains(event.target)) close();
  });
  window.matchMedia('(min-width: 701px)').addEventListener?.('change', close);
})();
