import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const createCalleryItemMurkup = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </div>`
  )
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', createCalleryItemMurkup);

galleryRef.addEventListener('click', handleClick);

const instance = basicLightbox.create(`
        <div class="modal">
            <img src=" " width="800" height="600">
        </div>
    `);

function handleClick(event) {
  event.preventDefault();
  const handClick = event.target.nodeName;
  if (handClick !== 'IMG') {
    return;
  }

  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();

  document.addEventListener('keydown', function closeModal(evt) {
    if (evt.key !== 'Escape') {
      return;
    }

    instance.close();
    document.removeEventListener('keydown', closeModal);
  });
}
