import React, { useEffect, useRef, useState } from 'react';
import { deleteTodo, getTodos, postCreateTodo, updateTodos } from '../../api';
import TodoItem from '../../components/todo_item/todo_Item';
import S from './styles';

function Todo() {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (!value) {
      return;
    }
    postCreateTodo(value)
      .then((res) => res.json())
      .then((data) => setTodos((prev) => [...prev, data]));
    inputRef.current.value = '';
  };

  const onDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
    deleteTodo(id);
  };

  const onUpdate = (todo) => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === todo.id) {
          return todo;
        }
        return item;
      })
    );
    updateTodos(todo);
  };
  return (
    <S.TodoLayout>
      <header>TO DO</header>
      <S.TodoContent>
        <S.TodoForm onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type='text'
            id='todoInput'
            placeholder='오늘의 할 일을 입력해주세요'
          />
          <button>Add</button>
        </S.TodoForm>
        <S.TodoList>
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              todoItem={item}
              onUpdate={onUpdate}
              onDelete={onDelete}
            ></TodoItem>
          ))}
        </S.TodoList>
      </S.TodoContent>
    </S.TodoLayout>
  );
}

export default Todo;
