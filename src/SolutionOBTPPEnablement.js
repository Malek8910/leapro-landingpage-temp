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
import homeImg from "./assets/solution-ob-ttp-enablement.png";
import homeImg_ar from "./assets/solution-ob-ttp-enablement.png";
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



function SolutionOBTPPEnablement() {
  const intl = useIntl();

  const features = [
    {
      svg: (
<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M208-254v-319.33h66.67V-254H208Zm241.33 0v-319.33H516V-254h-66.67ZM80-640v-62l400-218.67L880-702v62H80Zm149-66.67h502l-251-138-251 138Zm-149 586v-66.66h494q2 16.33 4 32.5 2 16.16 8 34.16H80ZM685.33-418v-155.33H752v122L685.33-418ZM800 0q-69-17-114.5-79.5T640-218v-102l160-80 160 80v102q0 76-45.5 138.5T800 0Zm-23.67-120 141-140.67-32.66-32.66-108.34 107.66L724-238l-32.67 33 85 85ZM229-706.67h502-502Z"/></svg>
      ),
      name: intl.formatMessage({ id: "ob.tppe.features.seamlessIntegration" }),
      text: intl.formatMessage({ id: "ob.tppe.features.seamlessIntegrationText" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M436.67-344 664-571.33l-47-46.34-178.33 178.34-95.34-95.34L295-486.33 436.67-344ZM480-80.67q-139.67-35-229.83-161.5Q160-368.67 160-520.67v-240l320-120 320 120v240q0 152-90.17 278.5Q619.67-115.67 480-80.67Zm0-69.33q111.33-36.33 182.33-139.67 71-103.33 71-231v-193.66L480-809.67l-253.33 95.34v193.66q0 127.67 71 231Q368.67-186.33 480-150Zm0-330Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "ob.tppe.features.adherenceStandards" }),
      text: intl.formatMessage({ id: "ob.tppe.features.adherenceStandardsText" })
    },
    {
      svg: (
<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="m48.67-246.67 16.66-66.66h206l-16.66 66.66h-206Zm80-160 16.66-66.66h246l-16.66 66.66h-246Zm624.33 260 4.67-33.33L777-340l24.33-200 14-113L753-146.67ZM220.67-80q-27 0-44.5-19.83-17.5-19.84-17.5-46.84H753L815.33-653h-130l-11 88.33q-2 14.34-12.66 23.17-10.67 8.83-25 8.17Q623-534 614.5-544.17 606-554.33 608-568l10.33-85h-173l-11 88q-2 14.33-12.66 23.33-10.67 9-25 8.34-13.67-.67-22.34-11-8.66-10.34-6.66-24L378-653H221.33q3.34-28.67 23.34-47.83 20-19.17 48-19.17H386l1.33-6.67q8.67-73 52.17-113.16Q483-880 556-880q62 0 101.83 48.17Q697.67-783.67 692-720h127.33q28 .33 46.67 21.33t15 49L818.33-143q-3.33 27.33-23.5 45.17Q774.67-80 747.33-80H220.67Zm232-640h173q3.66-37-19.17-65.17-22.83-28.16-58.5-28.16-40.33 0-64.83 22.83T454-726.67l-1.33 6.67Z"/></svg>
      ),
      name: intl.formatMessage({ id: "ob.tppe.features.reducedTime" }),
      text: intl.formatMessage({ id: "ob.tppe.features.reducedTimeText" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M210.67-473.33 64-620l146.67-146 146 146-146 146.67ZM368.67-80v-208.46q-63-5.21-125-14.04-62-8.83-123.67-24.17l16.67-66.66q84.84 21 170.19 29.5t173.23 8.5q87.88 0 173.23-8.5t170.01-29.5L840-326.67q-61.67 15.34-123.66 24.31-61.98 8.97-125.01 13.69V-80H368.67Zm-158-486L264-620l-53.33-53.33-54 53.33 54 54Zm269.25-127.33q-47.25 0-80.25-33.08t-33-80.34q0-47.25 33.08-80.25 33.07-33 80.33-33 47.25 0 80.25 33.08t33 80.33q0 47.26-33.08 80.26-33.07 33-80.33 33Zm.13 284q-31.05 0-53.22-22.12-22.16-22.11-22.16-53.16 0-31.06 22.11-53.22Q448.89-560 479.95-560q31.05 0 53.22 22.11 22.16 22.12 22.16 53.17t-22.11 53.22q-22.11 22.17-53.17 22.17ZM479.88-760q19.79 0 33.29-13.38 13.5-13.39 13.5-33.17t-13.39-33.28q-13.38-13.5-33.16-13.5-19.79 0-33.29 13.38t-13.5 33.17q0 19.78 13.39 33.28Q460.1-760 479.88-760Zm212.79 273.33-64-113.33 64.22-113.33h128.44l64 113.33-64.22 113.33H692.67Zm38.44-66.66h51.56l26-46.67-25.78-46.67h-51.56l-26 46.67 25.78 46.67ZM210.67-620ZM480-806.67ZM757.33-600Z"/></svg>
      ),
      name: intl.formatMessage({ id: "ob.tppe.features.enhancedSatisfaction" }),
      text: intl.formatMessage({ id: "ob.tppe.features.enhancedSatisfactionText" })
    }
  ];


  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle={intl.formatMessage({ id: "ob.tppe.home.upTitle" })} 
        title={intl.formatMessage({ id: "app.solutions.tppEnablement" })} 
        subTitle={intl.formatMessage({ id: "ob.tppe.home.subTitle" })} 
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "ob.tppe.pitch.problem" })} 
        text1={
          <>
            <p>{intl.formatMessage({ id: "ob.tppe.pitch.problemText1" })}</p>
            <p>{intl.formatMessage({ id: "ob.tppe.pitch.problemText2" })}</p>
          </>
        }
        name2={intl.formatMessage({ id: "ob.tppe.pitch.solution" })} 
        text2={
          <>
            <p>{intl.formatMessage({ id: "ob.tppe.pitch.solutionText1" })}</p>
            <ul>
              <li>{intl.formatMessage({ id: "ob.tppe.pitch.solutionList1" })}</li>
              <li>{intl.formatMessage({ id: "ob.tppe.pitch.solutionList2" })}</li>
              <li>{intl.formatMessage({ id: "ob.tppe.pitch.solutionList3" })}</li>
            </ul>
            <p>{intl.formatMessage({ id: "ob.tppe.pitch.solutionText2" })}</p>
            <p>{intl.formatMessage({ id: "ob.tppe.pitch.solutionText3" })}</p>
          </>
        }
      />
      <SolutionTemplate1Features features={features} />
      <SolutionTemplate1Statement 
        title={
          <>
            <p>{intl.formatMessage({ id: "ob.tppe.statement.currentProcess" })}</p>
            <br></br>
            <p>{intl.formatMessage({ id: "ob.tppe.statement.ourSolution" })}</p>
          </>
        }
        href=""
        showButton={false}
      />
      <SeeIt />

    </Section>
  );
}

export default SolutionOBTPPEnablement;
