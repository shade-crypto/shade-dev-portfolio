(() => {
  const button = document.getElementById('copy-telegram');
  const toast = document.getElementById('toast');
  if (!button || !toast) return;
  let timer;
  const announce = message => {
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(timer);
    timer = window.setTimeout(() => toast.classList.remove('is-visible'), 2400);
  };
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('@ShadeDev');
      announce('Нік @ShadeDev скопійовано');
    } catch {
      const field = document.createElement('textarea');
      field.value = '@ShadeDev';
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      announce(copied ? 'Нік @ShadeDev скопійовано' : 'Telegram: @ShadeDev');
    }
  });
})();
