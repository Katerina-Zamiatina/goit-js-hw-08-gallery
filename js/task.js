import images from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  modalImg: document.querySelector('.lightbox__image'),
  closeModalBtn: document.querySelector('.lightbox__button'),
  lightbox: document.querySelector('.lightbox'),
  overlay: document.querySelector('.lightbox__overlay'),
};

let index = -1;

const galleryItems = createGalleryItems(images);
addGalleryItems(galleryItems);

refs.gallery.addEventListener('click', onGalleryClick);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.overlay.addEventListener('click', onOverlayClick);

function createGalleryItems(items) {
  return items
    .map(
      item =>
        `<li class="gallery__item"><a class="gallery__link" href="${
          item.original
        }"><img class="gallery__image" src="${item.preview}" data-source="${
          item.original
        }" alt="${
          item.description
        }" data-index="${(index += 1)}"></a></li>`,
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
  setModalImageSrc(modalImgUrl);
  onOpenModal();
}

function setModalImageSrc(url) {
  refs.modalImg.src = url;
}

function onOpenModal() {
  window.addEventListener('keydown', onESCPress);
  window.addEventListener('keydown', gallerySliderLeft);
  window.addEventListener('keydown', gallerySliderRight);
  refs.lightbox.classList.add('is-open');
}

function onCloseModal() {
  window.removeEventListener('keydown', onESCPress);
  window.removeEventListener('keydown', gallerySliderLeft);
  window.removeEventListener('keydown', gallerySliderRight);
  refs.lightbox.classList.remove('is-open');
  refs.modalImg.src = '';
}

function onOverlayClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onESCPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

function gallerySliderLeft(event) {
   if (event.code ==='ArrowLeft') {
       if(index < images.length - 1){
           index += 1;
           refs.modalImg.src = images[index - 1].original;
       }
  
    }
}

function gallerySliderRight(event) {
    if (event.code ===  'ArrowRight') {
        if(index > 0){
            index -= 1;
            refs.modalImg.src = images[index + 1].original;
        }
    }
}