import { Form } from 'formik';
import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  margin: 2rem;
  display: block;
`;

export const FormStyle = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  > div {
    width: 49%;
    margin: 0;

    &:first-child,
    &:nth-child(2),
    &:last-of-type {
      width: 100%;
    };

    @media (max-width: 768px) {
      width: 48%;
    }

    @media (max-width: 425px) {
      width: 100%;
    }
  }

  input, button {
    width: 100%;
    min-height: 2rem;
    padding: .5rem 1rem;
    border: 1px solid var(--primary);
    border-radius: 1rem;

    font-size: 1rem;
    color: var(--darkgray);

    &::placeholder {
      font-size: 1rem;
      color: var(--darkgray);
    }

    &:focus {
      border-color: var(--secondary);
    }
  }

  button {
    background-color: var(--primary);
    border: 2px solid var(--primary);
    border-radius: 1rem;

    text-transform: uppercase;
    color: var(--white);
    text-decoration: none;

    display: inline-block;
    margin: 1rem auto;
    padding: 1rem 2rem;

    transition: all .5s ease;

    &:hover {
      background-color: transparent;
      border-color: var(--secondary);
      color: var(--secondary);
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;