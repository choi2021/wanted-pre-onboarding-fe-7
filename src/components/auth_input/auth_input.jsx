import React, { memo } from 'react';
import S from './styles';

function AuthInput({ onChange, process, name }) {
  return (
    <div>
      <label htmlFor={`${process}_email`}>{name}</label>
      <S.AuthInput
        name={name}
        onChange={onChange}
        id={`${process}_email`}
        placeholder='아이디를 입력해주세요'
      ></S.AuthInput>
    </div>
  );
}

export default memo(AuthInput);
