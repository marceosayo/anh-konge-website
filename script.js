document.addEventListener("DOMContentLoaded", () => {
  const darkBG = document.querySelector("#dark-bg");
  const photosIMG = document.querySelectorAll("#photos img");

  photosIMG.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      darkBG.style.opacity = "1";
      darkBG.classList.add("active");
      img.classList.add("hover");
    });

    img.addEventListener("mouseleave", () => {
      darkBG.style.opacity = "0";
      darkBG.classList.remove("active");
      img.classList.remove("hover");
    });
  });
});
