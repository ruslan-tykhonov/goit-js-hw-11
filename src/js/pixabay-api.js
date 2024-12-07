import markup from '../js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { hideLoader } from '../main.js';

let lightbox = new SimpleLightbox('.gallery .gallery-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const API_KEY = '47504793-d73e7cf3fd6e66d39d7291c94';

const gallery = document.querySelector('.gallery');

export function fetchFoo(info) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: info,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#ffffff',
          messageSize: '16px',
          titleColor: '#ffffff',
        });
      }
      gallery.innerHTML = '';
      console.log(data);

      gallery.insertAdjacentHTML('beforeend', markup(data.hits));
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `An error occurred: ${error.message}`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#ffffff',
        messageSize: '16px',
        titleColor: '#ffffff',
      });
    })
    .finally(() => {
      hideLoader();
    });
}