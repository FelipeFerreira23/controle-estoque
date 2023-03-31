import styled from 'styled-components';

export const FieldStyled = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid;
  outline: none;
  font-size: 18px;
  width: 90%;
`;

export const ErrorStyled = styled.span`
  color: red;
  font-size: 14px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 15px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: .8rem;
  text-transform: uppercase;
  padding: 0 1rem .1rem;
`;

export const RequiredLabel = styled.span`
  color: red;
`;
