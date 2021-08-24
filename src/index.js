import './sass/main.scss';
import countryTpl from '../templates/country.hbs';
import { alert, defaults } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import debounce from 'lodash.debounce';

import FetchCountries from './js/fetchCountries';

defaults.width = '800px';
defaults.delay = '2000';

const refSearch = document.querySelector('#search');
const refRoot = document.querySelector('.root');

const newCoutries = new FetchCountries();

refSearch.addEventListener('input', debounce(getCountry, 500));


function getCountry(e) {
  getInput(e);
  newCoutries.fetchCountry().then(data => {
   
    if (data.length > 10) {
      alert('Too many matches found. Please enter a more specific query!');
      refRoot.innerHTML = '';
      return;
    }

    if (data.length > 1) {
      makeupList(data);
      return;
    }

    refRoot.innerHTML = countryTpl(data[0]);
    const refCountryPopulation = document.querySelector('.country__population');

    const commanPopulation = data[0].population.toLocaleString('ru');
    refCountryPopulation.innerHTML = `<span class='bold'>Population: </span>${commanPopulation}`;
  });
}

function makeupList(data) {
   refRoot.innerHTML = data.reduce((acc, el) => acc + `<li>${el.name}</li>`, '');
}

function getInput(e) {
  newCoutries.query = e.target.value;
}

