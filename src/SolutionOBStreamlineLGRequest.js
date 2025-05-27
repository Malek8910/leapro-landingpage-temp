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
import homeImg from "./assets/solution-ob-streamline-lg-request.png";
import homeImg_ar from "./assets/solution-ob-streamline-lg-request.png";
import { useIntl } from "react-intl";

const Section = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.body}; 
`;

function SolutionOBStreamlineLGRequest() {
  const intl = useIntl();

  const features = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "ob.lgr.feature1.name" }),
      text: intl.formatMessage({ id: "ob.lgr.feature1.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M436.67-344 664-571.33l-47-46.34-178.33 178.34-95.34-95.34L295-486.33 436.67-344ZM480-80.67q-139.67-35-229.83-161.5Q160-368.67 160-520.67v-240l320-120 320 120v240q0 152-90.17 278.5Q619.67-115.67 480-80.67Zm0-69.33q111.33-36.33 182.33-139.67 71-103.33 71-231v-193.66L480-809.67l-253.33 95.34v193.66q0 127.67 71 231Q368.67-186.33 480-150Zm0-330Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "ob.lgr.feature2.name" }),
      text: intl.formatMessage({ id: "ob.lgr.feature2.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
        <path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </svg>
  
      ),
      name: intl.formatMessage({ id: "ob.lgr.feature3.name" }),
      text: intl.formatMessage({ id: "ob.lgr.feature3.text" })
    },
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M226.67-80q-27.5 0-47.09-19.58Q160-119.17 160-146.67v-422.66q0-27.5 19.58-47.09Q199.17-636 226.67-636h60v-90.67q0-80.23 56.57-136.78T480.07-920q80.26 0 136.76 56.55 56.5 56.55 56.5 136.78V-636h60q27.5 0 47.09 19.58Q800-596.83 800-569.33v422.66q0 27.5-19.58 47.09Q760.83-80 733.33-80H226.67Zm0-66.67h506.66v-422.66H226.67v422.66ZM480.11-280q32.22 0 55.06-22.52Q558-325.04 558-356.67q0-31-22.95-55.16Q512.11-436 479.89-436t-55.06 24.17Q402-387.67 402-356.33q0 31.33 22.95 53.83 22.94 22.5 55.16 22.5ZM353.33-636h253.34v-90.67q0-52.77-36.92-89.72-36.93-36.94-89.67-36.94-52.75 0-89.75 36.94-37 36.95-37 89.72V-636ZM226.67-146.67v-422.66 422.66Z"/></svg>
      ),
      name: intl.formatMessage({ id: "ob.lgr.feature4.name" }),
      text: intl.formatMessage({ id: "ob.lgr.feature4.text" })
    }
  ];

  
  
  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle={intl.formatMessage({ id: "ob.lgr.home.upTitle" })} 
        title={intl.formatMessage({ id: "app.solutions.streamlineLgRequests" })} 
        subTitle={intl.formatMessage({ id: "ob.lgr.home.subTitle" })} 
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "ob.lgr.pitch.name1" })} 
        text1={<><p>{intl.formatMessage({ id: "ob.lgr.pitch.text1.p1" })}</p>
        <p>{intl.formatMessage({ id: "ob.lgr.pitch.text1.p2" })}</p></>}

        name2={intl.formatMessage({ id: "ob.lgr.pitch.name2" })} 
        text2={<><p>{intl.formatMessage({ id: "ob.lgr.pitch.text2.p1" })}</p></>}
      />
      <SolutionTemplate1Features features={features} />
      <SolutionTemplate1Statement 
        title={<><p>{intl.formatMessage({ id: "ob.lgr.statement.title.p1" })}</p></>}
        href=""
        showButton={false}
      />
      <SeeIt />

    </Section>
  );
}

export default SolutionOBStreamlineLGRequest;
