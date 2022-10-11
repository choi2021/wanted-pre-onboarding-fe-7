const BASE_URL = 'https://pre-onboarding-selection-task.shop';

export async function postCreateTodo(todo) {
  try {
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
    return await res.json();
  } catch (error) {
    return console.log(error);
  }
}

export async function getTodos() {
  try {
    const res = await fetch(`${BASE_URL}/todos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    return await res.json();
  } catch (error) {
    return console.log(error);
  }
}

export async function updateTodos(obj) {
  const { todo, isCompleted } = obj;
  try {
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
    return await res.json();
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteTodo(id) {
  try {
    const res = await fetch(`${BASE_URL}/todos/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    return await res.json();
  } catch (error) {
    return console.log(error);
  }
}
