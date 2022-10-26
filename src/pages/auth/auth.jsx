import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/auth_form/auth_form';
import S from './styles';

function Auth({ authService }) {
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

  const handleChange = useCallback((e, setInfo) => {
    const { name, value } = e.currentTarget;
    setInfo((prev) => {
      return {
        ...prev,
        [name]: value,
        isEmailValid:
          name === 'email' ? value.includes('@') : prev.isEmailValid,
        isPasswordValid:
          name === 'password' ? value.length >= 8 : prev.isPasswordValid,
      };
    });
  }, []);

  const handleLoginSubmit = useCallback(
    async (info) => {
      const { email, password } = info;
      const response = await authService.postSignIn(email, password);
      if ('access_token' in response) {
        navigate('/todo');
        localStorage.setItem('access_token', response.access_token);
      } else {
        setLoginMessage((prev) => {
          return {
            ...prev,
            ...response,
          };
        });
      }
    },
    [navigate]
  );

  const handleRegisterSubmit = useCallback(async (info) => {
    const { email, password } = info;
    const response = await authService.postSignUp(email, password);
    let message = response;
    if ('access_token' in response) {
      message = {
        message: `회원가입에 성공했습니다`,
        success: true,
      };
    }
    setRegisterMessage((prev) => {
      return {
        ...prev,
        ...message,
      };
    });
  }, []);

  return (
    <S.AuthLayout>
      <AuthForm
        process={'login'}
        onSubmit={handleLoginSubmit}
        onChange={handleChange}
        message={loginMessage}
        info={loginInfo}
        setInfo={setLoginInfo}
      ></AuthForm>
      <AuthForm
        process={'register'}
        onSubmit={handleRegisterSubmit}
        onChange={handleChange}
        message={registerMessage}
        info={registerInfo}
        setInfo={setRegisterInfo}
      ></AuthForm>
    </S.AuthLayout>
  );
}

export default Auth;
