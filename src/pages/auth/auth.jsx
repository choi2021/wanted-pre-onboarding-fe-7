import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postSignIn, postSignUp } from '../../apis/auth';
import AuthForm from '../../components/auth_form/auth_form';
import S from './styles';

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
    message: '',
    success: false,
  });

  const [loginMessage, setLoginMessage] = useState({
    message: '',
    success: false,
  });

  const handleChange = (e, setInfo) => {
    const { name, value } = e.currentTarget;
    setInfo((prev) => {
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
    if (data.statusCode >= 400) {
      if (data.statusCode == 401) {
        setMessage((prev) => {
          return {
            ...prev,
            message: '이메일 혹은 비밀번호를 확인해주세요.',
            success: false,
          };
        });
        return;
      }
      setMessage((prev) => {
        return {
          ...prev,
          message: data.message,
          success: false,
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
        message: `${'login' ? '로그인' : '회원가입'}에 성공했습니다`,
        success: true,
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
    } else {
      postSignUp(obj).then((data) => {
        exceptionTest(data, setMessage, process);
      });
    }
  };

  return (
    <S.AuthLayout>
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
    </S.AuthLayout>
  );
}

export default Auth;
