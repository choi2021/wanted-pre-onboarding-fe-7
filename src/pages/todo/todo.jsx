import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import TodoForm from '../../components/todo_form/todo_form';
import TodoItem from '../../components/todo_item/todo_Item';
import S from './styles';

function Todo({ todoService }) {
  const [todos, setTodos] = useState([]);
  const [isBlank, setIsBlank] = useState(false);
  useEffect(() => {
    todoService.get().then((todos) => {
      setTodos(todos);
    });
  }, []);

  const handleSubmit = async (e, ref) => {
    e.preventDefault();
    const value = ref.current.value;
    if (!value) {
      setIsBlank(true);
      return;
    }
    const newTodo = await todoService.create(value);
    setTodos((prev) => [...prev, newTodo]);
    ref.current.value = '';
    setIsBlank(false);
  };

  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    todoService.delete(id);
  }, []);

  const handleUpdate = useCallback((todo) => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === todo.id) {
          return todo;
        }
        return item;
      })
    );
    todoService.update(todo);
  }, []);
  return (
    <S.TodoLayout>
      <header>TO DO</header>
      <S.TodoContent>
        <TodoForm onSubmit={handleSubmit} isBlank={isBlank}></TodoForm>
        <S.TodoList>
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              todoItem={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            ></TodoItem>
          ))}
        </S.TodoList>
      </S.TodoContent>
    </S.TodoLayout>
  );
}

export default Todo;
