import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './routes/login';
import { useEffect, useState } from 'react';
import Todo from './routes/todo';

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  useEffect(() => {
    const prevToken = localStorage.getItem('loginToken');
    prevToken && setToken(prevToken);
    if (token) {
      navigate('/todo');
    } else {
      navigate('/');
    }
  }, [token]);
  return (
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/todo' element={<Todo></Todo>}></Route>
    </Routes>
  );
}

export default App;
