import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles.js";
import { light } from "./styles/Themes.js";
import Navigation from "./components/Navigation.js";
import Home from "./components/home_sections/Home.js";

import About from "./components/home_sections/About.js";
import Footer from "./components/Footer.js";
import React, { Fragment, useEffect, useState } from "react";
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
import Product1Home from "./components/products_template1_sections/ProductTemplate1Home.js";
import Product1Pitch from "./components/products_template1_sections/ProductTemplate1Pitch.js";
import Product1HowItWorks from "./components/products_template1_sections/ProductTemplate1HowItWorks.js";
import Product1Features from "./components/products_template1_sections/ProductTemplate1Features.js";
import Product1Statement from "./components/products_template1_sections/ProductTemplate1Statement.js";
import ProductTemplate2Home from "./components/products_template2_sections/ProductTemplate2Home.js";
import ProductTemplate2Features from "./components/products_template2_sections/ProductTemplate2Features.js";
import ProductTemplate2Steps from "./components/products_template2_sections/ProductTemplate2Steps.js";
import ProductTemplate2Statement from "./components/products_template2_sections/ProductTemplate2Statement.js";
import Facebook from "./Icons/Facebook.js";
import ProductTemplate2Faq from "./components/products_template2_sections/ProductTemplate2Faq.js";
import axios from "axios";
import useId from "react-use-uuid";
import { Context } from "./components/Wrapper.js";
import homeImg from "./assets/ob-client-connector.png";
import homeImg_ar from "./assets/ob-client-connector.png";
import ProductTemplate1Home from "./components/products_template1_sections/ProductTemplate1Home.js";
import obConnector from "./assets/obConnector.svg";
import ProductTemplate1Statement from "./components/products_template1_sections/ProductTemplate1Statement.js";
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




