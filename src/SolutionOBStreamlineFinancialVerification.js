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
import homeImg from "./assets/solution-ob-streamline-financial-verification.png";
import homeImg_ar from "./assets/solution-ob-streamline-financial-verification.png";
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


function SolutionOBStreamlineFinancialVerification() {
  const intl = useIntl();

  const features = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "ob.fin.ver.feature1.name" }),
      text: intl.formatMessage({ id: "ob.fin.ver.feature1.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M436.67-344 664-571.33l-47-46.34-178.33 178.34-95.34-95.34L295-486.33 436.67-344ZM480-80.67q-139.67-35-229.83-161.5Q160-368.67 160-520.67v-240l320-120 320 120v240q0 152-90.17 278.5Q619.67-115.67 480-80.67Zm0-69.33q111.33-36.33 182.33-139.67 71-103.33 71-231v-193.66L480-809.67l-253.33 95.34v193.66q0 127.67 71 231Q368.67-186.33 480-150Zm0-330Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "ob.fin.ver.feature2.name" }),
      text: intl.formatMessage({ id: "ob.fin.ver.feature2.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M480-40q-162.33 0-264.5-41.5Q113.33-123 113.33-194.67q0-32 27-61.5t79-49.5l56.34 50Q217-237 198.5-221.17 180-205.33 180-194.39q0 23.72 80.67 54.06Q341.33-110 480-110q138.67 0 219.33-30.33Q780-170.67 780-194.39q0-10.94-18.5-26.78-18.5-15.83-77.17-34.5l57-50q52 20 78.67 49.5t26.67 61.5q0 71.67-102.17 113.17T480-40Zm0-160.67q-20.67 0-38.83-8.16Q423-217 406.67-230l-268-232.33q-11.67-10.34-18.5-24.16-6.84-13.82-6.84-28.51v-78.67q0-15 6.5-27.66 6.5-12.67 17.5-22.34l268-249q15-14.66 34.25-21.33 19.25-6.67 40.34-6.67 21.08 0 40.41 6.67 19.34 6.67 34.34 21.33l268 249q11 9.67 17.5 22.34 6.5 12.66 6.5 27.66V-515q0 14.69-6.84 28.51-6.83 13.82-18.5 24.16L553.33-230q-16.33 13-34.5 21.17-18.16 8.16-38.83 8.16Zm-2.67-176.66q14.94 0 28.27-4.82 13.33-4.81 25.07-15.52l233.33-211-255.33-234Q503-849 496.33-851.5q-6.66-2.5-14.66-1.83-8 .66-15.67 3.16t-14.67 7.5L194-606l230.06 208.21q11.61 10.79 24.96 15.62 13.36 4.84 28.31 4.84ZM353.26-554.67q20.41 0 34.57-14.09Q402-582.85 402-603.26t-14.09-34.57Q373.82-652 353.41-652t-34.58 14.09q-14.16 14.09-14.16 34.5t14.09 34.58q14.09 14.16 34.5 14.16ZM413.33-496q44.34 20.33 92.17 11.5 47.83-8.83 83.83-41.5 33.34-29 43.84-71.67 10.5-42.66-7.84-83L413.33-496Zm66.59-182.67q20.41 0 34.58-14.09 14.17-14.09 14.17-34.5t-14.09-34.57Q500.48-776 480.08-776q-20.41 0-34.58 14.09-14.17 14.09-14.17 34.5t14.09 34.58q14.1 14.16 34.5 14.16Zm-.59 63.34Z"/></svg>
      ),
      name: intl.formatMessage({ id: "ob.fin.ver.feature3.name" }),
      text: intl.formatMessage({ id: "ob.fin.ver.feature3.text" })
    },
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M480-80q-86.33 0-161.33-33.83-75-33.84-129.34-91.17Q135-262.33 105.5-339.33 76-416.33 80.67-502H148q-4.67 72 19 136.5t69.17 113.33q45.5 48.84 108.33 77.67T480-145.67q139.33 0 236.33-97t97-236.33q0-139.33-97-236.33t-236.33-97q-96.33 0-174.17 48.83Q228-714.67 186-635.33h124.67v66.66H80V-800h66.67v99.33q54.33-81.66 141-130.5Q374.33-880 480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-80-243.33q-15 0-25.83-10.84Q363.33-345 363.33-360v-120q0-15 11.5-25.83 11.5-10.84 28.5-10.84V-560q0-31.67 22.5-54.17t54.17-22.5q31.67 0 54.17 22.5t22.5 54.17v43.33q17 0 28.5 10.84 11.5 10.83 11.5 25.83v120q0 15-10.84 25.83Q575-323.33 560-323.33H400Zm36.67-193.34h86.66V-560q0-18.33-12.5-30.83T480-603.33q-18.33 0-30.83 12.5T436.67-560v43.33Z"/></svg>
      ),
      name: intl.formatMessage({ id: "ob.fin.ver.feature4.name" }),
      text: intl.formatMessage({ id: "ob.fin.ver.feature4.text" })
    }
  ];

  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle={intl.formatMessage({ id: "ob.fin.ver.upTitle" })} 
        title={intl.formatMessage({ id: "app.solutions.streamlineFinancialVerification" })} 
        subTitle={intl.formatMessage({ id: "ob.fin.ver.subTitle" })} 
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "ob.fin.ver.problem.name" })} 
        text1={<><p>{intl.formatMessage({ id: "ob.fin.ver.problem.text" })}</p></>}

        name2={intl.formatMessage({ id: "ob.fin.ver.solution.name" })} 
        text2={<><p>{intl.formatMessage({ id: "ob.fin.ver.solution.text" })}</p></>}
      />
      <SolutionTemplate1Features features={features} />
      <SolutionTemplate1Statement 
        title={<><p>{intl.formatMessage({ id: "ob.fin.ver.statement.title" })}</p></>}
        href=""
        showButton={false}
      />
      <SeeIt />

    </Section>
  );
}

export default SolutionOBStreamlineFinancialVerification;
