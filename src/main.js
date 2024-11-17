import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

function showLoader() {
  loader.style.display = 'flex';
}

function hideLoader() {
  loader.style.display = 'none';
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const request = event.currentTarget.elements.searchRequest.value.trim();

  if (request === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a valid search term.',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  gallery.innerHTML = '';

  fetchImages(request)
    .then(images => {
      renderGallery(gallery, images);
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});