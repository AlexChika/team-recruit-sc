import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-weight:400;
    -webkit-tap-highlight-color:transparent;
    font-family:Arial, Helvetica, sans-serif;
}

html{
    font-size:62.5%;
    -webkit-text-size-adjust:100%;
}

body{
    font-size:1.6rem;
    background-color:whitesmoke;
}


button, a input{
    border:none;
    outline:none;
    background-color:transparent;
    cursor:pointer;
    text-decoration:none;
    color:inherit;
}
`;

export default GlobalStyle;
