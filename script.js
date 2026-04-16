function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    section.style.display = "none";
  });

  if (sectionId === "collection") {
    document.getElementById("collection").style.display = "block";
    document.getElementById("collection-gallery-1").style.display = "block";
    document.getElementById("collection-gallery-2").style.display = "block";
    document.getElementById("collection-gallery-3").style.display = "block";
  } else if (sectionId === "socials") {
    document.getElementById("socials-banner").style.display = "block";
    document.getElementById("socials").style.display = "block";
  } else {
    document.getElementById(sectionId).style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showSection("intro");
});
