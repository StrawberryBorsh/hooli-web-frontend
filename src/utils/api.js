/** Класс API для работы с сервером.
 * Описание методов для работы с данными с сервера.
 */

class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  setToken(token) {
    this._headers = {
      ...this._headers,
      Authorization: `Bearer ${token}`,
    }
  }

  _getResponse(res) {
    if(res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Что- то пошло не так: ${res.status}`);
    }
  }

  getCard() {
    return fetch(`${this.url}/weatherforecast/test`, {
      method: 'GET'
    })
      .then((res) => this._getResponse(res));
  }
}

// Объект для работы с API (для экспорта)
const api = new Api({
  url: 'http://84.252.142.16',
  headers: {
    "Content-Type": "application/json",
  },
  mode: 'no-cors'
});

export default api;
