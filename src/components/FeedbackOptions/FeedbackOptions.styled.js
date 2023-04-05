import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

export const Button = styled.button`
  width: 100px;
  padding: 5px;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  transition: 300ms;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transform: cubic-bezier(0.4, 0, 0.2, 1) 0s;
    scale: 1.1;
  }
`;
