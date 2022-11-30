class MainApi {
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

  getInitialSavedMovies() {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      headers: this._headers,
    })
    .then(this._getResult);
  }

  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
    .then(this._getResult);
  }

  delMovies(movie) {
    return fetch(`${this._url}/movies/${movie._id}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._getResult);
  } 

  setLikeMovies(movie) {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      }),
    })
    .then(this._getResult);
  } 
}

const mainApi = new MainApi({
  baseUrl: 'http://localhost:3001',
  // baseUrl: 'https://api.nmg-diploma.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default mainApi;