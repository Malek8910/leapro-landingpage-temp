import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import Button from "../Button";


import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
import { useIntl } from "react-intl";
import apple from "../../assets/apple.svg";
import google from "../../assets/google.svg";
import useId from "react-use-uuid";
import axios from "axios";
import guaranteeApp from "../../assets/guaranteeApp.svg";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 220%;
  /* text-transform: capitalize; */
  width: 90%;
  color: #0693E3;
  /* align-self: center; */
  font-weight: 500;
  /* color: #002856; */
  /* margin-top: 70px; */
  /* text-align: center; */


  background-image: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(90deg, #0693E3, #0F56C8, #1F366B)"
      : "linear-gradient(90deg, #1F366B, #0F56C8, #0693E3)"};
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;


  span {
    /* text-transform: uppercase; */
    /* font-family: "Akaya Telivigala", cursive; */
  }

  .text-1 {
    color: ${(props) => props.theme.text};
  }
  .text-2 {
    color: #0693E3;
  }
  .text-3 {
    /* color: #fec10d; */
    color: #009ad7;
  }
  .text-4 {
    /* color: #06c4b0; */
    color: #009ad7;
  }


  @media (max-width: ${(props) => props.theme.width}) {
    font-size: 200%;
    align-self: center; 
    text-align: center; 
    width: 90%;
    margin-top: 10px;
  }

`;


const Title1 = styled.h1`
  font-size: x-large;
  /* text-transform: capitalize; */
  width: 90%;
  color: black;
  /* align-self: center; */
  font-weight: 500;
  /* color: #002856; */
  /* margin-top: 70px; */
  /* text-align: center; */

  span {
    /* text-transform: uppercase; */
    /* font-family: "Akaya Telivigala", cursive; */
  }

  .text-1 {
    color: ${(props) => props.theme.text};
  }
  .text-2 {
    color: #0693E3;
  }
  .text-3 {
    /* color: #fec10d; */
    color: #009ad7;
  }
  .text-4 {
    /* color: #06c4b0; */
    color: #009ad7;
  }


  @media (max-width: ${(props) => props.theme.width}) {
    font-size: 160%;
    align-self: center; 
    text-align: center; 
    width: 90%;
    margin-top: 10px;
  }

`;


const SubTitle = styled.h3`
  font-size: medium;
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  /* text-align: center; */

  /* font-weight: 600; */
  /* margin-top: 2rem; */
  margin-bottom: 1rem;

  width: 80%;
  /* align-self: center; */

  @media (max-width: ${(props) => props.theme.width}) {
    align-self: center;
    text-align: center;
    font-size: medium;

  }
`;

const SubTextLight = styled.p`
  font-size: 220%;
  color: rgba(${(props) => props.theme.textRgba}, 0.6);
  margin-top: 1rem;
  /* width: 80%; */
  font-weight: 400;
  /* align-self: center; */
  padding-top: 50px;

  @media (max-width: 75em) {
    width: 100%;
    font-size: medium;
  }

  @media (max-width: 48em) {
    font-size: medium;
    width: 100%;
    /* text-align: center; */
  }

  @media (max-width: 30em) {
    font-size: medium;
  }
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

/// Media
const Container = styled.div`
  width: 100%;

  /* margin: 2rem auto; */

  display: flex;
  /* justify-content: center;
  align-content: center; */
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  align-self: center;

  @media (max-width: 75em) {
    width: 80%;
  }
  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

const Item = styled.div`
  width: calc(12rem - 4vw);
  padding: 1rem 0;
  /* color: ${(props) => props.theme.body}; */
  /* margin: 2rem 1rem; */
  position: relative;

  /* border: 2px solid ${(props) => props.theme.text}; */
  /* border-radius: 20px; */
  /* transition: all 0.3s ease; */
  justify-content: center;

  img {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
  }

  &:hover {
    img {
      filter: grayscale(0%);
      -webkit-filter: grayscale(0%);
      -moz-filter: grayscale(0%);

      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 75em) {
    width: calc(11rem - 4vw);
  }

  @media (max-width: 64em) {
    width: calc(10rem - 4vw);
  }

  @media (max-width: 48em) {
    width: calc(8rem - 4vw);
  }
`;

const ImageContainer = styled.div`
  /* width: 80%; */
  margin: 0 auto;
  /* background-color: ${(props) => props.theme.carouselColor}; */
  /* border: 1px solid ${(props) => props.theme.text}; */
  padding: 1rem;

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    /* height: auto; */
    transition: all 0.3s ease;
  }
