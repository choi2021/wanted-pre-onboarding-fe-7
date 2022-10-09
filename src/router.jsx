import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Todo from './pages/todo/todo';
import Auth from './pages/auth/auth';

function Router() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      navigate('/todo');
    } else {
      navigate('/');
    }
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Auth></Auth>}></Route>
      <Route path='/todo' element={<Todo></Todo>}></Route>
    </Routes>
  );
}

export default Router;
