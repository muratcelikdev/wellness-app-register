import { createGlobalStyle } from 'styled-components';

import './font.css';

const GlobalStyle = createGlobalStyle`
  
    *:where(:not(html, iframe, canvas, img, svg, video):not(svg *, symbol *)) {
        all: unset;
        display: revert;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a, button {
        cursor: revert;
    }

    ol, ul, menu {
        list-style: none;
    }

    img {
        max-width: 100%;
    }

    table {
        border-collapse: collapse;
    }

    textarea {
        white-space: revert;
    }

    meter {
        -webkit-appearance: revert;
        appearance: revert;
    }

    ::placeholder {
        color: unset;
    }

    :where([hidden]) {
        display: none;
    }

    :where([contenteditable]) {
        -moz-user-modify: read-write;
        -webkit-user-modify: read-write;
        overflow-wrap: break-word;
        line-break: after-white-space;
        -webkit-line-break: after-white-space;
    }

    :where([draggable="true"]) {
        -webkit-user-drag: element;
    }

    body {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        background: transparent;
        color: inherit;
        font: inherit;
        line-height: normal;
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;
        -webkit-appearance: none;

        &::-moz-focus-inner {
            border: 0;
            padding: 0;
        }
    }
`;

export default GlobalStyle;
