import { createGlobalStyle } from 'styled-components'

export const cores = {
  salmao: '#E66767',
  beje: '#FFEBD9',
  branca: '#FFFFFF',
  bejeClaro: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.beje};
    color: ${cores.salmao};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
