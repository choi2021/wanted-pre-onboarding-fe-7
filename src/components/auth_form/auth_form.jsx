import React, { memo, useCallback } from 'react';
import AuthInput from '../auth_input/auth_input';
import S from './styles';

function AuthForm({
  process,
  onSubmit,
  onChange,
  message,
  setMessage,
  info,
  setInfo,
}) {
  const handleChange = useCallback((e) => {
    onChange(e, setInfo);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(info, process, setMessage);
  };
  return (
    <S.AuthFormLayout onSubmit={handleSubmit}>
      <h1>{process === 'login' ? '로그인' : '회원가입'}</h1>
      <AuthInput
        onChange={handleChange}
        process={process}
        name={'email'}
      ></AuthInput>
      <AuthInput
        onChange={handleChange}
        process={process}
        name={'password'}
      ></AuthInput>
      {message.message ? (
        <S.Message success={message.success}>{message.message}</S.Message>
      ) : null}
      <S.SubmitBtn
        onSubmit={handleSubmit}
        disabled={!(info.isEmailValid && info.isPasswordValid)}
      >
        {process === 'login' ? '로그인' : '회원가입'}
      </S.SubmitBtn>
    </S.AuthFormLayout>
  );
}

export default memo(AuthForm);
