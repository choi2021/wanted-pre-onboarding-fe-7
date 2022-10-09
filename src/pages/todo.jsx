import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { deleteTodo, getTodos, postCreateTodo, updateTodos } from '../api';
import TodoItem from '../components/todo_Item';

const TodoLayout = styled.section`
  max-width: 40rem;
  padding: 1em;
  margin: auto;
  height: 100%;
  background-color: lightpink;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    font-size: 2rem;
    flex: 20%;
  }
`;

const TodoContent = styled.div`
  width: 100%;
  flex: 80%;
`;

const TodoForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 2em 0;
  height: 3rem;
  input {
    height: 100%;
    border: none;
    outline: none;
    font-size: 1.1rem;
    text-align: center;
    flex: 80%;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
  }
  button {
    flex: 20%;
    height: 100%;
    background-color: lightcoral;
    color: white;
    font-size: 0.9rem;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    padding: 0.2em 0.5em;
  }
`;

const TodoList = styled.ul`
  width: 100%;
`;

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
    <TodoLayout>
      <header>TO DO</header>
      <TodoContent>
        <TodoForm onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type='text'
            id='todoInput'
            placeholder='오늘의 할 일을 입력해주세요'
          />
          <button>Add</button>
        </TodoForm>
        <TodoList>
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              todoItem={item}
              onUpdate={onUpdate}
              onDelete={onDelete}
            ></TodoItem>
          ))}
        </TodoList>
      </TodoContent>
    </TodoLayout>
  );
}

export default Todo;
