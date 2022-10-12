import React, { memo } from 'react';
import S from './styles';

function AuthInput({ onChange, process, name }) {
  return (
    <div>
      <label htmlFor={`${process}_${name}`}>{name}</label>
      <S.AuthInput
        name={name}
        onChange={onChange}
        id={`${process}_${name}`}
        placeholder='아이디를 입력해주세요'
      ></S.AuthInput>
    </div>
  );
}

export default memo(AuthInput);
