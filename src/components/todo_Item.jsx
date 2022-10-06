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
  background-color: lightcoral;
  color: white;
  font-size: 0.7rem;
  border-radius: 1em;
  padding: 0.2em 0.5em;
  margin-right: 0.2em;
`;

const CompleteBtn = styled(TodoBtn)`
  background-color: ${(props) => (props.clicked ? 'coral' : 'lightcoral')};
`;

function TodoItem({
  todoItem: { isCompleted, userId, id, todo },
  todoItem,
  onDelete,
  onUpdate,
}) {
  const inputRef = useRef();
  const [isModified, setIsModified] = useState(false);
  const [updated, setUpdated] = useState(todoItem);

  const onClick = (e) => {
    const { name } = e.currentTarget;
    if (name === 'cancel') {
      inputRef.current.value = ``;
    }
    setIsModified((prev) => !prev);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleCompleteUpdate = (e) => {
    const { name } = e.currentTarget;
    if (name === 'complete') {
      setUpdated((prev) => {
        return { ...prev, isCompleted: true };
      });
    } else {
      setUpdated((prev) => {
        return { ...prev, isCompleted: false };
      });
    }
  };

  const handleSubmit = () => {
    onUpdate({ ...updated, todo: inputRef.current.value });
    inputRef.current.value = ``;
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
        {!isModified && (
          <>
            <TodoBtn>{isCompleted ? 'Completed🙆‍♀️' : 'Not yet 🙅‍♂️'}</TodoBtn>
            <TodoBtn name='modify' onClick={onClick}>
              수정하기
            </TodoBtn>
          </>
        )}
        {isModified && (
          <div>
            <CompleteBtn
              name='complete'
              clicked={updated.isCompleted}
              onClick={handleCompleteUpdate}
            >
              Completed🙆‍♀️
            </CompleteBtn>
            <CompleteBtn
              name='not yet'
              clicked={!updated.isCompleted}
              onClick={handleCompleteUpdate}
            >
              Not yet 🙅‍♂️
            </CompleteBtn>
          </div>
        )}
        {isModified && (
          <>
            <TodoBtn name='cancel' onClick={onClick}>
              취소하기
            </TodoBtn>
            <TodoBtn name='submit' onClick={handleSubmit}>
              제출하기
            </TodoBtn>
          </>
        )}
        <TodoBtn onClick={handleDelete}>삭제하기</TodoBtn>
      </RightBox>
    </TodoLayout>
  );
}

export default TodoItem;
