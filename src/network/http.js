import HTTPError from './httpError';

export class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetch(url, options) {
    const res = await fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    try {
      if (!res.ok) {
        console.error(`${res.status}에러가 발생했습니다`);
        throw new HTTPError(res.status, res.statusText);
      } else {
        return await res.json();
      }
    } catch (e) {
      return e.codeToErrorMessage;
    }
  }
}
