import React from 'react';
import styled from 'styled-components';

const LoginLayout = styled.section`
  height: 100%;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
`;

const LoginBox = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterBox = styled(LoginBox)``;

const LoginInput = styled.input`
  width: 15rem;
  height: 1.2rem;
  border-radius: 1em;
  margin-bottom: 1em;
  outline: none;
  text-align: center;
`;

const RegisterInput = styled(LoginInput)``;
const SubmitBtn = styled.button`
  background-color: white;
  padding: 0.5em 1em;
  font-size: 1.1rem;
  border-radius: 1em;
`;

function Login(props) {
  const handleChange = (e) => {};
  return (
    <LoginLayout>
      <LoginBox>
        <h1>Sign In</h1>
        <LoginInput
          onChange={handleChange}
          placeholder='아이디를 입력해주세요'
        ></LoginInput>
        <LoginInput
          onChange={handleChange}
          placeholder='비밀번호를 입력해주세요'
        ></LoginInput>
        <SubmitBtn>Submit</SubmitBtn>
      </LoginBox>
      <RegisterBox>
        <h1>Sign up</h1>
        <RegisterInput placeholder='아이디를 입력해주세요'></RegisterInput>
        <RegisterInput placeholder='비밀번호를 입력해주세요'></RegisterInput>
        <SubmitBtn>Submit</SubmitBtn>
      </RegisterBox>
    </LoginLayout>
  );
}

export default Login;
