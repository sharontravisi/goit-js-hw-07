import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('ul.gallery');
const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(element) {
    return element
        .map(({ preview, original, description }) => {
            return `
        <li class='gallery_item'>
        <a class= "gallery__link" href="${original}">
        <img
        class = "gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`;
        })

        .join('');
};



galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

//Aqui usamos simplelightbox

var lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
});
lightbox.on('show.simplelightbox')