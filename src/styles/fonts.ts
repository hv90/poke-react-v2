import { css } from 'styled-components';

import FireRed from 'assets/fonts/pokemon_fire_red.otf';

const fonts = css`
  @font-face {
    font-family: 'FireRed';
    font-style: normal;
    font-weight: normal;
    src: local('FireRed'), url(${FireRed});
  }
`;

export default fonts;
