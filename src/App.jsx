import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Todo from './routes/todo';
import Auth from './routes/auth';

function App() {
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

export default App;
