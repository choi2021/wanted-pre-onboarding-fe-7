import styled from 'styled-components';

const TodoLayout = styled.section`
  max-width: 40rem;
  padding: 1em;
  margin: auto;
  height: 100%;
  background-color: lightpink;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    font-size: 2rem;
    flex: 20%;
  }
`;

const TodoContent = styled.div`
  width: 100%;
  flex: 80%;
`;

const TodoList = styled.ul`
  width: 100%;
`;
const S = { TodoContent, TodoLayout, TodoList };

export default S;
