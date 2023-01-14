import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const createGalleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join("");

galleryList.insertAdjacentHTML("afterbegin", createGalleryItem);

var lightbox = new SimpleLightbox(".gallery a", {
  captionDalay: 250,
  captionsData: "alt",
});
