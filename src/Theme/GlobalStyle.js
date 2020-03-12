import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Oswald:300,400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box
}

body{
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family: 'Oswald', sans-serif;
    padding-left: 250px;
}

`;

export default GlobalStyle;
