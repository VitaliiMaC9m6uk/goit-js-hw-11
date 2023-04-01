import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderImages(images) {  
  console.log(images)
  const galleryEl = document.querySelector('.gallery__container')
  const arrayImages = images.hits;  
  const markingImages = arrayImages.map(image => `
    <div class="photo-card gallery__item" >        
        <a href="${image.largeImageURL}"><img class="image" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>  
        <div class="info">
            <p class="info-item">
            <b>Likes: ${image.likes}</b>
            </p>
            <p class="info-item">
            <b>Views: ${image.views}</b>
            </p>
            <p class="info-item">
            <b>Comments: ${image.comments}</b>
            </p>
            <p class="info-item">
            <b>Downloads: ${image.downloads}</b>
            </p>
        </div>
    </div>`).join("");      
    galleryEl.insertAdjacentHTML('beforeend',markingImages);
  gallery.refresh()
};
let gallery = new SimpleLightbox('.gallery__container a');

export const updateLoadButton = (currentPage,totalHits) => {
  const btn = document.querySelector('.load-more');  
  if (Math.ceil(totalHits/40)<= btn.dataset.page) {
    btn.style.display = 'none';
    Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
    return;
  }
  btn.style.display='block';
  btn.dataset.page = Number(currentPage) + 1;
};

export const updateTotal = (total) => {
  let el = document.querySelector('.total');
  if (!el) {
    el = document.createElement('label');
    el.classList.add('total');
    const container = document.querySelector('.search-form');
    container.append(el);
  }
    
  el.textContent = `Total Images: ${total}`;
};

export const clearArticles = () => {
    const newsContainer = document.querySelector('.gallery__container');
    newsContainer.innerHTML = '';
};