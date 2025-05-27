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
import homeImg from "./assets/solution-ob-streamline-lg-issuance.png";
import homeImg_ar from "./assets/solution-ob-streamline-lg-issuance.png";
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



function SolutionOBStreamlineLGIssuance() {
  const intl = useIntl();

  const features = [
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M146.67-226.67v-506.66V-226.67Zm0 66.67q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800H414l66.67 66.67h332.66q27 0 46.84 19.83Q880-693.67 880-666.67v173.34q-15.67-8-32.5-10.84-16.83-2.83-34.17-1.83v-160.67H453l-66.67-66.66H146.67v506.66h348l-1.34 1.34V-160H146.67ZM560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8.67 9 12.83 20 4.17 11 4.17 22t-4.33 22.5q-4.34 11.5-13.28 20.5L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
      ),
      name: intl.formatMessage({ id: "ob.lgi.feature1.name" }),
      text: intl.formatMessage({ id: "ob.lgi.feature1.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M400-483.33q-66 0-109.67-43.67-43.66-43.67-43.66-109.67t43.66-109.66Q334-790 400-790t109.67 43.67q43.66 43.66 43.66 109.66T509.67-527Q466-483.33 400-483.33ZM80-162.67v-100q0-34.33 17.33-62.66 17.34-28.34 49.34-43.34 65-30 127.33-45.33 62.33-15.33 126-15.33h12.33q6.34 0 11.67.66-6.67 15.34-10.5 30.84t-6.17 35.16H400q-62.33 0-118.17 14.34Q226-334 174.67-308.67q-13.67 7-20.84 19.67-7.16 12.67-7.16 26.33v33.34H410q5.33 19 13.33 35.5T442-162.67H80ZM658-120l-10.67-64q-15.33-5-30.5-13.17Q601.67-205.33 590-216l-56 14-30-50.67 46.67-42.66q-2-10.67-2-25.34 0-14.66 2-25.33L504-388.67l30-50.66 56 14q11.67-10.67 26.83-18.84 15.17-8.16 30.5-13.16l10.67-64h62.67l10.66 64q15.34 5 30.5 13.33 15.17 8.33 26.84 19.33l56-14.66 30 51.33L828-345.33q2 10 2 25t-2 25l46.67 42.66-30 50.67-56-14q-11.67 10.67-26.84 18.83-15.16 8.17-30.5 13.17l-10.66 64H658Zm31.33-120.67q35 0 57.5-22.5t22.5-57.5q0-35-22.5-57.5t-57.5-22.5q-35 0-57.5 22.5t-22.5 57.5q0 35 22.5 57.5t57.5 22.5ZM400-550q37 0 61.83-24.83 24.84-24.84 24.84-61.84t-24.84-61.83Q437-723.33 400-723.33t-61.83 24.83q-24.84 24.83-24.84 61.83t24.84 61.84Q363-550 400-550Zm0-86.67Zm10 407.34Z"/></svg>
      ),
      name: intl.formatMessage({ id: "ob.lgi.feature2.name" }),
      text: intl.formatMessage({ id: "ob.lgi.feature2.text" })
    },
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z"/></svg>
      ),
      name: intl.formatMessage({ id: "ob.lgi.feature3.name" }),
      text: intl.formatMessage({ id: "ob.lgi.feature3.text" })
    },
    {
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M828.33-36.67 776-89q-10.67 4.33-21.5 6.67Q743.67-80 732.11-80H228q-45.83 0-77.92-32.08Q118-144.17 118-190v-123.33h124.67v-309L26.33-838.67 74-886.33l802 802-47.67 47.66Zm-601-110h491l-100-100H184.67V-190q0 18.42 12.5 30.88 12.5 12.45 30.16 12.45ZM842-213l-66.67-66.67v-493.66H281.67l-39-39V-880l59.86 60 59.87-60 59.87 60 59.86-60L542-820l60-60 60 60 60-60 60 60 60-60 60 60v667ZM309.33-313.33h242.34L309.33-555.67v242.34ZM441-614.67l-66.67-66.66H598v66.66H441Zm129.33 129.34L503.67-552H598v66.67h-27.67Zm116.22-3.34q-14.22 0-23.72-9.61-9.5-9.62-9.5-23.84 0-14.21 9.62-23.71t23.83-9.5q14.22 0 23.72 9.61 9.5 9.62 9.5 23.84 0 14.21-9.62 23.71-9.61 9.5-23.83 9.5Zm.12-126q-13.67 0-23.5-9.83-9.84-9.83-9.84-23.5t9.84-23.5q9.83-9.83 23.5-9.83 13.66 0 23.5 9.83Q720-661.67 720-648t-9.83 23.5q-9.84 9.83-23.5 9.83Zm-502 468v-100 100Z"/></svg>
      ),
      name: intl.formatMessage({ id: "ob.lgi.feature4.name" }),
      text: intl.formatMessage({ id: "ob.lgi.feature4.text" })
    }
  ];

  
  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle={intl.formatMessage({ id: "ob.lgi.home.upTitle" })} 
        title={intl.formatMessage({ id: "app.solutions.streamlineLgIssuance" })} 
        subTitle={intl.formatMessage({ id: "ob.lgi.home.subTitle" })} 
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "ob.lgi.pitch.name1" })} 
        text1={<><p>{intl.formatMessage({ id: "ob.lgi.pitch.text1.p1" })}</p></>}

        name2={intl.formatMessage({ id: "ob.lgi.pitch.name2" })} 
        text2={
          <>
            <p>{intl.formatMessage({ id: "ob.lgi.pitch.text2.p1" })}</p>
            <ul>
              <li>{intl.formatMessage({ id: "ob.lgi.pitch.text2.li1" })}</li>
              <li>{intl.formatMessage({ id: "ob.lgi.pitch.text2.li2" })}</li>
              <li>{intl.formatMessage({ id: "ob.lgi.pitch.text2.li3" })}</li>
              <li>{intl.formatMessage({ id: "ob.lgi.pitch.text2.li4" })}</li>
            </ul>
            <p>{intl.formatMessage({ id: "ob.lgi.pitch.text2.p2" })}</p>
          </>
        }
      />
      <SolutionTemplate1Features features={features} />
      <SolutionTemplate1Statement 
        title={
          <>
            <p>{intl.formatMessage({ id: "ob.lgi.statement.title.p1" })}</p>
          </>
        }
        href=""
        showButton={false}
      />
      <SeeIt />

    </Section>
  );
}

export default SolutionOBStreamlineLGIssuance;
