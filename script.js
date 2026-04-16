const menuToggle = document.getElementById("menu-toggle");
const menuList = document.getElementById("menu-list");
const menuLinks = document.querySelectorAll(".menu-list a");

menuToggle.addEventListener("click", () => {
  menuList.classList.toggle("show");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuList.classList.remove("show");
  });
});
