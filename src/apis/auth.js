const BASE_URL = 'https://pre-onboarding-selection-task.shop';

class HTTPError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = `HTTPError`;
    this.statusCode = statusCode;
  }

  get codeToErrorMessage() {
    let result = { message: '', success: false };
    switch (this.statusCode) {
      case 400:
        result = {
          message: '동일한 이메일이 이미 존재합니다.',
          success: false,
        };
        break;
      case 401:
        result = {
          message: '이메일 혹은 비밀번호를 확인해주세요.',
          success: false,
        };
        break;
      case 404:
        result = {
          message: '해당 사용자가 존재하지 않습니다.',
          success: false,
        };
        break;
      default:
        throw new Error('Unknown Error');
    }
    return result;
  }
}

export async function postSignUp(email, password) {
  try {
    const res = await fetch(`${BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!res.ok) {
      console.log(`${res.status}에러가 발생했습니다`);
      throw new HTTPError(res.status, res.statusText);
    } else {
      return await res.json();
    }
  } catch (e) {
    return e.codeToErrorMessage;
  }
}

export async function postSignIn(email, password) {
  try {
    const res = await fetch(`${BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!res.ok) {
      console.log(`${res.status}에러가 발생했습니다`);
      throw new HTTPError(res.status, res.statusText);
    } else {
      return await res.json();
    }
  } catch (e) {
    return e.codeToErrorMessage;
  }
}
