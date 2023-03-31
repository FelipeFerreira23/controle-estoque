import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: var(--primary);
  font-size: 1.2rem;
  color: var(--white);
  padding: .5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled(NavLink)<{ primary?: boolean }>`
  background-color: transparent;
  border-radius: 1rem;

  font-size: 1.5rem;
  color: var(--white);
  text-decoration: none;

  padding: .5rem 1rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  transition: all .5s ease;

  &:hover {
    color: var(--secondary);
  }
`;

export const DivButton = styled.div`
  display: flex;
  gap: 1rem;
`;
