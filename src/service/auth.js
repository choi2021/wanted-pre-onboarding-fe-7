export class AuthService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  async postSignUp(email, password) {
    return this.httpClient.fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  async postSignIn(email, password) {
    return this.httpClient.fetch('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }
}
