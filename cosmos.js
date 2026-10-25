(() => {
  if (window.Shade?.reducedMotion) return;
  const stars = document.getElementById('starfield');
  const cometLayer = document.getElementById('comets');
  if (!stars || !cometLayer) return;

  const count = window.innerWidth < 600 ? 150 : 280;
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < count; index += 1) {
    const star = document.createElement('i');
    const size = 0.65 + Math.random() * 1.8;
    star.className = 'star';
    star.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${size}px;height:${size}px;opacity:${0.3 + Math.random() * 0.7};--twinkle:${2 + Math.random() * 5}s;animation-delay:${-Math.random() * 6}s`;
    fragment.appendChild(star);
  }
  stars.appendChild(fragment);

  const launchComet = () => {
    if (document.hidden) return;
    const comet = document.createElement('i');
    const duration = 1.3 + Math.random() * 1.4;
    comet.className = 'comet';
    comet.style.cssText = `left:${7 + Math.random() * 86}%;top:${Math.random() * 43}%;--dx:${-(90 + Math.random() * 210)}px;--dy:${75 + Math.random() * 180}px;--duration:${duration}s;--tail:${45 + Math.random() * 80}px`;
    cometLayer.appendChild(comet);
    window.setTimeout(() => comet.remove(), duration * 1000 + 250);
  };
  window.setTimeout(launchComet, 900);
  window.setInterval(launchComet, 2100 + Math.random() * 1600);
})();
