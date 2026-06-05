const menuItems = document.querySelectorAll("nav li[data-target]");
const budgetButton = document.querySelector("#botaoOrcamento");
const galleryImages = document.querySelectorAll(".divImagens img");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const section = document.querySelector(`#${item.dataset.target}`);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

if (budgetButton) {
  budgetButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open("https://www.instagram.com/joaquim_tattoo/", "_blank", "noopener,noreferrer");
  });
}

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    const overlay = document.createElement("div");
    const expandedImage = document.createElement("img");

    overlay.className = "lightbox";
    expandedImage.src = image.src;
    expandedImage.alt = image.alt;

    overlay.appendChild(expandedImage);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });
  });
});
