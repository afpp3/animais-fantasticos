export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.7;
    this.animaSroll = this.animaSroll.bind(this);
  }

  animaSroll() {
    this.sections.forEach((section) => {
      const topDistance = section.getBoundingClientRect().top;
      const isSectionVisible = topDistance - this.windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  addEventListener() {
    window.addEventListener('scroll', this.animaSroll);
    this.animaSroll();
  }

  init() {
    if (this.sections.length) {
      this.addEventListener();
    }
    return this;
  }
}
