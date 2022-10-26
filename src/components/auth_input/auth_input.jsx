import React, { memo } from 'react';
import S from './styles';

function AuthInput({ onChange, process, name, value }) {
  return (
    <div>
      <label htmlFor={`${process}_${name}`}>
        {name === 'email' ? 'Email' : 'Password'}
      </label>
      <S.AuthInput
        name={name}
        value={value}
        onChange={onChange}
        id={`${process}_${name}`}
        placeholder='아이디를 입력해주세요'
      ></S.AuthInput>
    </div>
  );
}

export default memo(AuthInput);
