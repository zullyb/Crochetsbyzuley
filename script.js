document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuList = document.getElementById("menu-list");
  const menuLinks = document.querySelectorAll(".menu-list a");

  if (menuToggle && menuList) {
    menuToggle.addEventListener("click", () => {
      menuList.classList.toggle("show");
    });
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuList) {
        menuList.classList.remove("show");
      }
    });
  });
});
