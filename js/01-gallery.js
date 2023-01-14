import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const createGalleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class = "gallery__item">
       <a class = "gallery__link">
        <img class = "gallery__image"
         src = "${preview}" 
         data-source = "${original}"
         alt = "${description}" /><a></div>`;
  })
  .join("");

galleryList.insertAdjacentHTML("afterbegin", createGalleryItem);

const openImg = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  let fullImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
  <img src = ${fullImg}> width = "900" height = "600">`);
  instance.show();
};

galleryList.addEventListener("click", openImg);

// const modalClose = (event) => {
//   if (event.code === "Escape") {
//     instance.close();
//   }
// };

// document.addEventListener("keydown", modalClose);
