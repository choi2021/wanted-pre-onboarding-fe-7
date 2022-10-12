import styled from 'styled-components';

const TodoLayout = styled.li`
  width: 100%;
  height: 3rem;
  padding: 0.5em 1em;
  display: flex;
  background-color: white;
  border-radius: 0.5em;
  color: black;
  align-items: center;
  font-size: 0.8rem;
  margin-bottom: 0.5em;

  input {
    border: none;
    outline: none;
  }
`;

const LeftBox = styled.div`
  flex: 30%;
  input {
    font-size: 0.8rem;
  }
`;
const RightBox = styled.div`
  flex: 70%;
  flex: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  div {
    display: flex;
    justify-content: center;
  }
`;

const TodoBtn = styled.button`
  height: 100%;
  background-color: ${(props) => (props.clicked ? 'tomato' : 'lightcoral')};
  color: white;
  font-size: 0.7rem;
  border-radius: 1em;
  padding: 0.2em 0.5em;
  margin-right: 0.2em;
  cursor: pointer;
`;

const S = { RightBox, LeftBox, TodoBtn, TodoLayout };
export default S;
