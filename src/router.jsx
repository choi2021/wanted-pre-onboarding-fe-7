import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Todo from './pages/todo/todo';
import Auth from './pages/auth/auth';

function Router({ authService, todoService }) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      navigate('/todo');
    } else {
      navigate('/');
    }
  }, [navigate]);
  return (
    <Routes>
      <Route path='/' element={<Auth authService={authService}></Auth>}></Route>
      <Route
        path='/todo'
        element={<Todo todoService={todoService}></Todo>}
      ></Route>
    </Routes>
  );
}

export default Router;
