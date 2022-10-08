const BASE_URL = 'https://pre-onboarding-selection-task.shop';

export async function postSignUp(data) {
  const { email, password } = data;
  const response = await fetch(`${BASE_URL}/auth/signup`, {
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
}

export async function postSignIn(data) {
  const { email, password } = data;
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
}

export function postCreateTodo(todo) {
  return fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    body: JSON.stringify({
      todo,
    }),
  });
}

export function getTodos() {
  return fetch(`${BASE_URL}/todos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
}

export function updateTodos(obj) {
  const { todo, isCompleted } = obj;
  return fetch(`${BASE_URL}/todos/${obj.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    body: JSON.stringify({
      todo,
      isCompleted,
    }),
  });
}

export function deleteTodo(id) {
  return fetch(`${BASE_URL}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
}
