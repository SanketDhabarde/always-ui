const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");
const closeSidebar = document.querySelector(".close-sidebar");

menu.addEventListener("click", () => {
  sidebar.classList.remove("display-none-sidebar");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.add("display-none-sidebar");
});
