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

  getInitialCards() {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      headers: this._headers,
    })
    .then(this._getResult);
  }

  // getUserInfo() {
  //   return fetch(`${this._url}/users/me`, {
  //     credentials: 'include',
  //     headers: this._headers
  //   })
  //   .then(this._getResult)
  // } 

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

  
  // setAvatar(avatar) {
  //   return fetch(`${this._url}/users/me/avatar`, {
  //     credentials: 'include',
  //     method: 'PATCH',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       avatar: avatar
  //     })
  //   })
  //   .then(this._getResult);
  // } 

  addCards(data) {
    return fetch(`${this._url}/cards`, {
      credentials: 'include',
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._getResult);
  } 

  delCard(card) {
    return fetch(`${this._url}/cards/${card._id}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._getResult);
  } 

  setLikeCard(card, isLike) {
    return fetch(`${this._url}/cards/${card._id}/likes`, {
      credentials: 'include',
      method: isLike ? 'DELETE' : 'PUT',
      headers: this._headers,
    })
    .then(this._getResult);
  } 
}

const mainApi = new MainApi({
  baseUrl: 'http://localhost:3001',
  // baseUrl: 'api.nmg-diploma.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default mainApi;