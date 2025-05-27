import React, { useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import CoverVideo from "../CoverVideo";
import TypeWriterText from "../TypeWriterText";
import BackGroundImage from "../../assets/background2.png";
import BackGroundImage_ar from "../../assets/background2-ar.png";

import wave1 from "../../assets/course-wave1.svg";
import wave2 from "../../assets/course-wave2.svg";
import wave3 from "../../assets/course-wave3.svg";
import pattern from "../../assets/pattern-randomized.svg";
import sun from "../../assets/sun-tornado.svg";
import pattern2 from "../../assets/bbburst.png";


import { Context } from "../Wrapper";
import axios from "axios";
import useId from "react-use-uuid";
import SolutionTemplate1TypeWriterText from "./SolutionTemplate1TypeWriterText";
import SolutionTemplate1CoverVideo from "./SolutionTemplate1CoverVideo";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const Section = styled.section`
  font-size: large;
  /* min-height: calc(100vh - ${(props) => props.theme.navHeight}); */
  width: 100vw;
  direction: ${(props) => props.direction};
  display: flex;
  flex-direction: column;
  align-items: center;
  
  position: relative;
  /* background-color: ${(props) => props.theme.body}; */
  /* display: flex; */
  -webkit-align-items: normal;

  direction: ${(props) => props.direction};

  /* background-image: url(${BackGroundImage}); */
  /* background-image: url("/background2.png"); */

  /* background: radial-gradient(circle, white 0%, #F0F0F0 100%); */

  /* background: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(25deg,transparent 50%,transparent 50%,white 90%,#f0f0f0 100%);"
      : "linear-gradient(-25deg,transparent 50%,transparent 50%,white 90%,#f0f0f0 100%);"}; */

  /* font-family: ${(props) =>
    props.direction === "rtl" ? "HelveticaNeueLT Arabic 55 Roman" : "IBM Plex Sans Arabic"}; */
    

  /* background-image: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 52%,rgba(255,255,255,0) 100%), url(/course-wave2.svg) "
      : "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 52%,rgba(255,255,255,0) 100%), url(/course-wave2.svg)"}; */


/* background-image: url(${wave1}),url(${wave2}),url(${wave3});
background-repeat: no-repeat, no-repeat, no-repeat;
background-size: 100%, 100%, 100%;
background-position: 0px 300px, 0px 500px, 0px 600px; */



/* background-size: cover; */
background-position: top; 
/* background-size:100%;  */
background-repeat: repeat;
/* background-position: center; 
  background-size: cover;
  background-repeat: no-repeat;
   background-size:100%; */


  /* padding-bottom: 150px; */


  /* height: 400px; */
  display: flex;

  padding-top: 190px;

  
  @media (max-width: ${(props) => props.theme.width}) {
    /* background-image: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 52%,rgba(255,255,255,0) 100%), url(/background2-ar-small.png)"
      : "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 52%,rgba(255,255,255,0) 100%), url(/background2-small.png)"}; */
  /* background-size: cover; */
    /* background-position: center;
    /* background-size: cover; */
    /* background-repeat: no-repeat; */ 

    padding-bottom: 80px;
  }
`;

const Container = styled.div`
  /* width: 75%; //section content wdith */

  width: 1160px;

  /* min-height: 80vh; */
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: self-start;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(props) => props.theme.width}) {
    flex-direction: column-reverse;
    width: 100%;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }


  @media (max-width: 64em) {
    flex-direction: column-reverse;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
    width: 85%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: end;
  }
  /* margin-bottom: 5em; */
  
`;

const Box = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  align-items: self-start;
  flex-grow: 1;
  gap:10px;
  
  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    width: 90%;
    /* justify-content: center; */
  }
  margin-bottom: 5em;
`;

const SolutionTemplate1Home = ({ upTitle, title, subTitle, homeImg, homeImg_ar }) => {
  const [userUUID, setUserUUID] = React.useState(() => {
    // getting stored value
    const saved = localStorage.getItem("userUUID");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  let axiosEnabled = true;
  const id = useId();

  useEffect(() => {
    //const userUUIDVaIe = JSON.parse(localStorage.getItem("userUUID"));
    if (userUUID === "") {
      //if found in localstorage load it
      ///setUserUUID(userUUIDVaIe);
      //} else {
      //if not found save

      setUserUUID(id);
      localStorage.setItem("userUUID", JSON.stringify(id));
    }
    //console.log(userUUID);
    if (userUUID !== "") {
      sendTrigger(userUUID);
    } else
      sendTrigger("userUUID");
  }, [userUUID]);

  const sendTrigger = async () => {
    //=========== semding trigger
    let doc = {
      document: {
        userId: userUUID,
        type: "Service1HomeVisited",
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

      // console.log("reponse data is: ", JSON.stringify(data, null, 4));

      //setData(data);
    } catch (err) {
      //setErr(err.message);
      //console.log("error message is: ", JSON.stringify(err.message, null, 4));
    } finally {
      //setIsLoading(false);
    }
    //===========
  };


  // Define the animation
  const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

  // Create a styled component for the square
  const Square = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px;
  background-color: #3498db;
  display: inline-block;
  animation: ${bounce} 1s infinite ease-in-out;
`;

  const context = React.useContext(Context);

  const location = useLocation();
  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <Section
      id="home"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >
      <Container>
        <Box>
          <SolutionTemplate1TypeWriterText upTitle={upTitle} title={title} subTitle={subTitle} />
        </Box>
        <SolutionTemplate1CoverVideo homeImg={homeImg} homeImg_ar={homeImg_ar} />

      </Container>

    </Section>
  );
};

export default SolutionTemplate1Home;
