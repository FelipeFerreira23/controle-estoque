import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  color: var(--primary);
`;

export const Button = styled(NavLink)<{ primary?: boolean }>`
  background-color: transparent;
  border: 2px solid var(--primary);
  border-radius: 1rem;

  text-transform: uppercase;
  color: var(--primary);
  text-decoration: none;

  display: inline-block;
  padding: 1rem 2rem;

  transition: all .5s ease;

  &:hover {
    border-color: var(--secondary);
    color: var(--secondary);
  }

  ${props => props.primary && css`
    background-color: var(--primary);
    color: white;

    &:hover {
      background-color: var(--secondary);
      color: var(--white);
    }
  `};

  @media (max-width: 425px) {
    text-align: center;
    padding: 1rem;
  }
`;

export const DivButton = styled.div`
  margin: 2rem auto;
  display: flex;
  gap: 1rem;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
