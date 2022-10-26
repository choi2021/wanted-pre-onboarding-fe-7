export class TodoService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  async create(todo) {
    return this.httpClient.fetch('/todos', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      body: JSON.stringify({
        todo,
      }),
    });
  }

  async get() {
    return this.httpClient.fetch('/todos', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  }

  async update(obj) {
    const { todo, isCompleted } = obj;
    return this.httpClient.fetch(`/todos/${obj.id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      body: JSON.stringify({
        todo,
        isCompleted,
      }),
    });
  }

  async delete(id) {
    return this.httpClient.fetch(`/todos/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  }
}
