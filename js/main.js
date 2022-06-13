(() => {
  const refs = {
    header: document.querySelector('.header'),
  };

  if (refs.header.classList.contains('is-fixed')) {
    const { height: headerHeight } = refs.header.getBoundingClientRect();
    document.body.style.paddingTop = `${headerHeight}px`;
  }

  document.querySelector('.js-speaker-form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));
  });
})();
