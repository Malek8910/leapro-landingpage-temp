import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import Navigation from "./components/Navigation";
import Home from "./components/home_sections/Home.js";

import About from "./components/home_sections/About.js";
import Footer from "./components/Footer";
import { Fragment } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Usecases from "./components/home_sections/Solutions.js";
import Features from "./components/home_sections/Features.js";
import Mission from "./components/home_sections/Mission.js";

import UsecasesExtenstion from "./components/home_sections/UsecasesExtenstion.";
import Recognition from "./components/home_sections/Recognition.js";
import ForFIInfo from "./components/home_sections/ForFIInfo.js";

const Section = styled.section`
  min-height: calc(
    100vh -
      (
        ${(props) => props.theme.navHeight} +
          ${(props) => props.theme.footerHeight}
      )
  );
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body}; 
`;

function ForFI() {
  return (
    <Fragment>
      <Section>
        <ForFIInfo />
      </Section>
    </Fragment>
  );
}

export default ForFI;
