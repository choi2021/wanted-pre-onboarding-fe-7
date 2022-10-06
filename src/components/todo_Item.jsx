import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const TodoLayout = styled.li`
  width: 100%;
  height: 100%;
  padding: 0.5em 1em;
  display: flex;
  background-color: white;
  border-radius: 0.5em;
  color: black;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 0.5em;
  div {
    height: 100%;
    width: 60%;
  }
  input {
    border: none;
    outline: none;
  }
`;

const LeftBox = styled.div`
  flex: 50%;
  input {
    font-size: 0.8rem;
  }
`;
const RightBox = styled.div`
  flex: 50%;
  flex: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TodoBtn = styled.button`
  height: 100%;
  background-color: lightcoral;
  color: white;
  font-size: 0.7rem;
  border-radius: 1em;
  padding: 0.2em 0.5em;
  margin-right: 0.2em;
`;

function TodoItem({ todo, isCompleted, userId }) {
  const inputRef = useRef();
  const [isModified, setIsModified] = useState(false);
  const onClick = () => {
    setIsModified((prev) => !prev);
  };
  return (
    <TodoLayout>
      <LeftBox>
        {!isModified && <div>{todo}</div>}
        {isModified && (
          <input placeholder='여기에 작성해주세요' ref={inputRef}></input>
        )}
      </LeftBox>

      <RightBox>
        <TodoBtn>{isCompleted ? 'Completed🙆‍♀️' : 'Not yet 🙅‍♂️'}</TodoBtn>
        {!isModified && <TodoBtn onClick={onClick}>수정하기</TodoBtn>}
        {isModified && (
          <>
            <TodoBtn onClick={onClick}>취소하기</TodoBtn>
            <TodoBtn onClick={onClick}>제출하기</TodoBtn>
          </>
        )}
        <TodoBtn onClick={onClick}>삭제하기</TodoBtn>
      </RightBox>
    </TodoLayout>
  );
}

export default TodoItem;
