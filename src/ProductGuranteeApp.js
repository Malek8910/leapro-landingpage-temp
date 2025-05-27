import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles.js";
import { light } from "./styles/Themes.js";
import Navigation from "./components/Navigation.js";
import Home from "./components/home_sections/Home.js";

import About from "./components/home_sections/About.js";
import Footer from "./components/Footer.js";
import { Fragment } from "react";
import ScrollToTop from "./components/ScrollToTop.js";
import Usecases from "./components/home_sections/Solutions.js";
import Features from "./components/home_sections/Features.js";
import Mission from "./components/home_sections/Mission.js";

import UsecasesExtenstion from "./components/home_sections/UsecasesExtenstion..js";
import Recognition from "./components/home_sections/Recognition.js";
import ForFIInfo from "./components/home_sections/ForFIInfo.js";
import Service1TypeWriterText from "./components/solutions_template1_sections/SolutionTemplate1TypeWriterText.js";
import Service1Home from "./components/solutions_template1_sections/SolutionTemplate1Home.js";
import Service1Pitch from "./components/solutions_template1_sections/SolutionTemplate1Pitch.js";
import Service1Features from "./components/solutions_template1_sections/SolutionTemplate1Features.js";
import Service1Statement from "./components/solutions_template1_sections/SolutionTemplate1Statement.js";
import SeeIt from "./components/home_sections/SeeIt.js";
import ProductTemplate1Home from "./components/products_template1_sections/ProductTemplate1Home.js";
import ProductTemplate1Pitch from "./components/products_template1_sections/ProductTemplate1Pitch.js";
import ProductTemplate1HowItWorks from "./components/products_template1_sections/ProductTemplate1HowItWorks.js";
import ProductTemplate1Features from "./components/products_template1_sections/ProductTemplate1Features.js";
import ProductTemplate1Statement from "./components/products_template1_sections/ProductTemplate1Statement.js";
import homeImg from "./assets/guaranteeApp.png";
import homeImg_ar from "./assets/guaranteeApp.png";
import manageBenef from "./assets/guaranteeApp-manage-benef.png";
import createLg from "./assets/guaranteeApp0-create-lg.png";
import submitLg from "./assets/guaranteeApp-submit-lg.png";
import track from "./assets/guaranteeApp-track.png";
import guaranteeApp from "./assets/guaranteeApp.svg";
import { useIntl } from "react-intl";

const Section = styled.section`
  /* min-height: calc(
    100vh -
      (
        ${(props) => props.theme.navHeight} +
          ${(props) => props.theme.footerHeight}
      )
  ); */
  /* width: 100vw; */
  position: relative;
  /* height: 400px; */
  background-color: ${(props) => props.theme.body}; 
`;


