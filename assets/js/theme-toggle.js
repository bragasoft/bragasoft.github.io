// Simple light/dark switch – stores preference in localStorage
(function () {
  const btn = document.createElement('button');
  btn.className = 'btn btn-sm btn-outline-secondary ms-2';
  btn.innerHTML = '🌓';
  btn.title = 'Toggle dark / light theme';
  btn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? '' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
  document.querySelector('header .container-fluid').appendChild(btn);

  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  }
})();
