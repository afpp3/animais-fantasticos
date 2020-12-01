export default function initAnimaScroll(params) {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMetade = window.innerHeight * 0.7;

  function animaSroll() {
    sections.forEach((section) => {
      const topDistance = section.getBoundingClientRect().top;
      const isSectionVisible = topDistance - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    window.addEventListener('scroll', animaSroll);
    animaSroll();
  }
}
