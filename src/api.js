const BASE_URL = 'https://pre-onboarding-selection-task.shop/';

export function postSignUp(data) {
  const { email, password } = data;
  return fetch(`${BASE_URL}auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(console.log);
}

export function postSignIn(data) {
  const { email, password } = data;
  return fetch(`${BASE_URL}auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(console.log);
}
