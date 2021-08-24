const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

export default class fetchCountries {
  constructor() {
    this.searchQuery = '';
    // this.length = '';
  }

  fetchCountry(searchQuery) {
    const url = `${BASE_URL}${this.searchQuery}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // length(data);
      })
      .catch(err => console.log(err));
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
//   get length() {
//     return this.length;
//   }

//   set length(data) {
//     this.length = data.length;
//   }
// }
