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
  // height: 150px;
  padding: 10px;

  h1 {
    font-weight: normal;
  }

  .sprite {
    transform: scale(1.3);
  }

  select {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const SpriteContainer = styled.div`
  position: relative;
  place-content: center;
  p {
    position: absolute;
    bottom: 10px;
    right: 42%;
    color: ${({ theme }) => theme.colors.details};
  }
`;

export const PokeData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  h1 {
    font-size: 4rem;
    margin-bottom: 5px;
    text-transform: uppercase;

    span {
      margin-left: 5px;
    }
  }

  p {
    font-size: 2.6rem;
  }
`;
