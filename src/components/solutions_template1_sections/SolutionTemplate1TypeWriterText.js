import React, { useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import Button from "../Button";


import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
import { useIntl } from "react-intl";
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

const SubTitle = styled.h3`
  font-size: large;
  color: #1F366B;
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

flex-direction: column;
    align-items: flex-start;

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

const UpTitle = styled.div`
  /* text-decoration: underline; */
  color: ${(props) => props.theme.lightGrayText};;
  padding-bottom: 20px;
  font-size: large;


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



const SolutionTemplate1TypeWriterText = ({ upTitle, title, subTitle }) => {
  const context = React.useContext(Context);

  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";
  const intl = useIntl();

  const contactUs = intl.formatMessage({ id: "app.navigation.letsConnect" });

  return (
    <Container>
      <UpTitle>{upTitle}</UpTitle>
      <Title direction={direction}>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <ButtonContainer>
        <Link to={"/contact-us"} onClick={() => { }}><Button text={contactUs}></Button></Link>
      </ButtonContainer>
    </Container>
  );
};

export default SolutionTemplate1TypeWriterText;
