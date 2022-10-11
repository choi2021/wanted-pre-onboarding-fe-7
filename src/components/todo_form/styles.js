import styled from 'styled-components';

const TodoForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1em 0;
  height: 3rem;
  input {
    height: 100%;
    border: none;
    outline: none;
    font-size: 1.1rem;
    text-align: center;
    flex: 80%;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
  }
  button {
    flex: 20%;
    height: 100%;
    background-color: lightcoral;
    color: white;
    font-size: 0.9rem;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    padding: 0.2em 0.5em;
    cursor: pointer;
  }
`;

const S = { TodoForm };
export default S;
