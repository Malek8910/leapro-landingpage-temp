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
import Service1Home from "./components/solutions_template1_sections/SolutionTemplate1Home.js";
import Service1Pitch from "./components/solutions_template1_sections/SolutionTemplate1Pitch.js";
import Service1Features from "./components/solutions_template1_sections/SolutionTemplate1Features.js";
import Service1Statement from "./components/solutions_template1_sections/SolutionTemplate1Statement.js";
import SeeIt from "./components/home_sections/SeeIt.js";
import ProductTemplate1Home from "./components/products_template1_sections/ProductTemplate1Home.js";
import ProductTemplate1Pitch from "./components/products_template1_sections/ProductTemplate1Pitch.js";
import ProductTemplate1HowItWorks from "./components/products_template1_sections/ProductTemplate1HowItWorks.js";
import ProductTemplate1Features from "./components/products_template1_sections/ProductTemplate1Features.js";
import ProductTemplate1Statement from "./components/products_template1_sections/ProductTemplate1Statement.js";
import homeImg from "./assets/product-gurantee-link.png";
import homeImg_ar from "./assets/product-gurantee-link.png";
import manageBenef from "./assets/guaranteeApp-manage-benef.png";
import createLg from "./assets/guaranteeApp0-create-lg.png";
import submitLg from "./assets/guaranteeApp-submit-lg.png";
import track from "./assets/guaranteeApp-track.png";
import ProductTemplate2Steps from "./components/products_template2_sections/ProductTemplate2Steps.js";
import guaranteeApp from "./assets/guaranteeLink.svg";
import { useIntl } from "react-intl";

