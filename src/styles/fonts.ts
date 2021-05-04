import { css } from "styled-components";

// Importing fonts

import PokeTitle from "static/fonts/Pocket-Monk.otf";
import PokeFireRed from "static/fonts/pokemon_fire_red.otf";

const fontFaces = css`
  @font-face {
    font-family: "PokeTitle";
    src: url(${PokeTitle});
    font-display: swap;
  }
  ,
  @font-face {
    font-family: "PokeFireRed";
    src: url(${PokeFireRed});
    font-display: swap;
  }
`;

export default fontFaces;
