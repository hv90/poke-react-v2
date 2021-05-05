import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6vh;
  border: 2px solid ${({ theme }) => theme.colors.details};
  border-radius: 50px;
  height: 50px;
  width: 400px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6vh;

  .searchBox {
    background-color: ${({ theme }) => theme.colors.bg};
    border: none;
    height: 100%;
    width: 100%;
    padding: 0px 15px 4.5px;
    border-radius: 50px;
    font-size: 33px;
    font-family: 'FireRed', sans-serif;
    color: ${({ theme }) => theme.colors.details};
  }

  .searchBox:focus {
    outline: none;
  }

  .searchIcon {
    color: ${({ theme }) => theme.colors.details};
    height: 80%;
    width: 10%;
    margin-top: 2.5px;
    margin-right: 15px;
    margin-left: 10px;
  }

  .searchIcon:hover {
    cursor: pointer;
  }
`;
