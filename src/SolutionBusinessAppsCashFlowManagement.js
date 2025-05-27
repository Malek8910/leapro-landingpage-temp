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
import homeImg from "./assets/solution-business-apps-cash-flow-management.png";
import homeImg_ar from "./assets/solution-business-apps-cash-flow-management.png";
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




function SolutionBusinessAppsCashFlowManagement() {
  const intl = useIntl();

  const features = [
    {
      svg: (
  
  
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M295-119q-36-1-68.5-18.5T165-189q-40-48-62.5-114.5T80-440q0-83 31.5-156T197-723q54-54 127-85.5T480-840q83 0 156 31.67 73 31.66 127 86.66t85.5 129q31.5 74 31.5 159Q880-358 855.67-291 831.33-224 786-178q-28.67 29.33-60 44.17Q694.67-119 662-119q-18 0-36-4.5T590-137l-56-28q-12.67-6.67-26.17-9.67-13.5-3-27.83-3-14.33 0-27.83 3-13.5 3-26.17 9.67l-56 28q-19 10-37.5 14.5T295-119Zm2.67-66.67q10.33 0 21.16-2.66Q329.67-191 340-196l56-28q19.67-9.67 40.5-14.67t42.5-5q21.67 0 42.67 4.67T563-224l57 28q10.33 5 20.67 7.67 10.33 2.66 20.66 2.66 21.67 0 41.67-10.66 20-10.67 39-32 34-38 52.67-92.67 18.66-54.67 18.66-114.67 0-142-96.66-239.83Q620-773.33 480-773.33t-236.67 98.66Q146.67-576 146.67-434q0 61 18.83 115.33 18.83 54.34 53.17 92 19 21.34 38.33 31.17 19.33 9.83 40.67 9.83ZM480-480Zm0 113.33q30.33 0 51.83-21.5t21.5-51.83q0-8-1.5-16t-5.16-15.33l59.33-77q11.33 13.66 19.83 28.83 8.5 15.17 13.5 32.83H708q-17-82-80.83-134.33-63.84-52.33-147.17-52.33-83.33 0-147.67 52.5Q268-568.33 252-486.67h68.67q16-54 60-87t99.33-33q19.67 0 38.33 4.34 18.67 4.33 35.34 13L494-511.67q-3.33-.66-7-1.16-3.67-.5-7-.5-30.33 0-51.83 21.5T406.67-440q0 30.33 21.5 51.83t51.83 21.5Z"/></svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.cashflowm.feature1.name" }),
      text: intl.formatMessage({ id: "biz.apps.cashflowm.feature1.text" })
    },
    {
      svg: (
        
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.cashflowm.feature2.name" }),
      text: intl.formatMessage({ id: "biz.apps.cashflowm.feature2.text" })
    },
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M546.67-426.67q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-293.33q-27.5 0-47.08-19.59-19.59-19.58-19.59-47.08v-373.33q0-27.5 19.59-47.09Q212.5-800 240-800h613.33q27.5 0 47.09 19.58Q920-760.83 920-733.33V-360q0 27.5-19.58 47.08-19.59 19.59-47.09 19.59H240ZM333.33-360H760q0-39 27.17-66.17 27.16-27.16 66.16-27.16V-640q-39 0-66.16-27.17Q760-694.33 760-733.33H333.33q0 39-27.16 66.16Q279-640 240-640v186.67q39 0 66.17 27.16Q333.33-399 333.33-360ZM800-160H106.67q-27.5 0-47.09-19.58Q40-199.17 40-226.67V-680h66.67v453.33H800V-160ZM240-360v-373.33V-360Z"/></svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.cashflowm.feature3.name" }),
      text: intl.formatMessage({ id: "biz.apps.cashflowm.feature3.text" })
    },
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="m140-90-50.67-50.67 300-300 160 160.67 293.34-330 46.66 46-340 384-160-159.33L140-90Zm0-259.33L89.33-400l300-300 160 160.67 293.34-330 46.66 46-340 384-160-159.34L140-349.33Z"/></svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.cashflowm.feature4.name" }),
      text: intl.formatMessage({ id: "biz.apps.cashflowm.feature4.text" })
    }
  ];

  
  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle={intl.formatMessage({ id: "biz.apps.cashflowm.upTitle" })} 
        title={intl.formatMessage({ id: "app.solutions.cashFlowManagement" })} 
        subTitle={intl.formatMessage({ id: "biz.apps.cashflowm.subTitle" })} 
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "biz.apps.cashflowm.pitch.name1" })} 
        text1={<><p>{intl.formatMessage({ id: "biz.apps.cashflowm.pitch.text1" })}</p></>}

        name2={intl.formatMessage({ id: "biz.apps.cashflowm.pitch.name2" })} 
        text2={<><p>{intl.formatMessage({ id: "biz.apps.cashflowm.pitch.text2" })}</p></>}
      />


      


      <SolutionTemplate1Features features={features} />
      <SolutionTemplate1Statement 
        title={<><p>{intl.formatMessage({ id: "biz.apps.cashflowm.statement.title" })}</p></>}
        href=""
        showButton={false}
      />
      <SeeIt />

    </Section>
  );
}

export default SolutionBusinessAppsCashFlowManagement;
