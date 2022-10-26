import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { HttpClient } from './network/http';
import { AuthService } from './service/auth';

const baseURL = process.env.REACT_APP_BASE_URL;
const root = ReactDOM.createRoot(document.getElementById('root'));
const httpClient = new HttpClient(baseURL);
const authService = new AuthService(httpClient);
const todoService = new TodoService(httpClient);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router authService={authService} />
    </BrowserRouter>
  </React.StrictMode>
);
