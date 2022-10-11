const BASE_URL = 'https://pre-onboarding-selection-task.shop';

export async function postSignUp(data) {
  const { email, password } = data;
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
    console.log(`${res.status} 에러가 발생했습니다`);
  }
  return await res.json();
}

export async function postSignIn(data) {
  const { email, password } = data;
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
    console.log(`${res.status} 에러가 발생했습니다`);
  }
  return await res.json();
}
