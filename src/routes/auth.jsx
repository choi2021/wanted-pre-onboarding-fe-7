import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { postSignIn, postSignUp } from '../api';
import AuthForm from '../components/auth_form';

const AuthLayout = styled.section`
  max-width: 40rem;
  margin: auto;
  height: 100%;
  background-color: lightblue;
  color: white;
  display: flex;
  flex-direction: column;
`;

function Auth() {
  const navigate = useNavigate('/');
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
    isEmailValid: false,
    isPasswordValid: false,
  });

  const [registerInfo, setRegisterInfo] = useState({
    email: '',
    password: '',
    isEmailValid: false,
    isPasswordValid: false,
  });

  const [registerMessage, setRegisterMessage] = useState({
    registerMessage: '',
    registerSuccess: false,
  });

  const [loginMessage, setLoginMessage] = useState({
    loginMessage: '',
    loginSuccess: false,
  });

  const handleChange = (e, fn) => {
    const { name, value } = e.currentTarget;
    fn((prev) => {
      return {
        ...prev,
        [name]: value,
        isEmailValid: name == 'email' ? value.includes('@') : prev.isEmailValid,
        isPasswordValid:
          name == 'password' ? value.length >= 8 : prev.isPasswordValid,
      };
    });
  };

  const exceptionTest = (data, setMessage, process) => {
    let message = '';
    if (data.statusCode >= 400) {
      message = data.message;
      setMessage((prev) => {
        return {
          ...prev,
          [`${process}Message`]: message,
          [`${process}Success`]: false,
        };
      });
      return;
    }
    if (process == 'login') {
      navigate('/todo');
      localStorage.setItem('access_token', data.access_token);
    }
    setMessage((prev) => {
      return {
        ...prev,
        [`${process}Message`]: `${process}에 성공했습니다`,
        [`${process}Success`]: true,
      };
    });
  };

  const handleSubmit = (info, process, setMessage) => {
    const { email, password } = info;
    const obj = { email, password };
    if (process == 'login') {
      postSignIn(obj).then((data) => {
        exceptionTest(data, setMessage, process);
      });
    }
  };

  return (
    <AuthLayout>
      <AuthForm
        process={'login'}
        onSubmit={handleSubmit}
        onChange={handleChange}
        message={loginMessage}
        setMessage={setLoginMessage}
        info={loginInfo}
        setInfo={setLoginInfo}
        exceptionTest={exceptionTest}
      ></AuthForm>
      <AuthForm
        process={'register'}
        onSubmit={handleSubmit}
        onChange={handleChange}
        message={registerMessage}
        setMessage={setRegisterMessage}
        info={registerInfo}
        setInfo={setRegisterInfo}
      ></AuthForm>
    </AuthLayout>
  );
}

export default Auth;
