import React, { memo, useRef } from 'react';
import S from './styles';

function TodoForm({ onSubmit, isBlank }) {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    onSubmit(e, inputRef);
  };
  return (
    <S.TodoForm onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type='text'
        id='todoInput'
        placeholder={
          isBlank ? '내용이 비어있습니다.😅' : '오늘의 투두를 작성해주세요😀'
        }
      />
      <button>Add</button>
    </S.TodoForm>
  );
}

export default memo(TodoForm);