const Section = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.body}; 
`;



const ProductGuranteeLink = () => {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "app.products.guaranteeLink" });
  const title1 = intl.formatMessage({ id: "product.g.app.title1" });
  const subTitle = intl.formatMessage({ id: "product.g.app.subTitle" });
  const featuresTitle = "لماذا ليبرو؟";

  const members = [
    {
      name: "Problem",
      text: (
        <>
          <span>{intl.formatMessage({ id: "product.g.link.problem.intro" })}</span>
          <ul>
            <li>{intl.formatMessage({ id: "product.g.link.problem.point1" })}</li>
            <li>{intl.formatMessage({ id: "product.g.link.problem.point2" })}</li>
            <li>{intl.formatMessage({ id: "product.g.link.problem.point3" })}</li>
            <li>{intl.formatMessage({ id: "product.g.link.problem.point4" })}</li>
          </ul>
          <p>{intl.formatMessage({ id: "product.g.link.problem.conclusion" })}</p>
        </>
      ),
    },
    {
      name: "Solution",
      text: (
        <>
          <p>{intl.formatMessage({ id: "product.g.link.solution.intro1" })}</p>
          <p>{intl.formatMessage({ id: "product.g.link.solution.intro2" })}</p>
        </>
      ),
    },
  ];

  const features = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M102.67-240v-480l350.66 240-350.66 240Zm404.66 0v-480L858-480 507.33-240Zm-338-240ZM574-480ZM169.33-366.67l166-113.33-166-113.33v226.66Zm404.67 0L740-480 574-593.33v226.66Z" />
        </svg>
      ),
      title: intl.formatMessage({ id: "product.g.link.feature1.title" }),
      text: intl.formatMessage({ id: "product.g.link.feature1.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="m778-268-48-47.33L773.33-358v-244L602-773.33H358l-43.33 42.66L268-778l62-62h300l210 210v299.33L778-268ZM513.33-532v-153.33h-66.66v86.66L513.33-532Zm316 503.33L684-174l-54 54H330L120-330.67V-630l54-53.33-145.33-146L75.33-876 876-75.33l-46.67 46.66Zm-306.66-494ZM358-186.67h244l34.67-34-416-416-34 34.67v244L358-186.67Zm122-94q-15 0-25.83-10.83-10.84-10.83-10.84-25.83 0-15 10.84-25.84Q465-354 480-354q15 0 25.83 10.83 10.84 10.84 10.84 25.84t-10.84 25.83Q495-280.67 480-280.67Zm-51.33-148Z" />
        </svg>
      ),
      title: intl.formatMessage({ id: "product.g.link.feature2.title" }),
      text: intl.formatMessage({ id: "product.g.link.feature2.text" })
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3">
          <path d="M480.08-326.67q72.25 0 122.75-50.58 50.5-50.57 50.5-122.83 0-72.25-50.58-122.75-50.57-50.5-122.83-50.5-72.25 0-122.75 50.58-50.5 50.57-50.5 122.83 0 72.25 50.58 122.75 50.57 50.5 122.83 50.5Zm-.24-62.66q-46.17 0-78.34-32.33-32.17-32.32-32.17-78.5 0-46.17 32.33-78.34 32.32-32.17 78.5-32.17 46.17 0 78.34 32.33 32.17 32.32 32.17 78.5 0 46.17-32.33 78.34-32.32 32.17-78.5 32.17ZM480-200q-146 0-264.67-82.5Q96.67-365 40-500q56.67-135 175.33-217.5Q334-800 480-800t264.67 82.5Q863.33-635 920-500q-56.67 135-175.33 217.5Q626-200 480-200Zm0-300Zm-.11 233.33q118.44 0 217.61-63.5 99.17-63.5 151.17-169.83-52-106.33-151.06-169.83-99.05-63.5-217.5-63.5-118.44 0-217.61 63.5-99.17 63.5-151.83 169.83 52.66 106.33 151.72 169.83 99.05 63.5 217.5 63.5Z" />
        </svg>
      ),
      title: intl.formatMessage({ id: "product.g.link.feature3.title" }),
      text: intl.formatMessage({ id: "product.g.link.feature3.text" })
    }
  ];

  const steps = [
    {
      name: intl.formatMessage({ id: "product.g.link.step1.name" }),
      text: intl.formatMessage({ id: "product.g.link.step1.text" }),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1F366B">
          <path d="M480.18-80q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Zm-12 202h66.67v-404H386v66.67h82V-278Z"/>
        </svg>
      ),
    },
    {
      name: intl.formatMessage({ id: "product.g.link.step2.name" }),
      text: intl.formatMessage({ id: "product.g.link.step2.text" }),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1F366B">
          <path d="M480.18-80q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480ZM363.33-278h233.34v-66.67H430V-448h100q27 0 46.83-19.83 19.84-19.84 19.84-46.84v-100.66q0-27-19.84-46.84Q557-682 530-682H363.33v66.67H530v100.66H430q-27 0-46.83 19.84Q363.33-475 363.33-448v170Z"/>
        </svg>
      ),
    },
    {
      name: intl.formatMessage({ id: "product.g.link.step3.name" }),
      text: intl.formatMessage({ id: "product.g.link.step3.text" }),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1F366B">
          <path d="M480.18-80q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480ZM363.33-278H530q27 0 46.83-19.83 19.84-19.84 19.84-46.84v-78q0-26.66-15.34-42.66-15.33-16-37.33-16 22 0 37.33-14.67 15.34-14.67 15.34-42v-77.33q0-27-19.84-46.84Q557-682 530-682H363.33v66.67H530v100.66h-84.67V-448H530v103.33H363.33V-278Z"/>
        </svg>
      ),
    }
  ];

  const stepsTitle = intl.formatMessage({ id: "product.g.link.stepsTitle" });

  return (
    <Section>
      <ProductTemplate1Home
        title={title}
        title1={title1}
        subTitle={subTitle}
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
        guaranteeApp={guaranteeApp}
      />
      <ProductTemplate1Pitch members={members} />
      <ProductTemplate2Steps title={stepsTitle} steps={steps} />
      <ProductTemplate1Features title={featuresTitle} features={features} />
      <ProductTemplate1Statement title={intl.formatMessage({ id: "product.g.link.statement" })} />
      <SeeIt />
    </Section>
  );
}

export default ProductGuranteeLink;
