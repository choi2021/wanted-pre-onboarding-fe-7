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

const S = { AuthFormLayout, SubmitBtn, Message };
export default S;
