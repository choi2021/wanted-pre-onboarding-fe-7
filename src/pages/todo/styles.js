import styled from 'styled-components';

const TodoLayout = styled.section`
  max-width: 40rem;
  padding: 2em;
  margin: auto;
  height: 100%;
  background-color: lightpink;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  header {
    font-size: 2rem;
    height: 3rem;
  }
`;

const TodoContent = styled.div`
  width: 100%;
  flex: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TodoList = styled.ul`
  width: 100%;
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;
const S = { TodoContent, TodoLayout, TodoList };

export default S;
