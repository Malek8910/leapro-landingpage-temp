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
import homeImg from "./assets/solution-ob-streamline-bank-account-verification.png";
import homeImg_ar from "./assets/solution-ob-streamline-bank-account-verification.png";
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


const features = [
  {
    svg: (
<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="m778-268-48-47.33L773.33-358v-244L602-773.33H358l-43.33 42.66L268-778l62-62h300l210 210v299.33L778-268ZM513.33-532v-153.33h-66.66v86.66L513.33-532Zm316 503.33L684-174l-54 54H330L120-330.67V-630l54-53.33-145.33-146L75.33-876 876-75.33l-46.67 46.66Zm-306.66-494ZM358-186.67h244l34.67-34-416-416-34 34.67v244L358-186.67Zm122-94q-15 0-25.83-10.83-10.84-10.83-10.84-25.83 0-15 10.84-25.84Q465-354 480-354q15 0 25.83 10.83 10.84 10.84 10.84 25.84t-10.84 25.83Q495-280.67 480-280.67Zm-51.33-148Z"/></svg>
    ),
    name: "Decreased Instances of Payment Errors and Delays",
    text: "By ensuring accurate bank account details, the service reduces the likelihood of payment errors and delays, improving overall transaction efficiency."
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
        <path d="M436.67-344 664-571.33l-47-46.34-178.33 178.34-95.34-95.34L295-486.33 436.67-344ZM480-80.67q-139.67-35-229.83-161.5Q160-368.67 160-520.67v-240l320-120 320 120v240q0 152-90.17 278.5Q619.67-115.67 480-80.67Zm0-69.33q111.33-36.33 182.33-139.67 71-103.33 71-231v-193.66L480-809.67l-253.33 95.34v193.66q0 127.67 71 231Q368.67-186.33 480-150Zm0-330Z" />
      </svg>
    ),
    name: "Reduced Risk of Fraudulent Transactions",
    text: "Validating account ownership helps prevent fraudulent activities stemming from incorrect bank account details, leading to decreased losses and enhanced security."
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M480-480Zm.18 400q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.51T80-480.18Q80-563 111.57-636q31.56-73 85.68-127 54.11-54 127.26-85.5Q397.67-880 480-880q44.86 0 86.6 9.5 41.73 9.5 80.07 26.83V-769q-37-21.33-78.84-32.83-41.83-11.5-87.68-11.5-138.61 0-236.04 97.16-97.44 97.17-97.44 235.85 0 138.67 97.49 236.16 97.49 97.49 236.16 97.49 138.68 0 235.85-97.39 97.16-97.4 97.16-235.94 0-33.86-6.5-65.59-6.5-31.74-18.83-61.08h71.33q10.34 30.61 15.5 61.75Q880-513.78 880-480q0 82.33-31.5 155.49Q817-251.36 763-197.25q-54 54.12-127 85.68Q563-80 480.18-80Zm326.49-600v-86.67H720v-66.66h86.67V-920h66.66v86.67H960v66.66h-86.67V-680h-66.66ZM624-528.67q23.33 0 39.67-16.33Q680-561.33 680-584.67q0-23.33-16.33-39.66-16.34-16.34-39.67-16.34-23.33 0-39.67 16.34Q568-608 568-584.67q0 23.34 16.33 39.67 16.34 16.33 39.67 16.33Zm-288 0q23.33 0 39.67-16.33Q392-561.33 392-584.67q0-23.33-16.33-39.66-16.34-16.34-39.67-16.34-23.33 0-39.67 16.34Q280-608 280-584.67q0 23.34 16.33 39.67 16.34 16.33 39.67 16.33Zm144 268q66.67 0 122.17-36.5t80.5-98.16H277.33q25.67 61.66 80.84 98.16 55.16 36.5 121.83 36.5Z"/></svg>
    ),
    name: "Improved Customer Satisfaction",
    text: "With smoother payment processes and reduced payment issues, customers experience improved satisfaction and confidence in the organization's services."
  },
  {
    svg: (
<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M600-160q-134 0-227-93t-93-227q0-133.67 93-226.83Q466-800 600-800q133.67 0 226.83 93.17Q920-613.67 920-480q0 134-93.17 227-93.16 93-226.83 93Zm-.16-66.67q105.49 0 179.49-73.84 74-73.84 74-179.33 0-105.49-73.84-179.49-73.84-74-179.33-74-105.49 0-179.49 73.84-74 73.84-74 179.33 0 105.49 73.84 179.49 73.84 74 179.33 74ZM698.33-335l47-47-112-112v-146h-66.66v173.67L698.33-335ZM80-606.67v-66.66h160v66.66H80Zm-40 160v-66.66h200v66.66H40Zm40 160v-66.66h160v66.66H80ZM600-480Z"/></svg>
    ),
    name: "Decreased Operational Overheads",
    text: "Automation of account verification reduces the need for manual validation processes, minimizing operational costs and handling time for payment disputes."
  }
];

function SolutionOBStreamlineBankAccountVerification() {
  const intl = useIntl();

  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle={intl.formatMessage({ id: "ob.bank.acc.ver.upTitle" })} 
        title={intl.formatMessage({ id: "app.solutions.streamlineBankAccountVerification" })} 
        subTitle={intl.formatMessage({ id: "ob.bank.acc.ver.subTitle" })}
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "ob.bank.acc.ver.problem" })} 
        text1={<><p>{intl.formatMessage({ id: "ob.bank.acc.ver.problem.text1" })}</p></>}

        name2={intl.formatMessage({ id: "ob.bank.acc.ver.solution" })} 
        text2={<><p>{intl.formatMessage({ id: "ob.bank.acc.ver.solution.text2" })}</p></>}
      />
      <SolutionTemplate1Features features={features.map(feature => ({
        ...feature,
        name: intl.formatMessage({ id: `ob.bank.acc.ver.feature.${feature.name.replace(/\s+/g, '').toLowerCase()}.name` }),
        text: intl.formatMessage({ id: `ob.bank.acc.ver.feature.${feature.name.replace(/\s+/g, '').toLowerCase()}.text` })
      }))} />
      <SolutionTemplate1Statement 
        title={<><p>{intl.formatMessage({ id: "ob.bank.acc.ver.statement.title" })}</p></>}
        href=""
        showButton={false}
      />
      <SeeIt />

    </Section>
  );
}

export default SolutionOBStreamlineBankAccountVerification;
