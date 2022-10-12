import React, { memo, useCallback, useRef, useState } from 'react';
import TodoBtn from '../todo_btn/todo_btn';
import S from './styles';

function TodoItem({
  todoItem: { isCompleted, id, todo },
  todoItem,
  onDelete,
  onUpdate,
}) {
  const inputRef = useRef();
  const [onModifyMode, setOnModifyMode] = useState(false);
  const [updated, setUpdated] = useState(todoItem);
  const [isBlank, setIsBlank] = useState(false);

  const onClick = useCallback((e) => {
    const { name } = e.currentTarget;
    if (name === 'cancel') {
      inputRef.current.value = ``;
    }
    setOnModifyMode((prev) => !prev);
  }, []);

  const handleDelete = useCallback(() => {
    onDelete(id);
  }, []);

  const handleCompleteUpdate = useCallback((e) => {
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
  }, []);

  const handleSubmit = useCallback(() => {
    const todo = inputRef.current.value;
    if (!todo) {
      setIsBlank(true);
      return;
    }
    onUpdate({ ...updated, todo });
    inputRef.current.value = ``;
    setOnModifyMode((prev) => !prev);
    setIsBlank(false);
  }, []);

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
              <TodoBtn
                name='complete'
                clicked={updated.isCompleted}
                onClick={handleCompleteUpdate}
                text='Completed🙆‍♀️'
              ></TodoBtn>
              <TodoBtn
                name='not yet'
                clicked={!updated.isCompleted}
                onClick={handleCompleteUpdate}
                text='Not yet 🙅‍♂️'
              ></TodoBtn>
            </div>
            <TodoBtn name='cancel' onClick={onClick} text='취소하기'></TodoBtn>
            <TodoBtn
              name='submit'
              onClick={handleSubmit}
              text='제출하기'
            ></TodoBtn>
          </>
        ) : (
          <>
            <TodoBtn
              text={isCompleted ? 'Completed🙆‍♀️' : 'Not yet 🙅‍♂️'}
            ></TodoBtn>
            <TodoBtn
              name='modify'
              onClick={onClick}
              text={'수정하기'}
            ></TodoBtn>
          </>
        )}
        <TodoBtn onClick={handleDelete} text={'삭제하기'}></TodoBtn>
      </S.RightBox>
    </S.TodoLayout>
  );
}

export default memo(TodoItem);
