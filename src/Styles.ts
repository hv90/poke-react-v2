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
