(() => {
  const root = document.documentElement;
  const themeSelect = document.querySelector('.theme-toggle');
  const scheme = window.matchMedia('(prefers-color-scheme: dark)');
  let choice = root.dataset.themeChoice || 'system';
  const updateLinks = () => {
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      const url = new URL(href, document.baseURI);
      if (url.origin !== window.location.origin) return;
      if (choice === 'system') url.searchParams.delete('theme');
      else url.searchParams.set('theme', choice);
      a.href = url.href;
    });
  };
  const setTheme = () => {
    const dark = choice === 'dark' || (choice === 'system' && scheme.matches);
    root.dataset.theme = dark ? 'dark' : 'light';
    root.dataset.themeChoice = choice;
    root.style.colorScheme = dark ? 'dark' : 'light';
    if (themeSelect) themeSelect.value = choice;
    updateLinks();
  };
  setTheme();
  themeSelect?.addEventListener('change', () => {
    choice = themeSelect.value;
    setTheme();
    const url = new URL(window.location.href);
    if (choice === 'system') url.searchParams.delete('theme');
    else url.searchParams.set('theme', choice);
    try { window.history.replaceState(null, '', url.href); } catch { /* Link propagation still works in restricted previews. */ }
  });
  scheme.addEventListener('change', () => { if (choice === 'system') setTheme(); });
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