function ProductGuranteeApp() {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "app.products.guaranteeApp" });
  const title1 = intl.formatMessage({ id: "product.g.app.title1" });
  const subTitle = intl.formatMessage({ id: "product.g.app.subTitle" });
  const featuresTitle = intl.formatMessage({ id: "product.g.app.featuresTitle" });

  const members = [
    {
      name: intl.formatMessage({ id: "product.g.app.members.problem.name" }),
      text: (
        <>
          <span>{intl.formatMessage({ id: "product.g.app.members.problem.text1" })}</span>
          <ul>
            <li>{intl.formatMessage({ id: "product.g.app.members.problem.text2" })}</li>
            <li>{intl.formatMessage({ id: "product.g.app.members.problem.text3" })}</li>
            <li>{intl.formatMessage({ id: "product.g.app.members.problem.text4" })}</li>
            <li>{intl.formatMessage({ id: "product.g.app.members.problem.text5" })}</li>
          </ul>
          <p>{intl.formatMessage({ id: "product.g.app.members.problem.text6" })}</p>
        </>
      ),
    },
    {
      name: intl.formatMessage({ id: "product.g.app.members.solution.name" }),
      text: (
        <>
          <span>{intl.formatMessage({ id: "product.g.app.members.solution.text1" })}</span>
          <p>{intl.formatMessage({ id: "product.g.app.members.solution.text2" })}</p>
        </>
      ),
    },
  ];

  const tabs = [
    {
      title: intl.formatMessage({ id: "product.g.app.tabs.manage.title" }),
      image: manageBenef,
      description: intl.formatMessage({ id: "product.g.app.tabs.manage.description" })
    },
    {
      title: intl.formatMessage({ id: "product.g.app.tabs.create.title" }),
      image: createLg,
      description: intl.formatMessage({ id: "product.g.app.tabs.create.description" })
    },
    {
      title: intl.formatMessage({ id: "product.g.app.tabs.submit.title" }),
      image: submitLg,
      description: intl.formatMessage({ id: "product.g.app.tabs.submit.description" })
    },
    {
      title: intl.formatMessage({ id: "product.g.app.tabs.track.title" }),
      image: track,
      description: intl.formatMessage({ id: "product.g.app.tabs.track.description" })
    }
  ];

  const features = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z" />
        </svg>
      ),
      title: intl.formatMessage({ id: "product.g.app.features.efficiency.title" }),
      text: intl.formatMessage({ id: "product.g.app.features.efficiency.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="m778-268-48-47.33L773.33-358v-244L602-773.33H358l-43.33 42.66L268-778l62-62h300l210 210v299.33L778-268ZM513.33-532v-153.33h-66.66v86.66L513.33-532Zm316 503.33L684-174l-54 54H330L120-330.67V-630l54-53.33-145.33-146L75.33-876 876-75.33l-46.67 46.66Zm-306.66-494ZM358-186.67h244l34.67-34-416-416-34 34.67v244L358-186.67Zm122-94q-15 0-25.83-10.83-10.84-10.83-10.84-25.83 0-15 10.84-25.84Q465-354 480-354q15 0 25.83 10.83 10.84 10.84 10.84 25.84t-10.84 25.83Q495-280.67 480-280.67Zm-51.33-148Z" />
        </svg>
      ),
      title: intl.formatMessage({ id: "product.g.app.features.errors.title" }),
      text: intl.formatMessage({ id: "product.g.app.features.errors.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M480.08-326.67q72.25 0 122.75-50.58 50.5-50.57 50.5-122.83 0-72.25-50.58-122.75-50.57-50.5-122.83-50.5-72.25 0-122.75 50.58-50.5 50.57-50.5 122.83 0 72.25 50.58 122.75 50.57 50.5 122.83 50.5Zm-.24-62.66q-46.17 0-78.34-32.33-32.17-32.32-32.17-78.5 0-46.17 32.33-78.34 32.32-32.17 78.5-32.17 46.17 0 78.34 32.33 32.17 32.32 32.17 78.5 0 46.17-32.33 78.34-32.32 32.17-78.5 32.17ZM480-200q-146 0-264.67-82.5Q96.67-365 40-500q56.67-135 175.33-217.5Q334-800 480-800t264.67 82.5Q863.33-635 920-500q-56.67 135-175.33 217.5Q626-200 480-200Zm0-300Zm-.11 233.33q118.44 0 217.61-63.5 99.17-63.5 151.17-169.83-52-106.33-151.06-169.83-99.05-63.5-217.5-63.5-118.44 0-217.61 63.5-99.17 63.5-151.83 169.83 52.66 106.33 151.72 169.83 99.05 63.5 217.5 63.5Z" />
        </svg>
      ),
      title: intl.formatMessage({ id: "product.g.app.features.oversight.title" }),
      text: intl.formatMessage({ id: "product.g.app.features.oversight.text" })
    }
  ];

  return (
    <Section>
      <ProductTemplate1Home
        title={title}
        title1={title1}
        subTitle={subTitle}
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
        guaranteeApp={guaranteeApp}
      />
      <ProductTemplate1Pitch members={members} />
      <ProductTemplate1HowItWorks title={intl.formatMessage({ id: "product.g.app.howItWorks.title" })} tabs={tabs} />
      <ProductTemplate1Features title={featuresTitle} features={features} />
      <ProductTemplate1Statement title={intl.formatMessage({ id: "product.g.app.statement.title" })} />
      <SeeIt />
    </Section>
  );
}

export default ProductGuranteeApp;
