import React, { useRef, useState } from 'react';
import styled from 'styled-components';

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

function Login(props) {
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const registerEmailRef = useRef();
  const registerPasswordRef = useRef();

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
      const obj = {
        ...prev,
        [name]: value,
        isEmailValid: name == 'email' ? value.includes('@') : prev.isEmailValid,
        isPasswordValid:
          name == 'password' ? value.length >= 8 : prev.isPasswordValid,
      };
      console.log(obj);
      return obj;
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <LoginLayout>
      <LoginForm onSubmit={handleLoginSubmit}>
        <h1>Sign In</h1>
        <div>
          <label htmlFor='login-email'>Email</label>
          <LoginInput
            ref={loginEmailRef}
            name='email'
            onChange={handleLoginChange}
            id='login-email'
            placeholder='아이디를 입력해주세요'
          ></LoginInput>
        </div>
        <div>
          <label htmlFor='login-password'>Password</label>
          <LoginInput
            ref={loginPasswordRef}
            name='password'
            onChange={handleLoginChange}
            id='login-password'
            placeholder='비밀번호를 입력해주세요'
          ></LoginInput>
        </div>
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
            ref={registerEmailRef}
            onChange={handleRegisterChange}
            placeholder='아이디를 입력해주세요'
            id='register-email'
            name='email'
          ></RegisterInput>
        </div>
        <div>
          <label htmlFor='register-password'>Password</label>
          <RegisterInput
            ref={registerPasswordRef}
            onChange={handleRegisterChange}
            placeholder='비밀번호를 입력해주세요'
            id='register-password'
            name='password'
          ></RegisterInput>
        </div>
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
