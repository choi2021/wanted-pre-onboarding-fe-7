const BASE_URL = 'https://pre-onboarding-selection-task.shop';

export async function postSignUp(data) {
  const { email, password } = data;
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
    return await res.json();
  } catch (error) {
    return console.log(error);
  }
}

export async function postSignIn(data) {
  const { email, password } = data;
  try {
    const response = await fetch(`${BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
}
