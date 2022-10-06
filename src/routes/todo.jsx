import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from '../components/todo_Item';

const TodoLayout = styled.section`
  max-width: 30rem;
  padding: 1em;
  margin: auto;
  height: 100%;
  background-color: lightpink;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  header {
    position: absolute;
    top: 2em;
    font-size: 2rem;
  }
`;

const TodoForm = styled.form`
  position: relative;
  top: -5rem;
  width: 100%;
  display: flex;
  input {
    border: none;
    outline: none;
    padding: 0.5em 1em;
    font-size: 1.1rem;
    text-align: center;
    flex: 80%;
    border-radius: 0.5em;
  }
  button {
    flex: 20%;
    height: 100%;
    position: absolute;
    right: 0;
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

function Todo(props) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: '과제하기',
      isCompleted: false,
      userId: 1,
    },
    {
      id: 2,
      todo: '과제하기',
      isCompleted: false,
      userId: 1,
    },
  ]);

  return (
    <TodoLayout>
      <header>TO DO</header>
      <TodoForm>
        <input
          type='text'
          id='todoInput'
          placeholder='오늘의 할 일을 입력해주세요'
        />
        <button>Add</button>
      </TodoForm>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo}></TodoItem>
        ))}
      </TodoList>
    </TodoLayout>
  );
}

export default Todo;
