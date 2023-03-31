import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  margin: 2rem;
  display: block;
`;

export const List = styled.ul`
  list-style: none;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 425px) {
    padding: 1rem;
  }

  li {
    width: 30%;
    padding-bottom: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 425px) {
      width: 100%;
    }
  }

  img {
    width: 100%;
  }

  h4 {
    font-size: 1.1rem;
    margin-top: 1rem;
  }

  p {
    color: var(--darkgray);
    margin: .8rem 0;
    font-size: .8rem;
  }

  .price {
    color: var(--secondary);
    font-weight: 900;
    font-size: 1.5rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const Button = styled.button`
  background-color: #8BC34A;

  border: 2px solid #8BC34A;
  border-radius: .5rem;

  text-transform: uppercase;
  color: var(--white);
  text-decoration: none;

  padding: 0.5rem 1rem;

  padding: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  transition: all .5s ease;

  &:last-child {
    background-color: #E91E63;
    border-color: #E91E63;
  }

  &:hover {
    background-color: var(--primary);
    border-color: var(--primary);
  }
`;