function initModal() {
  const openLogin = document.querySelector("[data-modal='open']");
  const closeLogin = document.querySelector("[data-modal='close']");
  const containerModal = document.querySelector("[data-modal='container']");

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function clickOutModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (openLogin && closeLogin && containerModal) {
    openLogin.addEventListener('click', toggleModal);
    closeLogin.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickOutModal);
  }
}

export default initModal;
