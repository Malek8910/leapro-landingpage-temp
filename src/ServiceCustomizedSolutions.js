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
import homeImg from "./assets/service-customized-solutions.png";
import homeImg_ar from "./assets/service-customized-solutions.png";
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




function ServiceCustomizedSolutions() {
  const intl = useIntl();

  const features = [
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M571.33-276h194v-196h-66.66v129.33H571.33V-276Zm-376-212H262v-129.33h127.33V-684h-194v196Zm-48.66 328q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67Zm0-66.67h666.66v-506.66H146.67v506.66Zm0 0v-506.66 506.66Z"/></svg>
      ),
      name: intl.formatMessage({ id: "features.scalability.name" }),
      text: intl.formatMessage({ id: "features.scalability.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "features.efficiency.name" }),
      text: intl.formatMessage({ id: "features.efficiency.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760q33 0 63.83 7.33 30.84 7.34 58.17 21-14.33 11.34-26.67 24.17-12.33 12.83-24 26.83-16.66-6-34.5-9.33-17.83-3.33-36.83-3.33-88.33 0-150.83 62.16Q106.67-569 106.67-480q0 88.33 62.5 150.83 62.5 62.5 150.83 62.5 19 0 36.83-3.33 17.84-3.33 34.5-9.33 11.67 14 24 26.83 12.34 12.83 26.67 24.17-27.33 13.66-58.17 21Q353-200 320-200Zm320 0q-33 0-63.83-7.33-30.84-7.34-58.17-21 14.33-11.34 26.67-24.17 12.33-12.83 24-26.83 17 6 34.66 9.33 17.67 3.33 36.67 3.33 89 0 151.17-62.5 62.16-62.5 62.16-150.83 0-89-62.16-151.17Q729-693.33 640-693.33q-19 0-36.67 3.33-17.66 3.33-34.66 9.33-11.67-14-24-26.83-12.34-12.83-26.67-24.17 27.33-13.66 58.17-21Q607-760 640-760q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200Zm-160-50q-57-39-88.5-100T360-480q0-69 31.5-130T480-710q57 39 88.5 100T600-480q0 69-31.5 130T480-250Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "features.integration.name" }),
      text: intl.formatMessage({ id: "features.integration.text" })
    },
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M120-120v-77.33L186.67-264v144H120Zm163.33 0v-237.33L350-424v304h-66.67Zm163.34 0v-304l66.66 67.67V-120h-66.66ZM610-120v-236.33L676.67-423v303H610Zm163.33 0v-397.33L840-584v464h-66.67ZM120-346.33v-94.34l280-278.66 160 160L840-840v94.33L560-465 400-625 120-346.33Z"/></svg>
        
      ),
      name: intl.formatMessage({ id: "features.dataDriven.name" }),
      text: intl.formatMessage({ id: "features.dataDriven.text" })
    },
  
  
  ];

  
  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle="" 
        title={intl.formatMessage({ id: "app.services.customizedSolutions" })} 
        subTitle={intl.formatMessage({ id: "custom.sol.home.subTitle" })} 
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "custom.sol.pitch.problem.name" })} 
        text1={
          <>
            <p>{intl.formatMessage({ id: "custom.sol.pitch.problem.text" })}</p>
            <ul>
              <li>{intl.formatMessage({ id: "custom.sol.pitch.problem.item1" })}</li>
              <li>{intl.formatMessage({ id: "custom.sol.pitch.problem.item2" })}</li>
              <li>{intl.formatMessage({ id: "custom.sol.pitch.problem.item3" })}</li>
              <li>{intl.formatMessage({ id: "custom.sol.pitch.problem.item4" })}</li>
              <li>{intl.formatMessage({ id: "custom.sol.pitch.problem.item5" })}</li>
            </ul>
          </>
        }
        name2={intl.formatMessage({ id: "custom.sol.pitch.solution.name" })} 
        text2={
          <>
            <p>{intl.formatMessage({ id: "custom.sol.pitch.solution.text" })}</p>
            <ul>
              <li>{intl.formatMessage({ id: "custom.sol.pitch.solution.item1" })}</li>
              <li>{intl.formatMessage({ id: "custom.sol.pitch.solution.item2" })}</li>
              <li>{intl.formatMessage({ id: "custom.sol.pitch.solution.item3" })}</li>
              <li>{intl.formatMessage({ id: "custom.sol.pitch.solution.item4" })}</li>
              <li>{intl.formatMessage({ id: "custom.sol.pitch.solution.item5" })}</li>
            </ul>
            <p>{intl.formatMessage({ id: "custom.sol.pitch.solution.technology" })}</p>
          </>
        }
      />
      <SolutionTemplate1Features features={features} />
      <SolutionTemplate1Statement 
        title={intl.formatMessage({ id: "custom.sol.statement.title" })} 
        href=""
        showButton={false}
      />
      <LearnMore />

    </Section>
  );
}

export default ServiceCustomizedSolutions;
