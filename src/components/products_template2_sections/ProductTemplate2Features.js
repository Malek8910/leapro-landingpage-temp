import React from "react";
import styled from "styled-components";

import img1 from "../../assets/greate_ux.png";
import img2 from "../../assets/secure.png";
import img3 from "../../assets/simple.png";
import img4 from "../../assets/value.png";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
import { useIntl } from "react-intl";

const Section = styled.section`
  /* min-height: 100vh; */
  /* min-height: 110vh; */
  width: 100vw;

    /* background-color: ${(props) => props.theme.body}; */
  position: relative;

  direction: ${(props) => props.direction};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

`;

const Title = styled.h1`
  /* font-size: ${(props) => props.theme.fontxxl}; */
  text-transform: capitalize;
  /* font-size: x-large; */
  /* color: ${(props) => props.theme.text}; */
  /* align-self: flex-start; */
  /* display: flex; */
  /* justify-content: right; */
  /* align-items: left; */
  text-align: center;
  /* margin: 1rem auto; */
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  /* width: fit-content; */
  /* width: 80%; */
  /* color: #002856; */
  width: ${(props) => props.theme.width};
  padding-top: 20px;
  padding-bottom: 20px;

  color: #1F366B;

  /* font-family: "IBM Plex Sans Arabic", sans-serif; */


  background-image: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(90deg, #0693E3, #0F56C8, #1F366B)"
      : "linear-gradient(90deg, #1F366B, #0F56C8, #0693E3)"};
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: ${(props) => props.theme.width}) {
    font-size: xx-large;
    width: 90%;
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  /* margin: 1rem auto; */
  font-weight: 400;
  /* align-items: center; */
  /* align-self: center; */
  /* align-self: flex-start; */
  /* text-align: center; */



  @media (max-width: ${(props) => props.theme.width}) {
    width: 90%;
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Container = styled.div`
  width: 85%;
  margin: 2rem auto;
  width: 1160px;

  display: flex;
  /* justify-content: space-between; */
  justify-content: space-between;
  /* align-content: center; */
  flex-wrap: wrap;
  gap: 24px;
  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
  margin-bottom: 8em;
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  /* padding: 24px 24px; */
  padding-top: 24px;
  color: ${(props) => props.theme.body};
  /* margin: 1rem 2rem; */
  position: relative;

  /* border: 2px solid ${(props) => props.theme.text}; */
  border-radius: 20px;
  transition: all 0.3s ease;
  flex-grow: 1;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const ImageContainer = styled.div`
  /* width: 60%; */
  /* margin: 0 auto; */
  /* background-color: ${(props) => props.theme.carouselColor}; */
  /* background-color: #f5f5f5; */

  /* border: 1px solid ${(props) => props.theme.text}; */
  /* padding: 1rem; */

  /* border-radius: 20px; */
  /* cursor: pointer; */

  /* img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  } */
`;

const Name = styled.h3`
  /* font-size: ${(props) => props.theme.fontsm}; */
  display: flex;
  /* align-items: center; */
  /* justify-content: left; */
  /* text-transform: uppercase; */
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
  text-align: -webkit-center;
  min-height: 40px;
  justify-content: center;
  font-size: 22px;
  margin-top: 28px;
  color: #1F366B;

  /* font-family: "IBM Plex Sans Arabic", sans-serif; */


`;

const Position = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: rgba(${(props) => props.theme.textRgba}, 0.9);
  font-weight: 400;
  padding-top: 1rem;
  justify-content: center;
  text-align: -webkit-center;
  line-height: normal;
  font-size: 18px;

  /* font-family: "IBM Plex Sans Arabic", sans-serif; */


`;

const Icon = styled.i`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 20px;  /* Preferred icon size */
  /* display: inline-block; */
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ${(props) => props.direction};
  vertical-align: top;
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  /* font-feature-settings: 'liga'; */
  /* margin-right: 10px;
  margin-left: 10px; */

  display: flex;
    flex-direction: column;
    align-items: center;


`;

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      {img}
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const ProductTemplate2Features = ({ title, features }) => {
  const context = React.useContext(Context);
  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";

  return (
    <Section
      id="team"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >
      <Title direction={direction}>{title}</Title>
      <Container>
        {features.map((feature, index) => (
          <MemberComponent
            key={index}
            img={<Icon>{feature.svg}</Icon>}
            name={feature.title}
            position={feature.details}
          />
        ))}
      </Container>
    </Section>
  );
};

export default ProductTemplate2Features;
