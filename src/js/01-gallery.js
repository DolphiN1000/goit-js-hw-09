import { galleryItems } from "./gallery-items.js";
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const href = {
  listGall: document.querySelector(".gallery"),
};

let gallArray = galleryItems
  .map(({ preview, original, description } = galleryItem) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          // class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          onclick="return false"
        />
      </a>
      </div>`;
  })
  .join("");

href.listGall.insertAdjacentHTML("beforeend", gallArray);

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captions: true,
  captionsData: "alt",
  captionAttribute: "title",
  captionDelay: 250,
});

console.dir(SimpleLightbox);