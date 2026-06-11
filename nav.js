const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');

if (toggle && links) {
  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('nav__links--open');
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    links.classList.toggle('nav__links--open', !open);
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', close);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      close();
      toggle.focus();
    }
  });

  document.addEventListener('click', e => {
    if (toggle.getAttribute('aria-expanded') === 'true' &&
        !toggle.contains(e.target) &&
        !links.contains(e.target)) {
      close();
    }
  });
}
