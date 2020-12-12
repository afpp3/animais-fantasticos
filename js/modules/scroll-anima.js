export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.7;
    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.offset) {
        section.element.classList.add('ativo');
      } else if (section.element.classList.contains('ativo')) {
        section.element.classList.remove('ativo');
      }
    });
  }

  addEventListener() {
    window.addEventListener('scroll', this.checkDistance);
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.addEventListener();
      this.checkDistance();
    }
    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
