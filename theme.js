(() => {
  const button = document.getElementById('theme-toggle');
  const icon = button?.querySelector('.theme-icon');
  if (!button || !icon) return;

  let saved = null;
  try { saved = localStorage.getItem('shade-theme'); } catch {}
  if (saved === 'light') document.body.dataset.theme = 'light';

  const update = () => {
    const light = document.body.dataset.theme === 'light';
    button.setAttribute('aria-label', light ? 'Увімкнути темну тему' : 'Увімкнути світлу тему');
    button.setAttribute('aria-pressed', String(light));
    icon.textContent = light ? '☾' : '☼';
  };
  update();
  button.addEventListener('click', () => {
    const theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    document.body.dataset.theme = theme;
    try { localStorage.setItem('shade-theme', theme); } catch {}
    update();
  });
})();
