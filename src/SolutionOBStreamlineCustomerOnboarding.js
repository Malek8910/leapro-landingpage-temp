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
import homeImg from "./assets/solution-ob-streamline-customer-onboarding.png";
import homeImg_ar from "./assets/solution-ob-streamline-customer-onboarding.png";
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
      <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M624-528.67q23.33 0 39.67-16.33Q680-561.33 680-584.67q0-23.33-16.33-39.66-16.34-16.34-39.67-16.34-23.33 0-39.67 16.34Q568-608 568-584.67q0 23.34 16.33 39.67 16.34 16.33 39.67 16.33Zm-288 0q23.33 0 39.67-16.33Q392-561.33 392-584.67q0-23.33-16.33-39.66-16.34-16.34-39.67-16.34-23.33 0-39.67 16.34Q280-608 280-584.67q0 23.34 16.33 39.67 16.34 16.33 39.67 16.33Zm144 268q66.67 0 122.17-36.5t80.5-98.16H626q-22.67 39-61.5 60.5t-84.17 21.5q-45.33 0-84.5-21.17-39.16-21.17-61.16-60.83h-57.34q25.67 61.66 80.84 98.16 55.16 36.5 121.83 36.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 333.33q139.58 0 236.46-96.87 96.87-96.88 96.87-236.46t-96.87-236.46Q619.58-813.33 480-813.33t-236.46 96.87Q146.67-619.58 146.67-480t96.87 236.46q96.88 96.87 236.46 96.87Z"/></svg>
    ),
    name: "ob.customer.on.feature1.name",
    text: "ob.customer.on.feature1.text"
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M480-120q-18 0-34.5-6.5T416-146L153-410l-5-5q-2.33-2.33-4.33-5h93.66l226.34 226.33q4 4 7.7 5.5t8.63 1.5q4.93 0 8.63-1.5 3.7-1.5 7.7-5.5l267-268q25-25 37.67-58.5 12.67-33.5 12.67-69.83-.67-74.33-48.63-128.5-47.97-54.17-119.91-54.17-33.8 0-64.96 13.67Q549-745.33 526-720.33l-27 29q-3.67 4-8.33 6.5-4.67 2.5-10.67 2.5t-11.09-2.43q-5.09-2.42-8.91-6.57l-27-29q-23.18-24.88-54.09-38.94Q348-773.33 314-773.33q-64.67 0-109.83 44.83Q159-683.67 149.67-620H82.33q11-91.67 75.17-155.83Q221.67-840 314-840q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L543-146q-13 13-29 19.5t-34 6.5Zm-5-366.67H80.67v-66.66H635q19.83 0 33.25-13.39 13.42-13.38 13.42-33.16 0-19.79-13.42-33.29T635-646.67q-14 0-26 7.17T592-619l-64.33-17.67q11.66-34.33 41-55.5Q598-713.33 635-713.33q47.22 0 80.28 33.08 33.05 33.07 33.05 80.33 0 47.25-33.05 80.25-33.06 33-80.28 33h-57q5 10.67 7.67 22.07 2.66 11.4 2.66 24.6 0 47.22-33.05 80.28-33.06 33.05-80.28 33.05-37 0-66.33-21.16-29.34-21.17-41-55.5L432-421q5 13.33 17 20.5t26 7.17q19.83 0 33.25-13.39 13.42-13.38 13.42-33.16 0-19.79-13.42-33.29T475-486.67Zm6.33 6.67Z"/></svg>
    ),
    name: "ob.customer.on.feature2.name",
    text: "ob.customer.on.feature2.text"
  },
  {
    svg: (
<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z"/></svg>
    ),
    name: "ob.customer.on.feature3.name",
    text: "ob.customer.on.feature3.text"
  },
  {
    svg: (
<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="m345.33-60-76-129.33-148.66-31.34 16-147.33L40-480l96.67-111.33-16-147.34L269.33-770l76-130L480-839.33 614.67-900l76.66 130 148 31.33-16 147.34L920-480l-96.67 112 16 147.33-148 31.34L614.67-60 480-120.67 345.33-60Zm29.34-86.67L480-191.33l108 44.66 63.33-98.66L766-274l-11.33-116.67L833.33-480l-78.66-91.33L766-688l-114.67-26.67L586-813.33l-106 44.66-108-44.66-63.33 98.66L194-688l11.33 116.67L126.67-480l78.66 89.33L194-272l114.67 26.67 66 98.66ZM480-480Zm-42.67 136L664-569.33 615.33-616l-178 176.67-92-94L296-484.67 437.33-344Z"/></svg>
    ),
    name: "ob.customer.on.feature4.name",
    text: "ob.customer.on.feature4.text"
  }
];

function SolutionOBStreamlineCustomerOnboarding() {
  const intl = useIntl();

  return (
    <Section>
      <SolutionTemplate1Home 
        upTitle={intl.formatMessage({ id: "ob.customer.on.upTitle" })} 
        title={intl.formatMessage({ id: "app.solutions.streamlineCustomerOnboarding" })} 
        subTitle={intl.formatMessage({ id: "ob.customer.on.subTitle" })} 
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
      />
      <SolutionTemplate1Pitch 
        name1={intl.formatMessage({ id: "ob.customer.on.problem.name" })} 
        text1={<><p>{intl.formatMessage({ id: "ob.customer.on.problem.text" })}</p></>}

        name2={intl.formatMessage({ id: "ob.customer.on.solution.name" })} 
        text2={<><p>{intl.formatMessage({ id: "ob.customer.on.solution.text" })}</p></>}
      />
      <SolutionTemplate1Features features={features.map(feature => ({
        ...feature,
        name: intl.formatMessage({ id: feature.name }),
        text: intl.formatMessage({ id: feature.text })
      }))} />
      <SolutionTemplate1Statement 
        title={<><p>{intl.formatMessage({ id: "ob.customer.on.statement.title" })}</p></>}

        href=""
        showButton={false}
      />
      <SeeIt />

    </Section>
  );
}

export default SolutionOBStreamlineCustomerOnboarding;
