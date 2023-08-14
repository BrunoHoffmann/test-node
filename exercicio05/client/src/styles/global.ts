import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Quicksand', sans-serif;

  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #fff;
  }

  body, input, button {
    font-family: 'Quicksand', sans-serif;

    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight: 400;
  }

  h1 {
    font-weight: 400;
    font-size: 28px;
  }

  button {
    cursor: pointer;
  }
`;

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 1em;
  margin-top: 100px;
  color: #001f00;

  p {
    font-weight: 600;
  }

  &.active {
    display: flex;
  }

  &.hidden {
    display: none;
  }
`;
