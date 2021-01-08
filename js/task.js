import images from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  modalImg: document.querySelector('.lightbox__image'),
  closeModalBtn: document.querySelector('.lightbox__button'),
  lightbox: document.querySelector('.lightbox'),
  overlay: document.querySelector('.lightbox__overlay'),
};

<<<<<<< Updated upstream
let index;
=======
let index = 0;
>>>>>>> Stashed changes

const galleryItems = createGalleryItems(images);
addGalleryItems(galleryItems);

refs.gallery.addEventListener('click', onGalleryClick);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.overlay.addEventListener('click', onOverlayClick);

function createGalleryItems(items) {
  return items
    .map(
      (item, i) =>
<<<<<<< Updated upstream
        `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" data-index="${i}"></a></li>`,
=======
        `<li class="gallery__item"><a class="gallery__link" href="${
          item.original
        }"><img class="gallery__image" src="${item.preview}" data-source="${
          item.original
        }" alt="${
          item.description
        }" data-index="${i}"></a></li>`,
>>>>>>> Stashed changes
    )
    .join('');
}

function addGalleryItems(items) {
  refs.gallery.innerHTML = items;
}

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const imageRef = event.target;
  const modalImgUrl = imageRef.dataset.source;
<<<<<<< Updated upstream
  const modalImgAlt = imageRef.alt;
  index = Number(imageRef.dataset.index);

  setModalImgAtt(modalImgUrl, modalImgAlt);
=======
  index = Number(imageRef.dataset.index);
  setModalImageSrc(modalImgUrl);
>>>>>>> Stashed changes
  onOpenModal();
}

function setModalImgAtt(url, alt) {
  refs.modalImg.src = url;
  refs.modalImg.alt = alt;
}

function onOpenModal() {
  window.addEventListener('keydown', onKeyPress);
  refs.lightbox.classList.add('is-open');
}

function onCloseModal() {
  window.removeEventListener('keydown', onKeyPress);
  refs.lightbox.classList.remove('is-open');
  refs.modalImg.src = '';
  refs.modalImg.alt = '';
}

function onOverlayClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onKeyPress(event) {
  refs.modalImg.src = images[index].original;
  refs.modalImg.alt = images[index].description;
  switch (event.code) {
    case 'Escape':
      onCloseModal();
      break;
    case 'ArrowLeft':
      if (index > 0) {
        index -= 1;
      } else if (index === 0) {
        index = images.length - 1;
      }
      break;
    case 'ArrowRight':
      if (index < images.length - 1) {
        index += 1;
      } else if (index === images.length - 1) {
        index = 0;
      }
      break;
  }
}
<<<<<<< Updated upstream
=======

function gallerySliderLeft(event) {
   if (event.code ==='ArrowLeft') {
       if (index > 0) {
           index -= 1;
           refs.modalImg.src = images[index].original;
       } else if (index === 0) {
           index = images.length - 1;
           refs.modalImg.src = images[index].original;
       }
    }
}

function gallerySliderRight(event) {
    if (event.code ===  'ArrowRight') {
        if(index < images.length - 1){
            index += 1;
            refs.modalImg.src = images[index].original;
        } else if (index === images.length - 1) {
            index = 0;
            refs.modalImg.src = images[index].original;
        }
    }
}
>>>>>>> Stashed changes
