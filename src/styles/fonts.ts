import { css } from "styled-components";

// Importing fonts

import PocketMonk from "static/fonts/Pocket-Monk.otf";
const fontFaces = css`
  @font-face {
    font-family: "PocketMonk";
    src: url(${PocketMonk});
    font-display: swap;
  }
`;

export default fontFaces;
