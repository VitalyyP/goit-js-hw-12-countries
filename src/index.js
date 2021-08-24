import './sass/main.scss';
import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import debounce from 'lodash.debounce';

import FetchCountries from './js/fetchCountries';

const refSearch = document.querySelector('#search');
const refRoot = document.querySelector('.root');

const newCoutries = new FetchCountries();

refSearch.addEventListener('input', debounce(getCountry, 500));


function getCountry(e) {
  getInput(e);
  // console.log(newCoutries.length);
  return newCoutries.fetchCountry();
}

function getInput(e) {
  newCoutries.query = e.target.value;
  // console.log(searchQuery);
}




