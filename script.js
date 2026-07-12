// ngblock.de — kleines Basis-Script.
// Bewusst schlank gehalten, damit hier später Blog-/Projekt-Logik andocken kann.

document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = year;
  });
});

console.log(
  '%c ngblock ',
  'background:#ffb020;color:#0d1b2e;font-weight:600;padding:2px 6px;border-radius:2px;',
  '— im Entwurf. Mehr folgt bald.'
);
