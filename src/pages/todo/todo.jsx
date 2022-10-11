import React, { useEffect, useRef, useState } from 'react';
import {
  deleteTodo,
  getTodos,
  postCreateTodo,
  updateTodos,
} from '../../apis/todo';
import TodoItem from '../../components/todo_item/todo_Item';
import S from './styles';

function Todo() {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);
  const [isBlank, setIsBlank] = useState(false);
  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (!value) {
      setIsBlank(true);
      return;
    }
    postCreateTodo(value).then((data) => setTodos((prev) => [...prev, data]));
    inputRef.current.value = '';
    setIsBlank(false);
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
            placeholder={
              isBlank
                ? '내용이 비어있습니다.😅'
                : '오늘의 투두를 작성해주세요😀'
            }
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
