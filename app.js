(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const scheme = window.matchMedia('(prefers-color-scheme: dark)');
  let manualTheme = false;
  const setTheme = (dark) => {
    root.dataset.theme = dark ? 'dark' : 'light';
    if (themeButton) {
      themeButton.textContent = dark ? 'Light' : 'Dark';
      themeButton.setAttribute('aria-label', `Use ${dark ? 'light' : 'dark'} colours`);
    }
  };
  setTheme(scheme.matches);
  themeButton?.addEventListener('click', () => {
    manualTheme = true;
    setTheme(root.dataset.theme !== 'dark');
  });
  scheme.addEventListener('change', e => { if (!manualTheme) setTheme(e.matches); });
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.getElementById('mobile-nav');
  const setMenu = (open) => {
    if (!menuButton || !nav) return;
    nav.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Close' : 'Menu';
  };
  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  window.matchMedia('(min-width: 801px)').addEventListener('change', e => { if (e.matches) setMenu(false); });
})();
