const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

export default class fetchCountries {
  constructor() {
    this.searchQuery = '';
  }

  fetchCountry(searchQuery) {
    const url = `${BASE_URL}${this.searchQuery}`;

    return fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