`;

const ImgContainerFooter = styled.div`
  /* width: 28rem; */
  flex: 70%;
  /* margin-right: 16px; */
  /* background-color: ${(props) => props.theme.body}; */

  width: 5rem;

  display: flex;

  /* padding: 10px; */
    /* margin: 10px; */
    /* background: white;
    border-radius: 5px; */

  img {
    /* width: 75%; */
    /* height: 50px; */
    width: 6em;

    &:hover {
    transform: scale(1.1);
  }
  }
  
  @media (max-width: ${(props) => props.theme.width}) {
    /* margin-left: 16px;
    margin-right: 16px; */
    /* width: 12rem; */

    /* margin-bottom: 40px; */
    justify-content: center;
  }
`;




const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const MemberComponent = ({ img, name = " ", position = " ", url }) => {
  return (
    <Item>
      <ImageContainer>
        <img
          src={img}
          alt={name}
          onClick={() => {
            openInNewTab(url);
          }}
        />
      </ImageContainer>
    </Item>
  );
};





const ProductTemplate1TypeWriterText = ({ title, title1, subTitle, guaranteeApp }) => {
  const context = React.useContext(Context);
  const [visible, setVisible] = useState(false);

  const handleClick = () => {

    if (userUUID !== "") {
      sendTrigger(userUUID);
    }
    else
      sendTrigger("userUUID");

    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2000); // hide message after 5 seconds

    //console.log("hhhhhhhhhhh");
  };



  const intl = useIntl();
  const bank = intl.formatMessage({ id: "app.home.bank" });
  const contactUs = intl.formatMessage({ id: "app.navigation.letsConnect" });



  const Tooltip = styled.div`
  /* position: relative;

  display: inline-block; */

  .tooltiptext {
    /* display: flex;
    flex-direction: column-reverse; */

  visibility: ${(props) =>
      props.visible === true
        ? "visible"
        : "hidden"}; 

  padding: 2px 4px;
  background-color: #FDD663;
  color: black;
  text-align: center;

  /* Position the tooltip */
  /* position: absolute; */
  z-index: 1;
  }

/* :hover .tooltiptext {
visibility: visible;
} */



`;







  ///

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

  }, [userUUID]);

  const sendTrigger = async () => {
    //=========== semding trigger
    let doc = {
      document: {
        userId: userUUID,
        type: "Product1HomeAppStoreClicked",
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

  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";


  return (
    <Container>
      <ImgContainerFooter> <img
        src={guaranteeApp}
        alt="Leapro Platform" />
      </ImgContainerFooter>
      <Title direction={direction}>

        {title}
      </Title>
      <Title1>

        {title1}
      </Title1>

      <SubTitle>

        {subTitle}


      </SubTitle>

      <Tooltip visible={visible}>

        {/* <ButtonContainer>
          <img src={apple} alt="apple" style={{ width: "140px", cursor: "pointer" }} onClick={() => handleClick()} />
          <img src={google} alt="apple" style={{ width: "140px", cursor: "pointer" }} onClick={() => handleClick()} />

        </ButtonContainer> */}

        <ButtonContainer>
        <Link to={"/contact-us"} onClick={() => { }}><Button text={contactUs}></Button></Link>
      </ButtonContainer>
      
      </Tooltip>

    </Container>

  );
};

export default ProductTemplate1TypeWriterText;
