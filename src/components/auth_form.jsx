import React from 'react';
import styled from 'styled-components';

const AuthFormLayout = styled.form`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
  }
  label {
    font-size: 1.2rem;
    margin-bottom: 0.3em;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;

const AuthInput = styled.input`
  width: 15rem;
  height: 2rem;
  border-radius: 1em;
  margin-bottom: 1em;
  outline: none;
  text-align: center;
`;

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
    <AuthFormLayout onSubmit={handleSubmit}>
      <h1>{process === 'login' ? '로그인' : '회원가입'}</h1>
      <div>
        <label htmlFor={`${process}_email`}>Email</label>
        <AuthInput
          name='email'
          onChange={handleChange}
          id={`${process}_email`}
          placeholder='아이디를 입력해주세요'
        ></AuthInput>
      </div>
      <div>
        <label htmlFor={`${process}_password`}>Password</label>
        <AuthInput
          name='password'
          onChange={handleChange}
          id={`${process}_password`}
          placeholder='비밀번호를 입력해주세요'
        ></AuthInput>
      </div>
      {message.message && (
        <Message success={message.success}>{message.message}</Message>
      )}
      <SubmitBtn
        onSubmit={handleSubmit}
        disabled={!(info.isEmailValid && info.isPasswordValid)}
      >
        {process === 'login' ? '로그인' : '회원가입'}
      </SubmitBtn>
    </AuthFormLayout>
  );
}

export default AuthForm;
