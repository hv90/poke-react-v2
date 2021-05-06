import styled from 'styled-components';

export const NoResultCard = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-family: 'FireRed', sans-serif;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.details};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow: 0px 8px 10px rgba(29, 29, 29, 0.699);
  max-width: 50vw;
  min-height: 150px;
  // height: 150px;
  padding: 10px 20px;

  h1 {
    font-weight: normal;
  }

  select {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const LoaderContainer = styled.div`
  .spinner {
    width: 50px;
    height: 50px;
    animation: 0.65s loader infinite ease-in-out;
  }

  @keyframes loader {
    from {
      transform: rotate(19deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6vh;
  height: 50px;
  width: 50px;
  margin-left: 20px;
  border-radius: 100px;
  align-items: center;
  opacity: 0.5;
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow: 0px 8px 10px rgba(29, 29, 29, 0.699);

  :hover {
    opacity: 1;
    cursor: pointer;
  }

  img {
    height: 50%;
    width: 50%;
  }

  .dark {
    height: 40%;
    width: 40%;
  }
`;
