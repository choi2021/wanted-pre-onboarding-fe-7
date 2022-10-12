import React, { memo } from 'react';
import S from './styles';

function TodoBtn({ name, clicked, onClick, text }) {
  return (
    <S.Btn name={name} clicked={clicked} onClick={onClick}>
      {text}
    </S.Btn>
  );
}

export default memo(TodoBtn);
