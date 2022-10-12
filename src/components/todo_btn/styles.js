import styled from 'styled-components';

const Btn = styled.button`
  height: 100%;
  background-color: ${(props) => (props.clicked ? 'tomato' : 'lightcoral')};
  color: white;
  font-size: 0.7rem;
  border-radius: 1em;
  padding: 0.2em 0.5em;
  margin-right: 0.2em;
  cursor: pointer;
`;

const S = { Btn };
export default S;
