import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Themes";
import homeImg from "../../assets/worries1.png";
import Partners from "./Partners";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";

const Section = styled.section`
  min-height: 90vh;
  /* min-height: 70vh; */

  width: 100%;
  /* background-color: ${(props) => props.theme.text}; */

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 5rem;
  /* overflow: hidden; */
  flex-direction: column;

  direction: ${(props) => props.direction};
`;

const Container = styled.div`
  width: 79%; //section content wdith
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 75em) {
    width: 85%;
  }
  @media (max-width: 64em) {
    width: 90%;
  }

  @media (max-width: 48em) {
    width: 100%;
    flex-direction: column;
    & > *:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  /* min-height: 40vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    width: 50vh;
  }
`;

const Title = styled.h4`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  margin: 0 auto;
  width: 80%;

  align-self: flex-start;
  margin-bottom: 2rem;

  /* color: #002856; */

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontlg};
    width: 100%;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    text-align: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  margin: 1rem auto;
  width: 80%;
  font-weight: 400;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    text-align: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
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
    width: 17rem;
  }
  @media (max-width: 38em) {
    width: 17rem;
  }

  img {
    width: 100%;
    height: auto;
  }
  display: flex;
`;

const Title1 = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;

  color: ${(props) => props.theme.text};
  /* align-self: flex-start; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
  text-align: center;
  margin-bottom: 3rem;
  /* width: 80%; */
  /* color: #002856; */

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    width: 90%;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Worries_Pfm = () => {
  const context = React.useContext(Context);

  return (
    <Section
      id="about"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >
      <Title1>
        <FormattedMessage id="app.pfm.worries.title" defaultMessage="Title" />
      </Title1>
      <Container>
        <Box>
          <ImgContainer>
            <img src={homeImg} alt="Leapro Platform" />
          </ImgContainer>
        </Box>

        <Box>
          <Title>
            <FormattedMessage
              id="app.pfm.worries.title1"
              defaultMessage="Title 1"
            />
          </Title>
          <SubText>
            <FormattedMessage
              id="app.pfm.worries.details1"
              defaultMessage="details1 1"
            />
          </SubText>
          <SubText>
            <FormattedMessage
              id="app.pfm.worries.details2"
              defaultMessage="details1 2"
            />
          </SubText>
          <SubText>
            <FormattedMessage
              id="app.pfm.worries.details3"
              defaultMessage="details1 3"
            />
          </SubText>
          <SubText>
            <FormattedMessage
              id="app.pfm.worries.details4"
              defaultMessage="details1 4"
            />
          </SubText>
          {
            // <SubTextLight>
            //   To reinvent the a Cross-Organizations user experience, that is:
            // </SubTextLight>
          }
        </Box>
      </Container>
    </Section>
  );
};

export default Worries_Pfm;
