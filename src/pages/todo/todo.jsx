import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import {
  deleteTodo,
  getTodos,
  postCreateTodo,
  updateTodos,
} from '../../apis/todo';
import TodoForm from '../../components/todo_form/todo_form';
import TodoItem from '../../components/todo_item/todo_Item';
import S from './styles';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [isBlank, setIsBlank] = useState(false);
  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  const onSubmit = (e, ref) => {
    e.preventDefault();
    const value = ref.current.value;
    if (!value) {
      setIsBlank(true);
      return;
    }
    postCreateTodo(value).then((data) => setTodos((prev) => [...prev, data]));
    ref.current.value = '';
    setIsBlank(false);
  };

  const onDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodo(id);
  }, []);

  const onUpdate = useCallback((todo) => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === todo.id) {
          return todo;
        }
        return item;
      })
    );
    updateTodos(todo);
  }, []);
  return (
    <S.TodoLayout>
      <header>TO DO</header>
      <S.TodoContent>
        <TodoForm onSubmit={onSubmit} isBlank={isBlank}></TodoForm>
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
