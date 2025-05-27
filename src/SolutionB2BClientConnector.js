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
import SolutionTemplate1Home from "./components/solutions_template1_sections/SolutionTemplate1Home.js";
import SolutionTemplate1Pitch from "./components/solutions_template1_sections/SolutionTemplate1Pitch.js";
import SolutionTemplate1Features from "./components/solutions_template1_sections/SolutionTemplate1Features.js";
import SolutionTemplate1Statement from "./components/solutions_template1_sections/SolutionTemplate1Statement.js";
import SeeIt from "./components/home_sections/SeeIt.js";
import homeImg from "./assets/service-b2b-client-connector.png";
import homeImg_ar from "./assets/service-b2b-client-connector.png";
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


function SolutionB2BClientConnector() {
  const intl = useIntl();

  const features = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "b2b.api.client.features.realTimeDataFlow.name" }),
      text: intl.formatMessage({ id: "b2b.api.client.features.realTimeDataFlow.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M436.67-344 664-571.33l-47-46.34-178.33 178.34-95.34-95.34L295-486.33 436.67-344ZM480-80.67q-139.67-35-229.83-161.5Q160-368.67 160-520.67v-240l320-120 320 120v240q0 152-90.17 278.5Q619.67-115.67 480-80.67Zm0-69.33q111.33-36.33 182.33-139.67 71-103.33 71-231v-193.66L480-809.67l-253.33 95.34v193.66q0 127.67 71 231Q368.67-186.33 480-150Zm0-330Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "b2b.api.client.features.customizableCompliant.name" }),
      text: intl.formatMessage({ id: "b2b.api.client.features.customizableCompliant.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760q33 0 63.83 7.33 30.84 7.34 58.17 21-14.33 11.34-26.67 24.17-12.33 12.83-24 26.83-16.66-6-34.5-9.33-17.83-3.33-36.83-3.33-88.33 0-150.83 62.16Q106.67-569 106.67-480q0 88.33 62.5 150.83 62.5 62.5 150.83 62.5 19 0 36.83-3.33 17.84-3.33 34.5-9.33 11.67 14 24 26.83 12.34 12.83 26.67 24.17-27.33 13.66-58.17 21Q353-200 320-200Zm320 0q-33 0-63.83-7.33-30.84-7.34-58.17-21 14.33-11.34 26.67-24.17 12.33-12.83 24-26.83 17 6 34.66 9.33 17.67 3.33 36.67 3.33 89 0 151.17-62.5 62.16-62.5 62.16-150.83 0-89-62.16-151.17Q729-693.33 640-693.33q-19 0-36.67 3.33-17.66 3.33-34.66 9.33-11.67-14-24-26.83-12.34-12.83-26.67-24.17 27.33-13.66 58.17-21Q607-760 640-760q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200Zm-160-50q-57-39-88.5-100T360-480q0-69 31.5-130T480-710q57 39 88.5 100T600-480q0 69-31.5 130T480-250Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "b2b.api.client.features.seamlessDigitalConnectivity.name" }),
      text: intl.formatMessage({ id: "b2b.api.client.features.seamlessDigitalConnectivity.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M828.33-36.67 776-89q-10.67 4.33-21.5 6.67Q743.67-80 732.11-80H228q-45.83 0-77.92-32.08Q118-144.17 118-190v-123.33h124.67v-309L26.33-838.67 74-886.33l802 802-47.67 47.66Zm-601-110h491l-100-100H184.67V-190q0 18.42 12.5 30.88 12.5 12.45 30.16 12.45ZM842-213l-66.67-66.67v-493.66H281.67l-39-39V-880l59.86 60 59.87-60 59.87 60 59.86-60L542-820l60-60 60 60 60-60 60 60 60-60 60 60v667ZM309.33-313.33h242.34L309.33-555.67v242.34ZM441-614.67l-66.67-66.66H598v66.66H441Zm129.33 129.34L503.67-552H598v66.67h-27.67Zm116.22-3.34q-14.22 0-23.72-9.61-9.5-9.62-9.5-23.84 0-14.21 9.62-23.71t23.83-9.5q14.22 0 23.72 9.61 9.5 9.62 9.5 23.84 0 14.21-9.62 23.71-9.61 9.5-23.83 9.5Zm.12-126q-13.67 0-23.5-9.83-9.84-9.83-9.84-23.5t9.84-23.5q9.83-9.83 23.5-9.83 13.66 0 23.5 9.83Q720-661.67 720-648t-9.83 23.5q-9.84 9.83-23.5 9.83Zm-502 468v-100 100Z"/></svg>
      ),
      name: intl.formatMessage({ id: "b2b.api.client.features.paperlessOperations.name" }),
      text: intl.formatMessage({ id: "b2b.api.client.features.paperlessOperations.text" })
    }
  ];

  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle={intl.formatMessage({ id: "app.navigation.integration" })} 
        title={intl.formatMessage({ id: "app.solutions.b2bClientConnector" })} 
        subTitle={intl.formatMessage({ id: "b2b.api.client.b2bClientConnector.subTitle" })} 
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "b2b.api.client.problem" })} 
        text1={
          <>
            <p>{intl.formatMessage({ id: "b2b.api.client.problem.text1" })}</p>
            <ul>
              <li>{intl.formatMessage({ id: "b2b.api.client.problem.text1.li1" })}</li>
              <li>{intl.formatMessage({ id: "b2b.api.client.problem.text1.li2" })}</li>
            </ul>
            <p>{intl.formatMessage({ id: "b2b.api.client.problem.text2" })}</p>
          </>
        }
        name2={intl.formatMessage({ id: "b2b.api.client.solution" })} 
        text2={
          <>
            <p>{intl.formatMessage({ id: "b2b.api.client.solution.text1" })}</p>
          </>
        }
      />
      <SolutionTemplate1Features features={features} />
      <SolutionTemplate1Statement 
        title={intl.formatMessage({ id: "b2b.api.client.statement.title" })} 
        href=""
        showButton={false}
      />
      <SeeIt />

    </Section>
  );
}

export default SolutionB2BClientConnector;
