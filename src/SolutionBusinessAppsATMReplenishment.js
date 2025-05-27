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
import homeImg from "./assets/solution-business-apps-amt-replenishment.png";
import homeImg_ar from "./assets/solution-business-apps-amt-replenishment.png";
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




function SolutionBusinessAppsATMReplenishment() {
  const intl = useIntl();

  const features = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z" />
        </svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.atm.feature1.name" }),
      text: intl.formatMessage({ id: "biz.apps.atm.feature1.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
        <path d="M320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760q33 0 63.83 7.33 30.84 7.34 58.17 21-14.33 11.34-26.67 24.17-12.33 12.83-24 26.83-16.66-6-34.5-9.33-17.83-3.33-36.83-3.33-88.33 0-150.83 62.16Q106.67-569 106.67-480q0 88.33 62.5 150.83 62.5 62.5 150.83 62.5 19 0 36.83-3.33 17.84-3.33 34.5-9.33 11.67 14 24 26.83 12.34 12.83 26.67 24.17-27.33 13.66-58.17 21Q353-200 320-200Zm320 0q-33 0-63.83-7.33-30.84-7.34-58.17-21 14.33-11.34 26.67-24.17 12.33-12.83 24-26.83 17 6 34.66 9.33 17.67 3.33 36.67 3.33 89 0 151.17-62.5 62.16-62.5 62.16-150.83 0-89-62.16-151.17Q729-693.33 640-693.33q-19 0-36.67 3.33-17.66 3.33-34.66 9.33-11.67-14-24-26.83-12.34-12.83-26.67-24.17 27.33-13.66 58.17-21Q607-760 640-760q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200Zm-160-50q-57-39-88.5-100T360-480q0-69 31.5-130T480-710q57 39 88.5 100T600-480q0 69-31.5 130T480-250Z" />
      </svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.atm.feature2.name" }),
      text: intl.formatMessage({ id: "biz.apps.atm.feature2.text" })
    },
    {
      svg: (
  
  
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M400.04-306.67q105.29 0 179.63-74.08Q654-454.83 654-560.67q0-105.27-74.33-178.97-74.34-73.69-179.63-73.69-105.3 0-179 73.69-73.71 73.7-73.71 178.97 0 105.84 73.71 179.92 73.7 74.08 179 74.08Zm-32.71-138.66v-271.34H434v271.34h-66.67Zm-143.33 0v-189.34h66.67v189.34H224Zm286.67 0V-594h66.66v148.67h-66.66ZM833.33-80l-231-231.67q-41.66 34-93.16 52.84Q457.68-240 400-240q-133.33 0-226.33-93.33-93-93.34-93-227.14 0-133.8 92.86-226.67Q266.39-880 400.2-880q133.8 0 227.13 93 93.34 93 93.34 226.33 0 57.68-18.84 109.17Q683-400 649-358.33l231 231L833.33-80Z"/></svg>
  
      ),
      name: intl.formatMessage({ id: "biz.apps.atm.feature3.name" }),
      text: intl.formatMessage({ id: "biz.apps.atm.feature3.text" })
    },
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M602.67-120v-123.33h-156V-650H358v126.67H80V-840h278v123.33h244.67V-840H880v316.67H602.67V-650h-89.34v340h89.34v-126.67H880V-120H602.67Zm-456-653.33V-590v-183.33ZM669.33-370v183.33V-370Zm0-403.33V-590v-183.33Zm0 183.33h144v-183.33h-144V-590Zm0 403.33h144V-370h-144v183.33ZM146.67-590h144.66v-183.33H146.67V-590Z"/></svg>
      ),
      name: intl.formatMessage({ id: "biz.apps.atm.feature4.name" }),
      text: intl.formatMessage({ id: "biz.apps.atm.feature4.text" })
    }
  ];
  
  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle={intl.formatMessage({ id: "biz.apps.atm.home.upTitle" })} 
        title={intl.formatMessage({ id: "app.solutions.atmReplenishment" })} 
        subTitle={intl.formatMessage({ id: "biz.apps.atm.home.subTitle" })} 
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "biz.apps.atm.pitch.name1" })} 
        text1={<><p>{intl.formatMessage({ id: "biz.apps.atm.pitch.text1" })}</p></>}

        name2={intl.formatMessage({ id: "biz.apps.atm.pitch.name2" })} 
        text2={<><p>{intl.formatMessage({ id: "biz.apps.atm.pitch.text2" })}</p></>}
      />


      


      <SolutionTemplate1Features features={features} />
      <SolutionTemplate1Statement 
        title={<><p>{intl.formatMessage({ id: "biz.apps.atm.statement.title" })}</p></>}
        href=""
        showButton={false}
      />
      <SeeIt />

    </Section>
  );
}

export default SolutionBusinessAppsATMReplenishment;
