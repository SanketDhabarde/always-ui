// toast js
const toast = document.querySelector(".toast-live");
const closeToast = document.querySelector("#toast-close");
const openToast = document.querySelector("#open-toast");

openToast.addEventListener("click", () => {
  toast.classList.remove("display-none");
});

closeToast.addEventListener("click", () => {
  toast.classList.add("display-none");
});