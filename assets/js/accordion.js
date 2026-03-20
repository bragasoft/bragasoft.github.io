document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.accordion-header');
  triggers.forEach(t => {
    t.addEventListener('click', () => {
      const body = t.nextElementSibling;
      body.classList.toggle('show');
    });
  });
});
