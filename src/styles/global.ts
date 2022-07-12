import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      background: ${theme.colors.background};

      font-family: ${theme.fonts.family};
    }

    body,
    input,
    button,
    textarea {
      border: none;
      outline: inherit;

      color: ${theme.colors.text};
    }

    button,
    a {
      cursor: pointer;

      color: inherit;
      text-decoration: none;
    }
  `}
`;
