const BASE_URL = 'https://pre-onboarding-selection-task.shop';

export async function postCreateTodo(todo) {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    body: JSON.stringify({
      todo,
    }),
  });
  if (!res.ok) {
    console.log(`${res.status} 에러가 발생했습니다`);
  }
  return await res.json();
}

export async function getTodos() {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
  if (!res.ok) {
    console.log(`${res.status} 에러가 발생했습니다`);
  }
  return await res.json();
}

export async function updateTodos(obj) {
  const { todo, isCompleted } = obj;
  const res = await fetch(`${BASE_URL}/todos/${obj.id}`, {
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
  if (!res.ok) {
    console.log(`${res.status} 에러가 발생했습니다`);
  }
  return await res.json();
}

export async function deleteTodo(id) {
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
  if (!res.ok) {
    console.log(`${res.status} 에러가 발생했습니다`);
  }
}
