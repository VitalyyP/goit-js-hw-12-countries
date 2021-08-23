import './sass/main.scss';
import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import debounce from 'lodash.debounce';

export default class newFoundedCoutry {
  constructor() {}

  fetchCountry() {
    const url = 'https://restcountries.eu/rest/v2/name/{name}';
    return fetch(url)
      .then(response => response.json())
      .then();
  }
}
