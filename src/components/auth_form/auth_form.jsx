import React from 'react';
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
  const handleChange = (e) => {
    onChange(e, setInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(info, process, setMessage);
  };
  return (
    <S.AuthFormLayout onSubmit={handleSubmit}>
      <h1>{process === 'login' ? '로그인' : '회원가입'}</h1>
      <div>
        <label htmlFor={`${process}_email`}>Email</label>
        <S.AuthInput
          name='email'
          onChange={handleChange}
          id={`${process}_email`}
          placeholder='아이디를 입력해주세요'
        ></S.AuthInput>
      </div>
      <div>
        <label htmlFor={`${process}_password`}>Password</label>
        <S.AuthInput
          name='password'
          onChange={handleChange}
          id={`${process}_password`}
          placeholder='비밀번호를 입력해주세요'
        ></S.AuthInput>
      </div>
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

export default AuthForm;
