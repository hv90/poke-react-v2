import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow: 0px 8px 10px rgba(29, 29, 29, 0.699);
  max-width: 50vw;
  min-height: 150px;
  height: 150px;
  padding: 10px;

  h1 {
    font-weight: normal;
  }

  img {
    transform: scale(1.3);
  }

  select {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
