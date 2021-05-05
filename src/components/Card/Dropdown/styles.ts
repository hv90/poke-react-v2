import styled from 'styled-components';

export const DropdownSelect = styled.select`
  display: flex;
  border: 1px #00000000;
  list-style-type: none;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.vibrant};
  font-family: 'FireRed', sans-serif;
  font-size: 20px;
  transition: background-color 200ms ease-out;

  &&:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.lightContrast};
    border-width: 1px;
  }

  .listElement {
    color: ${({ theme }) => theme.colors.vibrant};
    background-color: ${({ theme }) => theme.colors.bg};
    box-shadow: none;
    border-radius: 5px;
    border: none;
    max-height: 20px;
    margin: 5px;
  }
`;
