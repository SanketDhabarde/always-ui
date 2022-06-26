// modal js
const modalClose = document.querySelector("#modal-close");
const backdrop = document.querySelector(".modal-backdrop");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector("#btn-modal-close");
const openModal = document.querySelector(".open-modal");

const eventHandler = () => {
  backdrop.classList.add("display-none");
};

modalClose.addEventListener("click", eventHandler);

backdrop.addEventListener("click", eventHandler);

btnClose.addEventListener("click", eventHandler);

openModal.addEventListener("click", () => {
  backdrop.classList.remove("display-none");
});

modal.addEventListener("click", (e) => e.stopPropagation());

