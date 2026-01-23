import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
    const markup = images
        .map(
            img => `
        <li class="image-wrapper">
          <a href="${img.largeImageURL}">
            <img src="${img.webformatURL}" alt="${img.tags}" />
          </a>
          <div class="stats-panel">
            <div class="stat">
              <span class="stat-title">Likes</span>
              <span class="stat-number">${img.likes}</span>
            </div>
            <div class="stat">
              <span class="stat-title">Views</span>
              <span class="stat-number">${img.views}</span>
            </div>
            <div class="stat">
              <span class="stat-title">Comments</span>
              <span class="stat-number">${img.comments}</span>
            </div>
            <div class="stat">
              <span class="stat-title">Downloads</span>
              <span class="stat-number">${img.downloads}</span>
            </div>
          </div>
        </li>
        `
        )
        .join('');

    gallery.innerHTML = markup;
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('hidden');
    loader.textContent = 'Loading images, please wait...'; // текст лоадера
}

export function hideLoader() {
    loader.classList.add('hidden');
}