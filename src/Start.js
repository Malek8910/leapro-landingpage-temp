import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import Navigation from "./components/Navigation";
import Home from "./components/home_sections/Home.js";

import About from "./components/home_sections/About.js";
import Footer from "./components/Footer";
import { Fragment } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Solutions from "./components/home_sections/Solutions.js";
import Products from "./components/home_sections/Products.js";

import Partners from "./components/home_sections/Partners.js";
import Features from "./components/home_sections/Features.js";
import Mission from "./components/home_sections/Mission.js";
import SeeIt from "./components/home_sections/SeeIt.js";

import UsecasesExtenstion from "./components/home_sections/UsecasesExtenstion.";
import Recognition from "./components/home_sections/Recognition.js";
import Services from "./components/home_sections/Services.js";

function Start() {
  return (
    <Fragment>
      <Home />
      <Partners />
      <Features />
      <UsecasesExtenstion />
      <Services/>
      <Solutions />
      <Products />

      <SeeIt />

      {/* <About /> */}
      {/* <Mission /> */}
    </Fragment>
  );
}

export default Start;
