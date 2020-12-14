import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdowMenus, events) {
    this.dropdowMenus = document.querySelectorAll(dropdowMenus);

    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }

    this.activeClass = 'active';
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);

    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addEventsToMenus() {
    this.dropdowMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdowMenus.length) {
      this.addEventsToMenus();
    }
    return this;
  }
}
