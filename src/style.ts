import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --blue-color:#0c0cd7;
    --gray-color:#808080;
    --black-color:#02021e;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-weight:400;
    -webkit-tap-highlight-color:transparent;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

html{
    font-size:62.5%;
    -webkit-text-size-adjust:100%;
}

body{
    font-size:1.6rem;
    background-color:whitesmoke;
    color:var(--black-color);
}


button, a, input{
    border:none;
    outline:none;
    background-color:transparent;
    cursor:pointer;
    text-decoration:none;
    color:inherit;
}

img{
        width:100%;
        height:100%;
      }


/* utilitues */
.fcenter{
    display:flex;
    justify-content:center;
    align-items:center;
}
`;

export default GlobalStyle;
