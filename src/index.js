import { fetchBreeds } from './js/cat-api';

import SlimSelect from 'slim-select';
import './slimselect.css';

new SlimSelect({
  select: '.breed-select',
});

const refs = {
  selectRef: document.querySelector('.breed-select'),
  loader: document.querySelector('p.loader'),
};

// refs.selectRef.id = 1;
// console.log(refs.selectRef);
// <option value="dog">Dog</option>;
fetchBreeds();
