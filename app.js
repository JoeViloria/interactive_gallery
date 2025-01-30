const largeImage = document.getElementById("largeImage");
const figures = document.querySelectorAll(".gallery figure");

figures.forEach((figure, index) => {
    const img = figure.querySelector("img");
    img.setAttribute("tabindex", index + 1);

    img.addEventListener("mouseover", () => {
        largeImage.textContent = img.alt;
        largeImage.style.backgroundImage = `url(${img.src})`;
    });

    img.addEventListener("focus", () => {
        largeImage.textContent = img.alt;
        largeImage.style.backgroundImage = `url(${img.src})`;
    });

    img.addEventListener("mouseout", () => {
        largeImage.textContent = "Hover over an image below";
        largeImage.style.backgroundImage = "";
    });

    img.addEventListener("blur", () => {
        largeImage.textContent = "Hover over an image below";
        largeImage.style.backgroundImage = "";
    });
});
