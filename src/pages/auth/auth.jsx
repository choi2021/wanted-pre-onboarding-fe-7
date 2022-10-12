import React, { useCallback, useState } from 'react';
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
    (info) => {
      const { email, password } = info;
      postSignIn(email, password) //
        .then((data) => {
          if ('access_token' in data) {
            navigate('/todo');
            localStorage.setItem('access_token', data.access_token);
          } else {
            setLoginMessage((prev) => {
              return {
                ...prev,
                ...data,
              };
            });
          }
        });
    },
    [navigate]
  );

  const handleRegisterSubmit = useCallback((info) => {
    const { email, password } = info;
    postSignUp(email, password) //
      .then((data) => {
        if ('access_token' in data) {
          data = {
            message: `회원가입에 성공했습니다`,
            success: true,
          };
        }
        setRegisterMessage((prev) => {
          return {
            ...prev,
            ...data,
          };
        });
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
