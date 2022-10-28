import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const createCalleryItemMurkup = galleryItems
  .map(
    item =>
      `<a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`
  )
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', createCalleryItemMurkup);

galleryRef.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const handClick = event.target.nodeName;
  if (handClick !== 'IMG') {
    return;
  }
}

const galleryAllImages = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 300,
  fadeSpeed: 350,
});
