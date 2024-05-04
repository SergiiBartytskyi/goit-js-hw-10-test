import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

import SlimSelect from 'slim-select';
import '../node_modules/slim-select/dist/slimselect.css';

const refs = {
  selectRef: document.querySelector('select.breed-select'),
  loader: document.querySelector('p.loader'),
  list: document.querySelector('.cat-info'),
};

refs.selectRef.addEventListener('change', onClick);
function createElement(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

fetchBreeds()
  .then(data => {
    refs.selectRef.innerHTML = createElement(data);
    new SlimSelect({
      // select: document.querySelector('select.breed-select'),
      select: refs.selectRef,
    });
  })
  .catch(err => console.log(err));

function onClick(e) {
  e.preventDefault();
  refs.list.innerHTML = '';
  refs.loader.classList.remove('disable');
  fetchCatByBreed(e.currentTarget.value).then(
    ({
      0: {
        url,
        breeds: {
          0: { name, description, temperament },
        },
      },
    }) => {
      refs.loader.classList.add('disable');
      refs.list.innerHTML = createCat(url, name, description, temperament);
    }
  );
}

function createCat(url, name, description, temperament) {
  return `
  <img src="${url}" alt="${name} width="640">
  <div class="cat-wrap">
      <h2>${name}</h2>
      <p>${description}</p>
      <p><b>Temperament:</b> ${temperament}</p>
  </div>
      `;
}
