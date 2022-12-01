class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _getResult = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._getResult);
  }
}

export default MoviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {'Content-Type': 'application/json'}
});