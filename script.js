// ngblock.de — kleines Basis-Script.
// Bewusst schlank gehalten, damit hier später Blog-/Projekt-Logik andocken kann.

document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = year;
  });

  const menuToggle = document.getElementById('menuToggle');
  const menuPanel = document.getElementById('menuPanel');
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (!menuToggle || !menuPanel) return;

  const openMenu = () => {
    menuPanel.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    menuPanel.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = menuPanel.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  document.addEventListener('click', (event) => {
    if (!menuPanel.contains(event.target) && event.target !== menuToggle) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  menuPanel.querySelectorAll('a[data-target]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.getElementById(link.dataset.target);
      closeMenu();
      if (target) {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      }
    });
  });
});

console.log(
  '%c ngblock ',
  'background:#ffb020;color:#0d1b2e;font-weight:600;padding:2px 6px;border-radius:2px;',
  '— im Entwurf. Mehr folgt bald.'
);
