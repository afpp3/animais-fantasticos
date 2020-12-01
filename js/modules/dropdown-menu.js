import outsideClick from './outsideclick.js';

function initDropdownMenu() {
  const dropdownsMenu = document.querySelectorAll('[data-dropdown]');

  dropdownsMenu.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');

    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }
}

export default initDropdownMenu;
