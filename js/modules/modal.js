export default class Modal {
  constructor(openModal, closeModal, containerModal) {
    this.openModal = document.querySelector(openModal);
    this.closeModal = document.querySelector(closeModal);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  addModalListener() {
    this.openModal.addEventListener('click', this.eventToggleModal);
    this.closeModal.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickOutModal);
  }

  init() {
    if (this.openModal && this.closeModal && this.containerModal) {
      this.addModalListener();
    }
    return this;
  }
}
