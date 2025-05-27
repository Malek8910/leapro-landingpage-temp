import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Themes";
import homeImg from "../../assets/build_together.png";
import homeImg1 from "../../assets/build_together1.png";

import { FormattedMessage, useIntl } from "react-intl";
import { Context } from "../Wrapper";
import Button from "../Button";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const Section = styled.section`
  /* min-height: 70vh; */
  /* min-height: 70vh; */

  width: 100%;
  /* background-color: ${(props) => props.theme.text}; */

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
flex-direction: column;
  overflow: hidden;

  direction: ${(props) => props.direction};
  flex-grow: 1;
  margin-top: ${(props) => props.theme.navHeight};
  margin-bottom:50px;

  @media (max-width: 48em) {
    height: auto;
    flex-direction: column;
  }

`;

const Container = styled.div`
  /* width: 79%; //section content wdith */
  margin: 2rem 90px;
  /* background-color: lightblue; */

  display: flex;
  flex-direction: row; // Change to row for cards in a row
  flex-wrap: wrap; // Allow wrapping for responsiveness
  justify-content: center;
  align-items: center;
  width: 1160px;

    margin-bottom:10px;

    align-items: end;
  @media (max-width: 75em) {
    width: 85%;
  }
  @media (max-width: 64em) {
    width: 90%;
  }

  @media (max-width: 48em) {
    align-items: center;

    width: 45vh;
    flex-direction: column;
    & > *:last-child {
      width: 45vh;
    }
  }

  @media (max-width: ${(props) => props.theme.width}) {
    font-size: large;
    width: 90%;
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Box = styled.div`
  /* width: 50%; */
  height: 100%;
  /* min-height: 40vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; // Change from center to flex-start
  margin-bottom:10px;

  @media (max-width: 40em) {
    width: 40vh;
  }
`;

const Card = styled.div`
  background-color:  #1F366B;
  padding: 16px;
  border: 1px;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  width: 25%;
  margin: 1rem;
  height: 280px; // Set a fixed height for all cards

  @media (max-width: 64em) {
    width: 45%;
  }

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: xx-large;
  /* text-transform: capitalize; */

  color: ${(props) => props.theme.text};
  align-self: flex-start;
  /* display: flex;
  justify-content: center;
  align-self: flex-start; */

  align-items: center;
  margin: 3rem 0;
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  width: 80%;
  /* text-align: left; */
  /* color: #002856; */

  background-image: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(90deg, #0693E3, #0F56C8, #1F366B)"
      : "linear-gradient(90deg, #1F366B, #0F56C8, #0693E3)"};
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;


  @media (max-width: 48em) {
    font-size:x-large;
  }

  @media (max-width: ${(props) => props.theme.width}) {
    font-size: large;
    width: 90%;
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  margin: 1rem 9;
  width: 80%;
  font-weight: 400;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const Title1 = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  margin: 0 auto;
  width: 80%;
  font-weight: 500;

  align-self: flex-start;
  /* color: #002856; */

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
    width: 100%;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    text-align: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;



const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: rgba(${(props) => props.theme.textRgba}, 0.6);
  margin: 1rem auto;
  width: 80%;
  font-weight: 400;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
    text-align: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const ImgContainer = styled.div`
  /* width: 100%;

  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  } */

  width: 30rem;
  margin: 0 1rem;
  margin-bottom: 1rem;

  /* border-radius: 20px; */

  @media (max-width: 75em) {
    width: 25rem;
  }

  @media (max-width: 64em) {
    width: 22rem;
  }

  @media (max-width: 48em) {
    width: 20rem;
  }
  @media (max-width: 38em) {
    width: 20rem;
  }

  img {
    width: 100%;
    height: auto;
  }
  display: flex;
`;


const Text = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  /* text-transform: capitalize; */
  color: rgba(${(props) => props.theme.textRgba}, 0.9);
  font-weight: 400;
  /* padding-bottom: 3rem; */
  /* margin-bottom: auto; */
  white-space: pre-line;
  flex-direction: column;
  line-height: 1.6;

  margin-bottom: 16px; //between paragraphs
  width: -webkit-fill-available;
  p {
    line-height: 1.6;
  }

  span{
    font-size: large;
    padding-right: 32px;
    padding-bottom: 12px;

  }

  @media (max-width: 64em) {
    flex-direction: column;
  }



`;


const Vision = styled.div`
margin: 2rem 2rem;
/* display: flex; */
/* flex-direction: column; */
/* justify-content: start; */
background-color: ${(props) => props.theme.lightGray};

padding: 16px;
border: 1px;
border-top-left-radius: 12px;
border-bottom-right-radius: 12px;
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
width: 85%;

@media (max-width: 64em) {
  /* width: 90%; */
  width: 85%;


}

`;

const CardsContainer = styled.div`
  width: 85%;
  margin: 2rem auto;
  width: 1160px;

  display: flex;
  /* justify-content: space-between; */
  justify-content: space-between;
  /* align-content: center; */
  flex-wrap: wrap;


  @media (max-width: ${(props) => props.theme.width}) {
    width: 90%;
    justify-content: center;
  }
  margin-bottom: 5em;
`;


const About = () => {
  const context = React.useContext(Context);
  const intl = useIntl();

  const location = useLocation();
  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // window.scrollTo(0, 0);
  }, [location.pathname]);

  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";

  return (
    <Section
      id="about"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >

      <Container>

        <Box>
          <Title direction={direction}><FormattedMessage id="about.title" defaultMessage="About" /></Title>

          <Text><FormattedMessage id="about.text1" defaultMessage="Leapro is a technology company specializing in Integration, Open Banking, and Business Applications powered by AI, helping businesses across the Middle East gain a competitive edge through cutting-edge solutions, professional services, and digital transformation consulting." /></Text>
          <Text><FormattedMessage id="about.text2" defaultMessage="We equip organizations with the capabilities to modernize operations, enhance ecosystem connectivity, and optimize financial processes, enabling them to scale efficiently and deliver seamless customer experiences." /></Text>
          <Text><FormattedMessage id="about.text3" defaultMessage="Leapro has received recognition, awards, and support from Microsoft, Riyad Bank, Arab National Bank, and the Center of Digital Entrepreneurship (CODE) in Riyadh." /></Text>
          <Text><FormattedMessage id="about.text4" defaultMessage="We have also been featured in Fintech Egypt's 2022 & 2023 tech landscape reports and are in the process of acquiring an Open Banking license from SAMA (Saudi Central Bank)." /></Text>

        </Box>
        <CardsContainer>
          <Card>
            <Text style={{color:"white"}}>
              <span style={{fontSize:"20px"}}><FormattedMessage id="about.vision.title" defaultMessage="Vision" /></span>
              <p><FormattedMessage id="about.vision.text" defaultMessage="Transform how financial and government services and products are delivered to users." /></p>
            </Text>
          </Card>
          <Card>
            <Text style={{color:"white"}}>
              <span style={{fontSize:"20px"}}><FormattedMessage id="about.mission.title" defaultMessage="Mission" /></span>
              <p><FormattedMessage id="about.mission.text" defaultMessage="Build innovative solutions that are add value to customers, secure and reliable." /></p>
            </Text>
          </Card>
          <Card>
            <Text style={{color:"white"}}>
              <span style={{fontSize:"20px"}}><FormattedMessage id="about.coreValues.title" defaultMessage="Core Values" /></span>
              <p>
                <FormattedMessage id="about.coreValues.text" defaultMessage="Our team operates by core values that shape our actions and decisions, ensuring we hire and evaluate team members based on these principles:" />
                <ul>
                  <li><FormattedMessage id="about.coreValues.item1" defaultMessage="Drive Change" /></li>
                  <li><FormattedMessage id="about.coreValues.item2" defaultMessage="Exceed Expectations" /></li>
                  <li><FormattedMessage id="about.coreValues.item3" defaultMessage="Be Relentlessly Disciplined" /></li>
                </ul>
              </p>
            </Text>
          </Card>
        </CardsContainer>
      </Container>
      <Box>      
      
      </Box>

      {/* <Button text="Contact us"></Button> */}

    </Section>
  );
};

export default About;
