//import { createGlobalStyle } from "styled-components";
import React from "react";

import * as styled from "styled-components"; // to get it auto formated

import "@fontsource/akaya-telivigala";
import "@fontsource/sora";
import "material-design-icons/iconfont/material-icons.css";

const GlobalStyle = styled.createGlobalStyle`
  /* * {
    outline: 1px solid red !important ;
  } */

  *,
  *::before,
  *::after {
    margin: 0;
    /* padding: 0; */
  }

  @font-face {
    font-family: "IBM Plex Sans Regular"; /*Can be any text*/
    src: 
    /* local("IBM Plex Sans"), */
      url("../font/IBMPlexSans-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "IBM Plex Sans SemiBold";
    src: url("../fonts/IBMPlexSansArabic-SemiBold.ttf") format("truetype");
    /* Add additional font formats if necessary */
    /* Specify the correct path to the font files */
  }

  @font-face {
    font-family: "IBM Plex Sans Arabic Regular";
    src: url("../fonts/IBMPlexSansArabic-Regular.ttf") format("truetype");
    /* Add additional font formats if necessary */
    /* Specify the correct path to the font files */
  }

  @font-face {
    font-family: "IBM Plex Sans Arabic SemiBold";
    src: url("../fonts/IBMPlexSansArabic-SemiBold.ttf") format("truetype");
    /* Add additional font formats if necessary */
    /* Specify the correct path to the font files */
  }

  @font-face {
    font-family: "IBM Plex Sans Arabic Bold";
    src: url("../fonts/IBMPlexSansArabic-Bold.ttf") format("truetype");
    /* Add additional font formats if necessary */
    /* Specify the correct path to the font files */
  }



  @font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/MaterialIcons-Regular.ttf") format('truetype');
}
@font-face {
  font-family: 'Material Icons Outlined';
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/MaterialIconsOutlined-Regular.otf") format('truetype');
}



  body {
    font-family: ${(props) => (props.lang === 'ar' ? 'IBM Plex Sans Arabic' : 'Montserrat')}, sans-serif;
    overflow-x: hidden;
  }

  .header {
    z-index: 1;
    background: linear-gradient(-45deg, red, green, blue, yellow);
    background-size: 400% 400%;
    width: 100%;
    height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  a {
    /* color: inherit; */
    color: #303035;
    text-decoration: none;
  }

 
`;




export default GlobalStyle;
