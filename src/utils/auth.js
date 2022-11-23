// const baseUrl = 'https://api.nmg-diploma.nomoredomains.icu';
const baseUrl = 'http://localhost:3001';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export const register = ({ name, email, password }) => {
  return fetch(`${baseUrl}/signup`, {
    credentials: 'include',
    method: 'POST',
    headers,
    body: JSON.stringify({
      name,
      email,
      password
    }),
  })
  .then(res => checkResponse(res));
}

export const authorize = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers,
    body: JSON.stringify({
      email,
      password
    }),
  })
  .then(res => checkResponse(res));
}

export const getContent = () => {
  return fetch(`${baseUrl}/users/me`, {
    credentials: 'include',
    method: 'GET',
    headers,
  })
  .then(res => checkResponse(res));
}

export const logout = () => {
  return fetch(`${baseUrl}/signout`, {
    credentials: 'include',
    method: 'DELETE',
    headers,
  })
  .then(res => checkResponse(res));
}