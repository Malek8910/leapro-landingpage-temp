import React from "react";
import { ThemeProvider } from "styled-components";
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
import About_Pfm from "./components/home_sections/About_Pfm.js";
import Features_Pfm from "./components/home_sections/Features_Pfm.js";
import Pricing_Pfm from "./components/home_sections/Pricing_Pfm.js";
import SubmitForm_Pfm from "./components/home_sections/SubmitForm_Pfm.js";
import Security_Pfm from "./components/home_sections/Security_Pfm.js";
import { Link, useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Context } from "./components/Wrapper";
import { useNavigate } from "react-router-dom";
import Worries_Pfm from "./components/home_sections/Worries_Pfm.js";
import Reasons_Pfm from "./components/home_sections/Reasons_Pfm.js";
import Benefits_Pfm from "./components/home_sections/Benefits_Pfm.js";
import Benefits1_Pfm from "./components/home_sections/Benefits1_Pfm.js";

function Pfm(e) {
  let navigate = useNavigate();
  const context = React.useContext(Context);
  const params = useParams();

  //in order to set hte language if i want, i will us this code to get the /ar parameter if provide,
  //this swallow it, and change the url to just /Pfm/
  var e = {
    target: {
      value: "ar",
    },
  };
  //console.log(e.target.value);
  if (params.lang == "ar") {
    context.selectLanguage(e);
    navigate("/Pfm");
  }

  return (
    <Fragment>
      <About_Pfm />
      <Worries_Pfm />
      <Reasons_Pfm />
      <Features_Pfm />
      <Benefits1_Pfm />
      <Security_Pfm />
      <Pricing_Pfm />
      <SubmitForm_Pfm />

      <Recognition />
    </Fragment>
  );
}

export default Pfm;
