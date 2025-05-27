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
import homeImg from "./assets/solution-business-apps-analytics-and-insights.png";
import homeImg_ar from "./assets/solution-business-apps-analytics-and-insights.png";
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


function SolutionBusinessAppsAnalyticsAndInsights() {
  const intl = useIntl();

  const features = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.analytics.feature1.name" }),
      text: intl.formatMessage({ id: "biz.apps.analytics.feature1.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M436.67-344 664-571.33l-47-46.34-178.33 178.34-95.34-95.34L295-486.33 436.67-344ZM480-80.67q-139.67-35-229.83-161.5Q160-368.67 160-520.67v-240l320-120 320 120v240q0 152-90.17 278.5Q619.67-115.67 480-80.67Zm0-69.33q111.33-36.33 182.33-139.67 71-103.33 71-231v-193.66L480-809.67l-253.33 95.34v193.66q0 127.67 71 231Q368.67-186.33 480-150Zm0-330Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.analytics.feature2.name" }),
      text: intl.formatMessage({ id: "biz.apps.analytics.feature2.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760q33 0 63.83 7.33 30.84 7.34 58.17 21-14.33 11.34-26.67 24.17-12.33 12.83-24 26.83-16.66-6-34.5-9.33-17.83-3.33-36.83-3.33-88.33 0-150.83 62.16Q106.67-569 106.67-480q0 88.33 62.5 150.83 62.5 62.5 150.83 62.5 19 0 36.83-3.33 17.84-3.33 34.5-9.33 11.67 14 24 26.83 12.34 12.83 26.67 24.17-27.33 13.66-58.17 21Q353-200 320-200Zm320 0q-33 0-63.83-7.33-30.84-7.34-58.17-21 14.33-11.34 26.67-24.17 12.33-12.83 24-26.83 17 6 34.66 9.33 17.67 3.33 36.67 3.33 89 0 151.17-62.5 62.16-62.5 62.16-150.83 0-89-62.16-151.17Q729-693.33 640-693.33q-19 0-36.67 3.33-17.66 3.33-34.66 9.33-11.67-14-24-26.83-12.34-12.83-26.67-24.17 27.33-13.66 58.17-21Q607-760 640-760q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200Zm-160-50q-57-39-88.5-100T360-480q0-69 31.5-130T480-710q57 39 88.5 100T600-480q0 69-31.5 130T480-250Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.analytics.feature3.name" }),
      text: intl.formatMessage({ id: "biz.apps.analytics.feature3.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.analytics.feature4.name" }),
      text: intl.formatMessage({ id: "biz.apps.analytics.feature4.text" })
    }
  ];

  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle={intl.formatMessage({ id: "biz.apps.analytics.home.upTitle" })} 
        title={intl.formatMessage({ id: "app.solutions.analyticsAndInsights" })} 
        subTitle={intl.formatMessage({ id: "biz.apps.analytics.home.subTitle" })} 
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "biz.apps.analytics.pitch.name1" })} 
        text1={<><p>{intl.formatMessage({ id: "biz.apps.analytics.pitch.text1" })}</p></>}

        name2={intl.formatMessage({ id: "biz.apps.analytics.pitch.name2" })} 
        text2={<><p>{intl.formatMessage({ id: "biz.apps.analytics.pitch.text2" })}</p>
          <p>{intl.formatMessage({ id: "biz.apps.analytics.pitch.text22" })}</p>
        </>}
      />

      <SolutionTemplate1Features features={features} />
      <SolutionTemplate1Statement 
        title={<><p>{intl.formatMessage({ id: "biz.apps.analytics.statement.title" })}</p></>}
        href=""
        showButton={false}
      />
      <SeeIt />
    </Section>
  );
}

export default SolutionBusinessAppsAnalyticsAndInsights;
