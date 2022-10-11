import React, { useRef, useState } from 'react';
import S from './styles';

function TodoItem({
  todoItem: { isCompleted, userId, id, todo },
  todoItem,
  onDelete,
  onUpdate,
}) {
  const inputRef = useRef();
  const [onModifyMode, setOnModifyMode] = useState(false);
  const [updated, setUpdated] = useState(todoItem);
  const [isBlank, setIsBlank] = useState(false);

  const onClick = (e) => {
    const { name } = e.currentTarget;
    if (name === 'cancel') {
      inputRef.current.value = ``;
    }
    setOnModifyMode((prev) => !prev);
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
    const todo = inputRef.current.value;
    if (!todo) {
      setIsBlank(true);
      return;
    }
    onUpdate({ ...updated, todo });
    inputRef.current.value = ``;
    setOnModifyMode((prev) => !prev);
    setIsBlank(false);
  };

  return (
    <S.TodoLayout>
      <S.LeftBox>
        {onModifyMode ? (
          <input
            placeholder={
              isBlank ? '내용이 비어있습니다.😅' : '여기에 작성해주세요😀'
            }
            ref={inputRef}
          ></input>
        ) : (
          <div>{todo}</div>
        )}
      </S.LeftBox>

      <S.RightBox>
        {onModifyMode ? (
          <>
            <div>
              <S.CompleteBtn
                name='complete'
                clicked={updated.isCompleted}
                onClick={handleCompleteUpdate}
              >
                Completed🙆‍♀️
              </S.CompleteBtn>
              <S.CompleteBtn
                name='not yet'
                clicked={!updated.isCompleted}
                onClick={handleCompleteUpdate}
              >
                Not yet 🙅‍♂️
              </S.CompleteBtn>
            </div>
            <S.TodoBtn name='cancel' onClick={onClick}>
              취소하기
            </S.TodoBtn>
            <S.TodoBtn name='submit' onClick={handleSubmit}>
              제출하기
            </S.TodoBtn>
          </>
        ) : (
          <>
            <S.TodoBtn>{isCompleted ? 'Completed🙆‍♀️' : 'Not yet 🙅‍♂️'}</S.TodoBtn>
            <S.TodoBtn name='modify' onClick={onClick}>
              수정하기
            </S.TodoBtn>
          </>
        )}
        <S.TodoBtn onClick={handleDelete}>삭제하기</S.TodoBtn>
      </S.RightBox>
    </S.TodoLayout>
  );
}

export default TodoItem;
