(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      openModalBtn2: document.querySelector('[data-modal-open-two]'),
      openModalBtn3: document.querySelector('[data-modal-open-three]'),
      openModalBtn4: document.querySelector('[data-modal-open-four]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtn2.addEventListener('click', toggleModal);
    refs.openModalBtn3.addEventListener('click', toggleModal);
    refs.openModalBtn4.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();