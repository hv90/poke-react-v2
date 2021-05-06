import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 10px 0px;
  border-bottom: 10px solid #a30000;

  background-color: #cc0000;
  margin-bottom: 30px;

  img {
    user-drag: none;
    user-select-none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;
