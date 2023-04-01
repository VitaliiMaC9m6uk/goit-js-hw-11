import './css/styles.css';
import Notiflix from 'notiflix';
import { getFoto } from "./apiClient";
import { renderImages } from "./renderFoto";
import { updateLoadButton } from './renderFoto';
import { updateTotal } from './renderFoto';
import { clearArticles } from './renderFoto';

const formEl = document.querySelector('#search-form');

const fetchImage = (search, page) => getFoto(search, page)
    .then(
        response => {
            console.log(response)
            if (response.totalHits===0) {
                return Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
            } if (page < 2) {
              Notiflix.Notify.success(`Hooray! We found ${response.totalHits} images.`);  
            }
            renderImages(response);
            if ((response.totalHits-40)>0) {
             updateLoadButton(page,response.totalHits);   
            }            
            updateTotal(response.totalHits);
        }
    )

formEl.addEventListener('submit', event => {
    event.preventDefault();   
    const {
        elements:{searchQuery}
    } = event.currentTarget;
    const search = searchQuery.value; 
    if (search.trim() !== "") {
       clearArticles();
        fetchImage(search.replace(" ","+"),1) 
    }    
});

document.querySelector('.load-more').addEventListener('click', () => {
    const page = document.querySelector('.load-more').dataset.page;
    const search = document.querySelector('input').value;

    fetchImage(search.replace(" ","+"), page);
});