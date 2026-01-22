import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Ініціалізація SimpleLightbox для галереї
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

// Створення карток галереї
export function createGallery(images) {
    const markup = images
        .map(
            img => `
      <li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${img.likes}</p>
          <p><b>Views:</b> ${img.views}</p>
          <p><b>Comments:</b> ${img.comments}</p>
          <p><b>Downloads:</b> ${img.downloads}</p>
        </div>
      </li>
    `
        )
        .join('');

    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh(); // Оновлюємо SimpleLightbox після додавання карток
}

// Очищаємо галерею перед новим пошуком
export function clearGallery() {
    gallery.innerHTML = '';
}

// Показуємо лоадер перед запитом
export function showLoader() {
    loader.classList.remove('hidden');
}

// Прибираємо лоадер після завершення запиту
export function hideLoader() {
    loader.classList.add('hidden');
}
