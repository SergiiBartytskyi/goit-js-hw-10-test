import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

function fetchBreeds() {
  axios.defaults.headers.common['x-api-key'] =
    'live_X9UOZdXCQ2YcgLrS1I0h1ymHjFZQgSsBM4Tb3ospE22EF5fL63ZuLn93DXCfkw4z';

  const url = `https://api.thecatapi.com/v1/breeds`;

  axios
    .get(url)
    .then(response => console.log(response))
    .catch(onError);
}

function onError() {
  Notify.failure('Oops! Something went wrong! Try reloading the page!', {
    position: 'center-top',
    fontSize: '20px',
    width: '350px',
  });
}

export { fetchBreeds };
