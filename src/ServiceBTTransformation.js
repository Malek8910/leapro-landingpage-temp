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
import homeImg from "./assets/service-bt-transformation.png";
import homeImg_ar from "./assets/service-bt-transformation.png";
import LearnMore from "./components/home_sections/LearnMore.js";
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



function ServiceBTTransformation() {
  const intl = useIntl();

  const features = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "serviceBTTransformation.feature.OperationalEfficiencyAutomation.name" }),
      text: intl.formatMessage({ id: "serviceBTTransformation.feature.OperationalEfficiencyAutomation.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760q33 0 63.83 7.33 30.84 7.34 58.17 21-14.33 11.34-26.67 24.17-12.33 12.83-24 26.83-16.66-6-34.5-9.33-17.83-3.33-36.83-3.33-88.33 0-150.83 62.16Q106.67-569 106.67-480q0 88.33 62.5 150.83 62.5 62.5 150.83 62.5 19 0 36.83-3.33 17.84-3.33 34.5-9.33 11.67 14 24 26.83 12.34 12.83 26.67 24.17-27.33 13.66-58.17 21Q353-200 320-200Zm320 0q-33 0-63.83-7.33-30.84-7.34-58.17-21 14.33-11.34 26.67-24.17 12.33-12.83 24-26.83 17 6 34.66 9.33 17.67 3.33 36.67 3.33 89 0 151.17-62.5 62.16-62.5 62.16-150.83 0-89-62.16-151.17Q729-693.33 640-693.33q-19 0-36.67 3.33-17.66 3.33-34.66 9.33-11.67-14-24-26.83-12.34-12.83-26.67-24.17 27.33-13.66 58.17-21Q607-760 640-760q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200Zm-160-50q-57-39-88.5-100T360-480q0-69 31.5-130T480-710q57 39 88.5 100T600-480q0 69-31.5 130T480-250Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "serviceBTTransformation.feature.SeamlessIntegration.name" }),
      text: intl.formatMessage({ id: "serviceBTTransformation.feature.SeamlessIntegration.text" })
    },
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M309-389q29 29 71 29t71-29l160-160q29-29 29-71t-29-71q-29-29-71-29t-71 29q-37-13-73-6t-61 32q-25 25-32 61t6 73q-29 29-29 71t29 71ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l54 213.67q4.33 15.66-5.67 28.5-10 12.83-26.66 12.83H760v133.33q0 27.5-19.58 47.09Q720.83-160 693.33-160H600v80h-66.67v-146.67h160v-200h112l-42.66-171.66q-23.67-95-102.67-155t-180-60q-122 0-207.67 84.66-85.66 84.67-85.66 206.36 0 62.95 25.71 119.6Q238.1-346.06 285.33-302l21.34 20v202H240Zm256-366.67Z"/></svg>
        
      ),
      name: intl.formatMessage({ id: "serviceBTTransformation.feature.ModernizeCompanyCulture.name" }),
      text: intl.formatMessage({ id: "serviceBTTransformation.feature.ModernizeCompanyCulture.text" })
    },
  
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="m226.67-178 97-39.33q-12-35-21.17-71-9.17-36-15.5-72.67l-60.33 40.67V-178Zm164-48.67h178.66Q590-279.33 601.67-337.5q11.66-58.17 11.66-107.5 0-109.67-33-197.17-33-87.5-100.33-155.5-67.33 68-100.33 155.5t-33 197.17q0 49.33 11.66 107.5 11.67 58.17 32.34 110.83Zm89.33-220q-30.33 0-51.83-21.5T406.67-520q0-30.33 21.5-51.83t51.83-21.5q30.33 0 51.83 21.5t21.5 51.83q0 30.33-21.5 51.83T480-446.67ZM733.33-178v-142.33L673-361q-6.33 36.67-15.5 72.67t-21.17 71l97 39.33ZM480-886.33q101 84 150.5 194T680-440v3.33L770-376q14.33 9 22.17 23.67Q800-337.67 800-321v241l-199.67-80H359.67L160-80v-241q0-16.67 7.83-31.33Q175.67-367 190-376l90-60.67V-440q0-142.33 49.5-252.33t150.5-194Z"/></svg>
      ),
      name: intl.formatMessage({ id: "serviceBTTransformation.feature.FutureReadiness.name" }),
      text: intl.formatMessage({ id: "serviceBTTransformation.feature.FutureReadiness.text" })
    }
  ];

  
  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle="" 
        title={intl.formatMessage({ id: "app.services.btTransformation" })} 
        subTitle={intl.formatMessage({ id: "serviceBTTransformation.subTitle" })} 
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "serviceBTTransformation.problem" })} 
        text1={
          <>
            <p>{intl.formatMessage({ id: "serviceBTTransformation.problemText1" })}</p>
            <p>{intl.formatMessage({ id: "serviceBTTransformation.problemText2" })}</p>
            <p>{intl.formatMessage({ id: "serviceBTTransformation.problemText3" })}</p>
          </>
        }
        name2={intl.formatMessage({ id: "serviceBTTransformation.solution" })} 
        text2={
          <>
            <p>{intl.formatMessage({ id: "serviceBTTransformation.solutionText1" })}</p>
            <p>{intl.formatMessage({ id: "serviceBTTransformation.solutionText2" })}</p>
            <p>
              {intl.formatMessage({ id: "serviceBTTransformation.solutionApproach" })}
              <ul>
                <li>{intl.formatMessage({ id: "serviceBTTransformation.approachStep1" })}</li>
                <li>{intl.formatMessage({ id: "serviceBTTransformation.approachStep2" })}</li>
                <li>{intl.formatMessage({ id: "serviceBTTransformation.approachStep3" })}</li>
              </ul>
            </p>
            <p>{intl.formatMessage({ id: "serviceBTTransformation.solutionText3" })}</p>
          </>
        }
      />
      <SolutionTemplate1Features features={features} />
      <SolutionTemplate1Statement 
        title={intl.formatMessage({ id: "serviceBTTransformation.statement" })} 
        href=""
        showButton={false}
      />
      <LearnMore />
    </Section>
  );
}

export default ServiceBTTransformation;
