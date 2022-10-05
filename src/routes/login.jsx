import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { postSignIn, postSignUp } from '../api';

const LoginLayout = styled.section`
  width: 30rem;
  margin: auto;
  height: 100%;
  background-color: lightblue;
  color: white;
  display: flex;
  flex-direction: column;
`;

const LoginForm = styled.form`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    font-size: 1.2rem;
    margin-bottom: 0.3em;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;

const RegisterForm = styled(LoginForm)``;

const LoginInput = styled.input`
  width: 15rem;
  height: 1.5rem;
  border-radius: 1em;
  margin-bottom: 1em;
  outline: none;
  text-align: center;
`;

const RegisterInput = styled(LoginInput)``;

const SubmitBtn = styled.button`
  background-color: ${(props) =>
    props.disabled ? 'rgba(0,0,0,0.2)' : 'white'};
  padding: 0.5em 1em;
  font-size: 1.1rem;
  border-radius: 1em;
  cursor: pointer;
`;

const Message = styled.div`
  color: ${(props) => (props.success ? 'white' : 'red')};
  margin-bottom: 0.5em;
`;

function Login(props) {
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

  const [message, setMessage] = useState({
    loginMessage: '',
    registerMessage: '',
    loginSuccess: false,
    registerSuccess: false,
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.currentTarget;
    setLoginInfo((prev) => {
      return {
        ...prev,
        [name]: value,
        isEmailValid: name == 'email' ? value.includes('@') : prev.isEmailValid,
        isPasswordValid:
          name == 'password' ? value.length >= 8 : prev.isPasswordValid,
      };
    });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterInfo((prev) => {
      return {
        ...prev,
        [name]: value,
        isEmailValid: name == 'email' ? value.includes('@') : prev.isEmailValid,
        isPasswordValid:
          name == 'password' ? value.length >= 8 : prev.isPasswordValid,
      };
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    postSignIn({
      email,
      password,
    })
      .then((response) => response.json())
      .then((data) => {
        let loginMessage = '';
        if (data.statusCode >= 400) {
          if (data.statusCode === 401) {
            loginMessage = '유효하지 않은 이메일입니다';
          }
          setMessage((prev) => {
            return {
              ...prev,
              loginMessage,
              loginSuccess: false,
            };
          });
          return;
        }
        setMessage((prev) => {
          return {
            ...prev,
            loginMessage: '로그인에 성공했습니다',
            loginSuccess: true,
          };
        });
      });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { email, password } = registerInfo;
    postSignUp({
      email,
      password,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode >= 400) {
          setMessage((prev) => {
            return {
              ...prev,
              registerMessage: data.message,
              registerSuccess: false,
            };
          });
          return;
        }
        setMessage((prev) => {
          return {
            ...prev,
            registerMessage: '회원가입에 성공했습니다',
            registerSuccess: true,
          };
        });
      });
  };

  return (
    <LoginLayout>
      <LoginForm onSubmit={handleLoginSubmit}>
        <h1>Sign In</h1>
        <div>
          <label htmlFor='login-email'>Email</label>
          <LoginInput
            name='email'
            onChange={handleLoginChange}
            id='login-email'
            placeholder='아이디를 입력해주세요'
          ></LoginInput>
        </div>
        <div>
          <label htmlFor='login-password'>Password</label>
          <LoginInput
            name='password'
            onChange={handleLoginChange}
            id='login-password'
            placeholder='비밀번호를 입력해주세요'
          ></LoginInput>
        </div>
        {message.loginMessage && (
          <Message success={message.loginSuccess}>
            {message.loginMessage}
          </Message>
        )}
        <SubmitBtn
          onSubmit={handleLoginSubmit}
          disabled={!(loginInfo.isEmailValid && loginInfo.isPasswordValid)}
        >
          Login
        </SubmitBtn>
      </LoginForm>
      <RegisterForm onSubmit={handleRegisterSubmit}>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor='register-email'>Email</label>
          <RegisterInput
            onChange={handleRegisterChange}
            placeholder='아이디를 입력해주세요'
            id='register-email'
            name='email'
          ></RegisterInput>
        </div>
        <div>
          <label htmlFor='register-password'>Password</label>
          <RegisterInput
            onChange={handleRegisterChange}
            placeholder='비밀번호를 입력해주세요'
            id='register-password'
            name='password'
          ></RegisterInput>
        </div>
        {message.registerMessage && (
          <Message success={message.registerSuccess}>
            {message.registerMessage}
          </Message>
        )}
        <SubmitBtn
          disabled={
            !(registerInfo.isEmailValid && registerInfo.isPasswordValid)
          }
        >
          Submit
        </SubmitBtn>
      </RegisterForm>
    </LoginLayout>
  );
}

export default Login;
