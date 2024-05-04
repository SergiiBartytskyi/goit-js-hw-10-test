import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
const selectRef = document.querySelector('select.breed-select');
const loader = document.querySelector('p.loader');
const error = document.querySelector('p.error');

axios.defaults.headers.common['x-api-key'] =
  'live_X9UOZdXCQ2YcgLrS1I0h1ymHjFZQgSsBM4Tb3ospE22EF5fL63ZuLn93DXCfkw4z';

function fetchBreeds() {
  const BASE_URL = `https://api.thecatapi.com/v1/breeds`;

  return axios
    .get(BASE_URL)
    .then(response => {
      loader.classList.add('disable');
      selectRef.classList.add('enable');

      return response.data;
    })
    .catch(data => {
      if (data.status !== 200) {
        error.classList.add('enable');
        loader.classList.add('disable');
      }
      onError();
    });
}

async function fetchCatByBreed(breedId) {
  const BASE_URL = `https://api.thecatapi.com/v1/images/search`;

  return axios
    .get(`${BASE_URL}?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(data => {
      if (data.status !== 200) {
        error.classList.add('enable');
        loader.classList.add('disable');
        // selectRef.classList.add('disable');
      }
      onError();
    });
}

function onError() {
  Notify.failure('Oops! Something went wrong! Try reloading the page!', {
    position: 'center-top',
    fontSize: '20px',
    width: '350px',
  });
}

export { fetchBreeds, fetchCatByBreed };
