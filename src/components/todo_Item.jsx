import React from 'react';
import styled from 'styled-components';

const TodoLayout = styled.li`
  padding: 0.5em 1em;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 0.5em;
  color: black;
  align-items: center;
  position: relative;
  font-size: 1.2rem;
  margin-bottom: 0.5em;
  button {
    flex: 10%;
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

function TodoItem({ todo, isCompleted, userId }) {
  return (
    <TodoLayout>
      <span>{todo}</span>
      <button>{isCompleted ? 'Completed🙆‍♀️' : 'Not yet 🙅‍♂️'}</button>
    </TodoLayout>
  );
}

export default TodoItem;
