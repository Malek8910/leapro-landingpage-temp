import React, { useEffect } from "react";
import styled from "styled-components";
import CoverVideo from "../CoverVideo";
import TypeWriterText from "../TypeWriterText";
import BackGroundImage from "../../assets/background2.png";
import BackGroundImage_ar from "../../assets/background2-ar.png";
import googlePlayStore from "../../assets/googlePlayStore.png";

import { Context } from "../Wrapper";
import axios from "axios";
import useId from "react-use-uuid";
import apple from "../../assets/apple.svg";
import google from "../../assets/google.svg";


const Section = styled.section`
  min-height: calc(100vh - ${(props) => props.theme.navHeight});

  align-items: center;
  width: 100vw;
  position: relative;
  /* background-color: ${(props) => props.theme.body}; */
  /* display: flex; */
  -webkit-align-items: normal;

  margin-top: ${(props) => props.theme.navHeight};

  direction: ${(props) => props.direction};

  /* background-image: url(${BackGroundImage}); */
  /* background-image: url("/background2.png"); */

  /* background: radial-gradient(circle, white 0%, #F0F0F0 100%); */

  /* background: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(25deg,transparent 50%,transparent 50%,white 90%,#f0f0f0 100%);"
      : "linear-gradient(-25deg,transparent 50%,transparent 50%,white 90%,#f0f0f0 100%);"}; */

  /* font-family: ${(props) =>
    props.direction === "rtl" ? "HelveticaNeueLT Arabic 55 Roman" : "Poppins"}; */

  background-image: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 52%,rgba(255,255,255,0) 100%), url(/background2-ar.png) "
      : "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 52%,rgba(255,255,255,0) 100%), url(/background2.png)"};

  background-position: center;
  /* background-size: cover; */
  background-repeat: no-repeat;
  background-size: 100% 100%;

  text-align: -webkit-center;
  @media (max-width: 75em) {
  }

  @media (max-width: 64em) {
    background-image: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 52%,rgba(255,255,255,0) 100%), url(/background2-ar-small.png)"
      : "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 52%,rgba(255,255,255,0) 100%), url(/background2-small.png)"};

    background-position: center;
    /* background-size: cover; */
    background-repeat: no-repeat;
  }
  @media (max-width: 48em) {
    background-image: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 52%,rgba(255,255,255,0) 100%), url(/background2-ar-small.png)"
      : "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 52%,rgba(255,255,255,0) 100%), url(/background2-small.png)"};

    background-position: center;
    /* background-size: cover; */
    background-repeat: no-repeat;
  }
`;

const Container = styled.div`
  width: 75%; //section content wdith
  /* min-height: 80vh; */
  padding: 30px 30px;
  /* background-color: lightblue; */

  font-size: x-large;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: -webkit-center;
  flex-direction: column;


  @media (max-width: 75em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {

    align-items: center;

    width: 85%;
    & > *:first-child {
      width: 85%;
      margin-top: 2rem;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const ButtonContainer = styled.div`
display: flex;
gap: 16px;
  

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;


const ExistUser = () => {
  const [userUUID, setUserUUID] = React.useState(() => {
    // getting stored value
    const saved = localStorage.getItem("userUUID");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  let axiosEnabled = false;
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
    console.log(userUUID);
    if (userUUID !== "") {
      sendTrigger(userUUID);
    }
  }, [userUUID]);

  const sendTrigger = async () => {
    //=========== semding trigger
    let doc = {
      document: {
        userId: userUUID,
        type: "HomeVisited",
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

      console.log("reponse data is: ", JSON.stringify(data, null, 4));

      //setData(data);
    } catch (err) {
      //setErr(err.message);
      console.log("error message is: ", JSON.stringify(err.message, null, 4));
    } finally {
      //setIsLoading(false);
    }
    //===========
  };

  const context = React.useContext(Context);

  return (
    <Section
      id="home"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >
      <Container>

        <p> To view the LG request, please click the button or scan the QR code where the <b>GuaranteeApp</b> App installed.</p>
        <br></br>
        <p>Thank You</p>

        <br>

        </br>
        <ButtonContainer>
          {/* <Button text="Contact us"></Button> */}
          <img src={apple} alt="apple" style={{ width: "140px", cursor: "pointer" }} />
          <img src={google} alt="apple" style={{ width: "140px", cursor: "pointer" }} />

        </ButtonContainer>
        <br>

        </br>
        <p>If you need any assistance, please reach out to our support team via <a href="https://leapro.io" style={{ color: "#0693E3" }}>Leapro Support Center</a>, or drop us a message at <a href="#" onClick={() => { window.location.href = "mailto:info@leapro.io?subject=Demo request" }} style={{ color: "#0693E3" }}>info@leapro.io</a></p>

      </Container>
    </Section>
  );
};

export default ExistUser;