function ProductOBClientConnector() {
  const intl = useIntl();
  const [scrollDone, setScrollDone] = useState(false);


	const [userUUID, setUserUUID] = React.useState(() => {
    // getting stored value
    const saved = localStorage.getItem("userUUID");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });


  const [y, setY] = useState(window.scrollY);
  
  
  
  useEffect(() => {

    if (userUUID === "") {
      //if found in localstorage load it
      ///setUserUUID(userUUIDVaIe);
      //} else {
      //if not found save
  
      setUserUUID(id);
      localStorage.setItem("userUUID", JSON.stringify(id));
    }

    
    window.addEventListener("scroll", (e) => handleScroll(e));
  
    return () => { // return a cleanup function to unregister our function since it will run multiple times
      window.removeEventListener("scroll", (e) => handleScroll(e));
    };

    setScrollDone(false);
  }, [y,userUUID,scrollDone]);


  function handleScroll(event) {
    // console.log('User scrolled!', event);
    // console.log(scrollDone);

    // //to call the scroll post event one time only (not working!!)
    // if (scrollDone === false){
    //   setScrollDone(true);

    //     //console.log(userUUID);
    //     if (userUUID !== "") {
    //       sendTrigger(userUUID);
    //     }
    //     else
    //       sendTrigger("userUUID");

    //   }
  }






  let axiosEnabled = true;
  const id = useId();
  const context = React.useContext(Context);

  const sendTrigger = async () => {
    //=========== semding trigger
    let doc = {
      document: {
        userId: userUUID,
        type: "Finance-LandingPage-Scrolled",
        local: context.locale,
      },
    };

    //setIsLoading(true);
    try {
      let { data } = "";

      if (axiosEnabled === true) {
        data = await axios.post(
          "https://landingpage-triggers.azurewebsites.net/api/landingpage-triggers?code=dDJ-cf4giE8k9C0HSuxsgT4Q4mgux1XMVwcOJ2Y-MdHRAzFuSTTdjQ%3D%3D",
          doc,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
      }

      //console.log("reponse data is: ", JSON.stringify(data, null, 4));

      //setData(data);
    } catch (err) {
      //setErr(err.message);
      //console.log("error message is: ", JSON.stringify(err.message, null, 4));
    } finally {
      //setIsLoading(false);
    }
    //===========
  };

 const featuresTitle = intl.formatMessage({ id: "product.ob.client.featuresTitle" });

  const features = [
    {
      svg: (
        <svg style={{background: "#D3E1FB", padding: "8px", borderRadius: "8px"}} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="m200-553.67 96.67 41Q313.33-546 332-578q18.67-32 40-62l-71.33-14.33L200-553.67ZM350-472l126.67 126.33q52-22.66 101.33-55.66T662-469q77.33-77.33 115.83-162.5T816.67-812q-95.34.33-180.67 38.83-85.33 38.5-162.67 115.84-34.66 34.66-67.66 84Q372.67-524 350-472Zm212-85.67q-21-21-21-51.83t21-51.83q21-21 52-21t52 21q21 21 21 51.83t-21 51.83q-21 21-52 21t-52-21Zm-3.67 362.34L659-296l-14.33-71.33q-30 21.33-62 39.83t-65.34 35.17l41 97ZM880-875.67q12.33 131-30.5 243.84Q806.67-519 706-418.33q-.67.66-1.33 1.33-.67.67-1.34 1.33l21.34 106.34Q728-292.67 723-277q-5 15.67-17 27.67L536-78.67l-84.67-197.66L281-446.67 83.33-531.33l170.34-170q12-12 27.83-17 15.83-5 32.5-1.67l106.33 21.33q.67-.66 1.34-1 .66-.33 1.33-1 100.67-100.66 213.33-144Q749-888 880-875.67Zm-728.33 552q35-35 85.5-35.5t85.5 34.5q35 35 34.5 85.5t-35.5 85.5q-25.67 25.67-81.5 43-55.84 17.34-162.84 32Q92-185.67 109-241.83q17-56.17 42.67-81.84Zm47 47.34Q186-263 175.33-232.83q-10.66 30.16-17.33 72.5 42.33-6.67 72.5-17.17 30.17-10.5 43.5-23.17 16.67-15.33 17.33-38Q292-261.33 276-278q-16.67-16-39.33-15.5-22.67.5-38 17.17Z"/></svg>
      ),
      title: intl.formatMessage({ id: "product.ob.client.feature1.title" }),
      details: intl.formatMessage({ id: "product.ob.client.feature1.details" }),
    },
    {
      svg: (
        <svg style={{background: "#D3E1FB", padding: "8px", borderRadius: "8px"}} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M160-160v-100q0-36.67 18.5-64.17T226.67-366q65.33-30.33 127.66-45.5 62.34-15.17 125.67-15.17 25 0 50 2.5t50 7.5v66.34q-25.33-5.34-50-7.5-24.67-2.17-50-2.17-56.67 0-110.67 12.5T254.67-306q-12.34 6.33-20.17 19-7.83 12.67-7.83 27v33.33H580V-160H160Zm66.67-66.67H580 226.67Zm253.33-254q-66 0-109.67-43.66Q326.67-568 326.67-634t43.66-109.67Q414-787.33 480-787.33t109.67 43.66Q633.33-700 633.33-634t-43.66 109.67Q546-480.67 480-480.67Zm0-66.66q37 0 61.83-24.84Q566.67-597 566.67-634t-24.84-61.83Q517-720.67 480-720.67t-61.83 24.84Q393.33-671 393.33-634t24.84 61.83Q443-547.33 480-547.33Zm0-86.67ZM726.67-25.33v-181.34h-80v-226.66h222.66l-80 160h79.34l-142 248Z"/></svg>
      ),
      title: intl.formatMessage({ id: "product.ob.client.feature2.title" }),
      details: intl.formatMessage({ id: "product.ob.client.feature2.details" }),
    },
    {
      svg: (
        <svg style={{background: "#D3E1FB", padding: "8px", borderRadius: "8px"}} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0693E3"><path d="M546.67-426.67q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-293.33q-27.5 0-47.08-19.59-19.59-19.58-19.59-47.08v-373.33q0-27.5 19.59-47.09Q212.5-800 240-800h613.33q27.5 0 47.09 19.58Q920-760.83 920-733.33V-360q0 27.5-19.58 47.08-19.59 19.59-47.09 19.59H240ZM333.33-360H760q0-39 27.17-66.17 27.16-27.16 66.16-27.16V-640q-39 0-66.16-27.17Q760-694.33 760-733.33H333.33q0 39-27.16 66.16Q279-640 240-640v186.67q39 0 66.17 27.16Q333.33-399 333.33-360ZM800-160H106.67q-27.5 0-47.09-19.58Q40-199.17 40-226.67V-680h66.67v453.33H800V-160ZM240-360v-373.33V-360Z"/></svg>
      ),
      title: intl.formatMessage({ id: "product.ob.client.feature3.title" }),
      details: intl.formatMessage({ id: "product.ob.client.feature3.details" }),
    },
  ];

  const steps = [
    {
      name: intl.formatMessage({ id: "product.ob.client.step1.name" }),
      name1: intl.formatMessage({ id: "product.ob.client.step1.name1" }),
      text: (
        <>
        <ul>
          <li>{intl.formatMessage({ id: "product.ob.client.step1.text1" })}</li>
          <li>{intl.formatMessage({ id: "product.ob.client.step1.text2" })}</li>
          <li>{intl.formatMessage({ id: "product.ob.client.step1.text3" })}</li>
        </ul>
        </>
      ),      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1F366B">
          <path d="M480.18-80q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Zm-12 202h66.67v-404H386v66.67h82V-278Z"/>
        </svg>
      ),
    },
    {
      name: intl.formatMessage({ id: "product.ob.client.step2.name" }),
      name1: intl.formatMessage({ id: "product.ob.client.step2.name1" }),
      text: (
        <>
        <ul>
          <li>{intl.formatMessage({ id: "product.ob.client.step2.text1" })}</li>
          <li>{intl.formatMessage({ id: "product.ob.client.step2.text2" })}</li>
          <li>{intl.formatMessage({ id: "product.ob.client.step2.text3" })}</li>
        </ul>
        </>
      ),
            icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1F366B">
          <path d="M480.18-80q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480ZM363.33-278h233.34v-66.67H430V-448h100q27 0 46.83-19.83 19.84-19.84 19.84-46.84v-100.66q0-27-19.84-46.84Q557-720.67 530-720.67H363.33v66.67H530v100.66H430q-27 0-46.83 19.84Q363.33-475 363.33-448v170Z"/>
        </svg>
      ),
    },
    {
      name: intl.formatMessage({ id: "product.ob.client.step3.name" }),
      name1: intl.formatMessage({ id: "product.ob.client.step3.name1" }),
      text: (
        <>
        <ul>
          <li>{intl.formatMessage({ id: "product.ob.client.step3.text1" })}</li>
          <li>{intl.formatMessage({ id: "product.ob.client.step3.text2" })}</li>
          <li>{intl.formatMessage({ id: "product.ob.client.step3.text3" })}</li>
        </ul>
        </>
      ),      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1F366B">
          <path d="M480.18-80q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480ZM363.33-278H530q27 0 46.83-19.83 19.84-19.84 19.84-46.84v-78q0-26.66-15.34-42.66-15.33-16-37.33-16 22 0 37.33-14.67 15.34-14.67 15.34-42v-77.33q0-27-19.84-46.84Q557-682 530-682H363.33v66.67H530v100.66h-84.67V-448H530v103.33H363.33V-278Z"/>
        </svg>
      ),
    },
  ];


  const faqTitle = intl.formatMessage({ id: "product.ob.client.faqTitle" });
  const faqData = [
    {
      question: intl.formatMessage({ id: "product.ob.client.faq1.question" }),
      answer: intl.formatMessage({ id: "product.ob.client.faq1.answer" }),
    },
    {
      question: intl.formatMessage({ id: "product.ob.client.faq2.question" }),
      answer: intl.formatMessage({ id: "product.ob.client.faq2.answer" }),
    },
    {
      question: intl.formatMessage({ id: "product.ob.client.faq3.question" }),
      answer: intl.formatMessage({ id: "product.ob.client.faq3.answer" }),
    },
    {
      question: intl.formatMessage({ id: "product.ob.client.faq4.question" }),
      answer: intl.formatMessage({ id: "product.ob.client.faq4.answer" }),
    },
    {
      question: intl.formatMessage({ id: "product.ob.client.faq5.question" }),
      answer: intl.formatMessage({ id: "product.ob.client.faq5.answer" }),
    },
  ];

  const stepsTitle = intl.formatMessage({ id: "product.ob.client.stepsTitle" });


  const title = intl.formatMessage({ id: "app.products.obConnector" });
  const title1 = intl.formatMessage({ id: "product.ob.client.title1" });
  const subTitle = intl.formatMessage({ id: "product.ob.client.subTitle" });
  const title3 = intl.formatMessage({ id: "product.ob.client.title3" });


  return (
    <Section >

<ProductTemplate1Home
        title={title}
        title1={title1}
        subTitle={subTitle}
        homeImg={homeImg}
        homeImg_ar={homeImg_ar}
        guaranteeApp={obConnector}
      />

      <ProductTemplate2Features title={featuresTitle} features={features} />
      <ProductTemplate2Steps title={stepsTitle} steps={steps} />
      {/* <ProductTemplate2Statement title={statementTitle} title1={statementTitle1} /> */}
      <ProductTemplate1Statement title={title3} />

      <ProductTemplate2Faq title={faqTitle} faqData={faqData} />
      {/* 
      <Product1HowItWorks />
      <Product1Statement /> */}
      {/* <SeeIt /> */}

    </Section>
  );
}

export default ProductOBClientConnector;
