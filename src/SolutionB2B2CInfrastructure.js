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
import homeImg from "./assets/service-b2b2c-infrastructure.png";
import homeImg_ar from "./assets/service-b2b2c-infrastructure.png";
import { useIntl } from "react-intl";

const Section = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.body}; 
`;

function SolutionB2B2CInfrastructure() {
  const intl = useIntl();

  const features = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M622.67-40q-105.34 0-185.17-63.67-79.83-63.66-103.83-161 34.33.67 68.66-6 34.34-6.66 65-19.33h210.11q1.28-13.12 1.92-25.63.64-12.52.64-25.64 0-10.73-.17-22.23-.16-11.5-1.83-22.5h-71.67q13.52-15.1 24.93-31.89 11.41-16.78 21.07-34.78h170.34q-22-38-56-65.5t-77-40.16q3-16 4.5-33.34 1.5-17.33 1.16-34 97.34 24 161 103.5Q920-442.67 920-338q0 124.17-86.72 211.08Q746.56-40 622.67-40Zm-84.34-84q-9.66-24.67-16.83-49-7.17-24.33-11.83-50.33h-87q19.66 33.66 49.16 59.33 29.5 25.67 66.5 40Zm84.34 14q16-26.67 26.83-55.33 10.83-28.67 17.5-58h-89.33q4 16.66 17.33 51.66 13.33 35 27.67 61.67ZM707-124q37-14.33 66.5-40t49.17-59.33h-87q-5 26-12 50.33T707-124Zm37.67-166h103.64q2.36-11.33 3.69-23.17 1.33-11.83 1.33-24.99 0-13.15-1.33-24.52-1.33-11.36-4-23.32H744.67q1.66 11 2.16 22.17.5 11.16.5 22.83 0 13.06-.5 25.53T744.67-290Zm-406.55-34.67q-124.22 0-211.17-86.95Q40-498.57 40-622.78 40-747 126.95-833.5T338.12-920q124.21 0 210.71 86.5 86.5 86.5 86.5 210.72 0 124.21-86.5 211.16t-210.71 86.95Zm-.14-66.66q95.69 0 163.19-67.82t67.5-163.5q0-95.68-67.63-163.18T338-853.33q-95.69 0-163.51 67.62-67.82 67.63-67.82 163.04 0 95.69 67.81 163.51 67.82 67.83 163.5 67.83ZM236.33-650q14 0 23.5-9.83 9.5-9.84 9.5-23.84t-9.58-23.5q-9.58-9.5-23.75-9.5-13.67 0-23.5 9.59-9.83 9.58-9.83 23.75 0 13.66 9.83 23.5 9.83 9.83 23.83 9.83ZM338-471.33q46.4 0 82.65-26.07 36.25-26.06 52.68-66.6H202.67q16.43 40.54 52.68 66.6 36.25 26.07 82.65 26.07ZM439.67-650q14 0 23.5-9.83 9.5-9.84 9.5-23.84t-9.59-23.5q-9.58-9.5-23.75-9.5-13.66 0-23.5 9.59-9.83 9.58-9.83 23.75 0 13.66 9.83 23.5 9.84 9.83 23.84 9.83ZM338-622.67Z"/></svg>
      ),
      name: intl.formatMessage({ id: "b2b2c.feature1.name" }),
      text: intl.formatMessage({ id: "b2b2c.feature1.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
        <path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z" />
      </svg>
      ),
      name: intl.formatMessage({ id: "b2b2c.feature2.name" }),
      text: intl.formatMessage({ id: "b2b2c.feature2.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
        <path d="M436.67-344 664-571.33l-47-46.34-178.33 178.34-95.34-95.34L295-486.33 436.67-344ZM480-80.67q-139.67-35-229.83-161.5Q160-368.67 160-520.67v-240l320-120 320 120v240q0 152-90.17 278.5Q619.67-115.67 480-80.67Zm0-69.33q111.33-36.33 182.33-139.67 71-103.33 71-231v-193.66L480-809.67l-253.33 95.34v193.66q0 127.67 71 231Q368.67-186.33 480-150Zm0-330Z" />
      </svg>
      ),
      name: intl.formatMessage({ id: "b2b2c.feature3.name" }),
      text: intl.formatMessage({ id: "b2b2c.feature3.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M745.33-625.33Q719-599 686-586t-67.33 13q-34.34 0-67-12.83-32.67-12.84-59-39.5l-75-75q-16.34-16.34-36.34-24.17-20-7.83-41.33-7.83t-41.33 7.83q-20 7.83-36.34 24.17L192-630l-47.67-47.67L214.67-748q26.33-26.33 59-39.17Q306.33-800 340-800t65.83 12.83Q438-774.33 464.33-748l75 75Q556-656.33 576-648.17q20 8.17 42 8.17t42.5-8.17q20.5-8.16 37.17-24.83L768-743.33l47.67 47.66-70.34 70.34Zm0 206.66Q719-392.33 686.17-379.5q-32.84 12.83-67.17 12.83t-67.17-12.83q-32.83-12.83-59.16-39.17l-75-75q-16.34-16.33-36.34-24.16-20-7.84-41.33-7.84t-41.33 7.84q-20 7.83-36.34 24.16L192-423.33 144.33-470l70.34-71.33q26.33-26.34 59-39.17 32.66-12.83 66.33-12.83t65.83 12.83q32.17 12.83 58.5 39.17l75 75q16.67 16.66 37 24.83 20.34 8.17 42.34 8.17 22 0 42.16-8.17 20.17-8.17 36.84-24.83L768-536.67 815.67-489l-70.34 70.33Zm-1 206.67q-26.33 26.33-58.66 39.17Q653.33-160 619-160t-67.17-12.83Q519-185.67 492.67-212l-76-75q-16.34-16.33-36.34-24.17-20-7.83-41.33-7.83t-41.33 7.83q-20 7.84-36.34 24.17L191-216.67l-46.67-46.66 70.34-71.34Q241-361 273.33-373.83q32.34-12.84 66-12.84 33.67 0 66.17 12.84Q438-361 464.33-334.67l75 75Q556-243 576.5-234.83q20.5 8.16 42.5 8.16t42-8.16q20-8.17 36.67-24.84L768-330l46.67 47.67L744.33-212Z"/></svg>
      ),
      name: intl.formatMessage({ id: "b2b2c.feature4.name" }),
      text: intl.formatMessage({ id: "b2b2c.feature4.text" })
    }
  ];


  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle={intl.formatMessage({ id: "app.navigation.integration" })} 
        title={intl.formatMessage({ id: "app.solutions.b2b2cInfrastructure" })} 
        subTitle={intl.formatMessage({ id: "b2b2c.subTitle" })} 
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "b2b2c.pitch.name1" })} 
        text1={<><p>{intl.formatMessage({ id: "b2b2c.pitch.text1.p1" })}</p>
        <ul>
          <li>{intl.formatMessage({ id: "b2b2c.pitch.text1.li1" })}</li>
          <li>{intl.formatMessage({ id: "b2b2c.pitch.text1.li2" })}</li>
          <li>{intl.formatMessage({ id: "b2b2c.pitch.text1.li3" })}</li>
          <li>{intl.formatMessage({ id: "b2b2c.pitch.text1.li4" })}</li>
        </ul></>}
        name2={intl.formatMessage({ id: "b2b2c.pitch.name2" })} 
        text2={<><p>{intl.formatMessage({ id: "b2b2c.pitch.text2.p1" })}</p></>}
      />
      <SolutionTemplate1Features features={features} />
      <SolutionTemplate1Statement 
        title={<><p>{intl.formatMessage({ id: "b2b2c.statement.title.p1" })}</p>
        <br></br>
        <p>{intl.formatMessage({ id: "b2b2c.statement.title.p2" })}</p></>}
        href=""
        showButton={false}
      />
      <SeeIt />

    </Section>
  );
}

export default SolutionB2B2CInfrastructure;
