import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './routes/login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/todo'></Route>
    </Routes>
  );
}

export default App;
