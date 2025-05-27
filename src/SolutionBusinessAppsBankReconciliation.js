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
import homeImg from "./assets/solution-business-apps-bank-reconciliation.png";
import homeImg_ar from "./assets/solution-business-apps-bank-reconciliation.png";
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




function SolutionBusinessAppsBankReconciliation() {
  const intl = useIntl();

  const features = [
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="m345.33-60-76-129.33-148.66-31.34 16-147.33L40-480l96.67-111.33-16-147.34L269.33-770l76-130L480-839.33 614.67-900l76.66 130 148 31.33-16 147.34L920-480l-96.67 112 16 147.33-148 31.34L614.67-60 480-120.67 345.33-60Zm29.34-86.67L480-191.33l108 44.66 63.33-98.66L766-274l-11.33-116.67L833.33-480l-78.66-91.33L766-688l-114.67-26.67L586-813.33l-106 44.66-108-44.66-63.33 98.66L194-688l11.33 116.67L126.67-480l78.66 89.33L194-272l114.67 26.67 66 98.66ZM480-480Zm-42.67 136L664-569.33 615.33-616l-178 176.67-92-94L296-484.67 437.33-344Z"/></svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.bank.recon.feature1.name" }),
      text: intl.formatMessage({ id: "biz.apps.bank.recon.feature1.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.bank.recon.feature2.name" }),
      text: intl.formatMessage({ id: "biz.apps.bank.recon.feature2.text" })
    },
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M480.08-326.67q72.25 0 122.75-50.58 50.5-50.57 50.5-122.83 0-72.25-50.58-122.75-50.57-50.5-122.83-50.5-72.25 0-122.75 50.58-50.5 50.57-50.5 122.83 0 72.25 50.58 122.75 50.57 50.5 122.83 50.5Zm-.24-62.66q-46.17 0-78.34-32.33-32.17-32.32-32.17-78.5 0-46.17 32.33-78.34 32.32-32.17 78.5-32.17 46.17 0 78.34 32.33 32.17 32.32 32.17 78.5 0 46.17-32.33 78.34-32.32 32.17-78.5 32.17ZM480-200q-146 0-264.67-82.5Q96.67-365 40-500q56.67-135 175.33-217.5Q334-800 480-800t264.67 82.5Q863.33-635 920-500q-56.67 135-175.33 217.5Q626-200 480-200Zm0-300Zm-.11 233.33q118.44 0 217.61-63.5 99.17-63.5 151.17-169.83-52-106.33-151.06-169.83-99.05-63.5-217.5-63.5-118.44 0-217.61 63.5-99.17 63.5-151.83 169.83 52.66 106.33 151.72 169.83 99.05 63.5 217.5 63.5Z"/></svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.bank.recon.feature3.name" }),
      text: intl.formatMessage({ id: "biz.apps.bank.recon.feature3.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760q33 0 63.83 7.33 30.84 7.34 58.17 21-14.33 11.34-26.67 24.17-12.33 12.83-24 26.83-16.66-6-34.5-9.33-17.83-3.33-36.83-3.33-88.33 0-150.83 62.16Q106.67-569 106.67-480q0 88.33 62.5 150.83 62.5 62.5 150.83 62.5 19 0 36.83-3.33 17.84-3.33 34.5-9.33 11.67 14 24 26.83 12.34 12.83 26.67 24.17-27.33 13.66-58.17 21Q353-200 320-200Zm320 0q-33 0-63.83-7.33-30.84-7.34-58.17-21 14.33-11.34 26.67-24.17 12.33-12.83 24-26.83 17 6 34.66 9.33 17.67 3.33 36.67 3.33 89 0 151.17-62.5 62.16-62.5 62.16-150.83 0-89-62.16-151.17Q729-693.33 640-693.33q-19 0-36.67 3.33-17.66 3.33-34.66 9.33-11.67-14-24-26.83-12.34-12.83-26.67-24.17 27.33-13.66 58.17-21Q607-760 640-760q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200Zm-160-50q-57-39-88.5-100T360-480q0-69 31.5-130T480-710q57 39 88.5 100T600-480q0 69-31.5 130T480-250Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.bank.recon.feature4.name" }),
      text: intl.formatMessage({ id: "biz.apps.bank.recon.feature4.text" })
    }
  ];
  
  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle={intl.formatMessage({ id: "biz.apps.bank.recon.home.upTitle" })} 
        title={intl.formatMessage({ id: "app.solutions.bankReconciliation" })} 
        subTitle={intl.formatMessage({ id: "biz.apps.bank.recon.home.subTitle" })} 
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "biz.apps.bank.recon.pitch.name1" })} 
        text1={<><p>{intl.formatMessage({ id: "biz.apps.bank.recon.pitch.text1" })}</p></>}

        name2={intl.formatMessage({ id: "biz.apps.bank.recon.pitch.name2" })} 
        text2={<><p>{intl.formatMessage({ id: "biz.apps.bank.recon.pitch.text2" })}</p></>}
      />


      


      <SolutionTemplate1Features features={features} />
      <SolutionTemplate1Statement 
        title={<><p>{intl.formatMessage({ id: "biz.apps.bank.recon.statement.title" })}</p></>}
        href=""
        showButton={false}
      />
      <SeeIt />

    </Section>
  );
}

export default SolutionBusinessAppsBankReconciliation;
