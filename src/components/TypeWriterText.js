import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";
import SecurityLogo01 from "../assets/fintech-egypt-logo.png";
import SecurityLogo02 from "../assets/Microsoft_logo_(2012).svg.png";
import SecurityLogo03 from "../assets/code_logo.svg";
import SecurityLogo04 from "../assets/riyadbank.svg";

import { FormattedMessage } from "react-intl";
import { Context } from "./Wrapper";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 280%;
  /* text-transform: capitalize; */
  width: 100%;
  color: ${(props) => props.theme.text};
  /* align-self: center; */
  font-weight: 500;
  /* color: #002856; */
  /* margin-top: 70px; */
  
  /* text-align: center; */

  display: flex;

  span {
    /* text-transform: uppercase; */
    /* font-family: "Akaya Telivigala", cursive; */
  }

  .gradient {
    /* background: -webkit-linear-gradient(#1F366B, #0693E3); */
    background-image: linear-gradient(90deg,#0F56C8, #1F366B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  .text-1 {
    color: ${(props) => props.theme.text};
  }
  .text-2 {
    color: ${(props) => props.theme.brandBlue};
    /* color: white; */

    font-family: ${(props) =>
    props.direction === "rtl"
      ? ""
      : "DotGothic16"};

    font-weight: ${(props) =>
    props.direction === "rtl"
      ? ""
      : "bold"};
    /* font-family: "DotGothic16";
    font-weight: bold; */

  }
  .text-3 {
    color: #CCA010;
    /* color: #009ad7; */
  }
  .text-4 {
    color: #00B1A5;
    /* color: #009ad7; */
  }

  .text-5 {
    color: #FF6900;
    /* color: #009ad7; */
  }

  @media (max-width: ${(props) => props.theme.width}) {
    font-size: 260%;
    align-self: center;
    text-align: center;
    /* width: 90%; */
    /* margin-top: 10px; */
    flex-direction: column;
  }

`;

const SubTitle = styled.h3`
  /* font-size: x-large; */
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  /* text-align: center; */

  /* font-weight: 600; */
  /* margin-top: 2rem; */
  margin-bottom: 1rem;

  width: 100%;
  /* align-self: center; */

  font-size: x-large;

  background-image: linear-gradient(90deg,#0F56C8, #1F366B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${(props) => props.theme.width}) {
    align-self: center;
    text-align: center;
    font-size: large;
    width: 80%;


  }
`;

const SubTextLight = styled.p`
  font-size: 220%;
  color: rgba(${(props) => props.theme.textRgba}, 0.6);
  margin-top: 1rem;
  /* width: 80%; */
  font-weight: 400;
  align-self: center;
  padding-top: 50px;

  @media (max-width: 75em) {
    width: 100%;
    font-size: medium;
  }

  @media (max-width: 48em) {
    font-size: medium;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 30em) {
    font-size: medium;
  }
`;

const ButtonContainer = styled.div`
align-self: start;
  /* margin-top: 50px; */
  /* align-content: center; */

  @media (max-width: 75em) {
    align-self: center;

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
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
  

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



const WordCarousel = styled.div`

  /* font-size: 36px; */
  /* font-weight: 100; */
  div {
      overflow: hidden;
      position: relative;
      float: right;
      height: 65px;
      margin-top: -9x;
      margin-bottom: -9px;

      li {
          /* font-weight: 700; */
          /* padding: 0 10px;  */
          height: 45px;
          margin-bottom: 45px;

          display: block;
      }

      @media (max-width: 64em) {
align-self: center;
float: none;
  }

  }


.flip2 { animation: flip2 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }
.flip3 {padding: 0; animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }
.flip4 { animation: flip4 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }
.flip5 { animation: flip5 12s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }

@keyframes flip2 {
  0% { margin-top: -180px; }
  5% { margin-top: -90px;  }
  50% { margin-top: -90px; }
  55% { margin-top: 0px; }
  99.99% { margin-top: 0px; }
  100% { margin-top: -180px; }
}

@keyframes flip3 {
  0% { margin-top: -270px; }
  5% { margin-top: -180px; }
  33% { margin-top: -180px; }
  38% { margin-top: -90px; }
  66% { margin-top: -90px; }
  71% { margin-top: 0px; }
  99.99% { margin-top: 0px; }
  100% { margin-top: -270px; }
}

@keyframes flip4 {
  0% { margin-top: -360px; }
  5% { margin-top: -270px; }
  25% { margin-top: -270px; }
  30% { margin-top: -180px; }
  50% { margin-top: -180px; }
  55% { margin-top: -90px; }
  75% { margin-top: -90px; }
  80% { margin-top: 0px; }
  99.99% { margin-top: 0px; }
  100% { margin-top: -360px; }
}

@keyframes flip5 {
  0% { margin-top: -450px; }
  5% { margin-top: -360px; }
  20% { margin-top: -360px; }
  25% { margin-top: -270px; }
  40% { margin-top: -270px; }
  45% { margin-top: -180px; }
  60% { margin-top: -180px; }
  65% { margin-top: -90px; }
  80% { margin-top: -90px; }
  85% { margin-top: 0px; }
  99.99% { margin-top: 0px; }
  100% { margin-top: -450px; }
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

const TypeWriterText = (props) => {
  const context = React.useContext(Context);

  const intl = useIntl();
  const bank = intl.formatMessage({ id: "app.home.bank" });
  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";

  return (
    <Fragment>
      <div style={{ margin: 0, padding: 0, width: "100%" }}>
        <Title><span className="gradient"><FormattedMessage id="app.home.empowering" defaultMessage="Empowering" /></span></Title>

        <Title direction={direction}>
        <span className="gradient"><FormattedMessage id="app.home.business" defaultMessage="Business" />&nbsp;</span>

          <WordCarousel>
            <div>
              <ul className="flip3">
                <li className="text-2"><FormattedMessage id="app.home.transformation" defaultMessage="Transformation" /></li>
                <li className="text-3"><FormattedMessage id="app.home.efficiency" defaultMessage="Efficiency" /></li>
                <li className="text-4"><FormattedMessage id="app.home.differentiation" defaultMessage="Differentiation" /></li>
              </ul>
            </div>
          </WordCarousel>
        </Title>
        <Title><span className="gradient"><FormattedMessage id="app.home.andBeyond" defaultMessage="And Beyond" /></span></Title>
      </div>

      <SubTitle>
        <FormattedMessage id="app.home.shapingTheFuture" defaultMessage="Shaping the Future" />
      </SubTitle>

      <ButtonContainer>
        <Link to={"/contact-us"} onClick={() => { }}>
          <Button text={intl.formatMessage({ id: "app.home.contactUs", defaultMessage: "Contact us" })}></Button>
        </Link>
      </ButtonContainer>
    </Fragment>
  );
};

export default TypeWriterText;
