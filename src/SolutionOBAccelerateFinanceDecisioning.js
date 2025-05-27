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
import homeImg from "./assets/solution-ob-accelerate-finance-decisioning.png";
import homeImg_ar from "./assets/solution-ob-accelerate-finance-decisioning.png";
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




function SolutionOBAccelerateFinanceDecisioning() {
  const intl = useIntl();


  const features = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z" />
        </svg>
      ),
      name: "Enhanced Access to Finance",
      text: intl.formatMessage({ id: "ob.finance.feature1.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-485q87 0 177.33-26.17 90.34-26.16 111.34-57.83-21.67-31-111.84-57.67-90.16-26.66-176.83-26.66-89 0-177.5 25.83T190.67-689q23.33 33.33 111.16 58.67Q389.67-605 480-605Zm-.67 209q42 0 83-4.33 41-4.34 78.5-12.84T712.17-434q33.83-12.33 61.16-27.67V-605q-28 15.33-61.83 27.67-33.83 12.33-71.67 20.83-37.83 8.5-78.16 13.17-40.34 4.66-82.34 4.66T396-543.33q-41.33-4.67-78.83-13.17t-70.84-20.83Q213-589.67 186.67-605v143.33Q213-446.33 246-434q33 12.33 70.5 20.83 37.5 8.5 78.83 12.84 41.34 4.33 84 4.33Zm.67 209.33q47.33 0 97.17-8 49.83-8 91.5-21.16Q710.33-229 739-245.17q28.67-16.16 34.33-33.16v-116Q746-379 712.17-367q-33.84 12-71.34 20.5t-78.16 12.83q-40.67 4.34-83.34 4.34-42.66 0-84-4.34Q354-338 316.5-346.5T246-367q-33-12-59.33-27.33v117q5 16.33 33.16 32.66Q248-228.33 290-215.5q42 12.83 92 20.83 50 8 98 8Z"/></svg>
      ),
      name: "Streamlined Data Retrieval",
      text: intl.formatMessage({ id: "ob.finance.feature2.text" })
    },
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M130.67-220 80-270.67l300-300L540-410l293.33-330L880-694 540-310 380-469.33 130.67-220Z"/></svg>
      ),
      name: "Improved Economic Growth",
      text: intl.formatMessage({ id: "ob.finance.feature3.text" })
    },
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M282.67-278h66.66v-203.33h-66.66V-278Zm328 0h66.66v-413.33h-66.66V-278Zm-164 0h66.66v-118.67h-66.66V-278Zm0-203.33h66.66V-548h-66.66v66.67ZM186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66Zm0-586.66v586.66-586.66Z"/></svg>
      ),
      name: "Holistic Risk Assessment",
      text: intl.formatMessage({ id: "ob.finance.feature4.text" })
    }
  ];

  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle={intl.formatMessage({ id: "ob.finance.upTitle" })} 
        title={intl.formatMessage({ id: "app.solutions.accelerateFinanceDecisioning" })} 
        subTitle={intl.formatMessage({ id: "ob.finance.subTitle" })}
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "ob.finance.problem" })} 
        text1={<><p>{intl.formatMessage({ id: "ob.finance.problem.text1" })}</p></>}

        name2={intl.formatMessage({ id: "ob.finance.solution" })} 
        text2={<><p>{intl.formatMessage({ id: "ob.finance.solution.text1" })}</p>
<p>{intl.formatMessage({ id: "ob.finance.solution.text2" })}</p>
<ul>
  <li>{intl.formatMessage({ id: "ob.finance.solution.list1" })}</li>
  <li>{intl.formatMessage({ id: "ob.finance.solution.list2" })}</li>
  <li>{intl.formatMessage({ id: "ob.finance.solution.list3" })}</li>
</ul>
<p>{intl.formatMessage({ id: "ob.finance.solution.text3" })}</p></>}
      />
      <SolutionTemplate1Features features={features} />
      <SolutionTemplate1Statement 
        title={<><p>{intl.formatMessage({ id: "ob.finance.statement" })}</p></>}
        href=""
        showButton={false}
      />
      <SeeIt />

    </Section>
  );
}

export default SolutionOBAccelerateFinanceDecisioning;
