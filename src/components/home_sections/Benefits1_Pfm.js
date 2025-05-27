import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Themes";
import homeImg from "../../assets/benefits.png";
import homeImg1 from "../../assets/benefits1.png";

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
      width: 80%;
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
  /* color: #002856; */

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontlg};
    width: 100%;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    text-align: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  margin: 1rem 1rem;
  width: 80%;
  font-weight: 390;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};

    /* text-align: center; */
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
  /* width: 80%; */
  /* color: #002856; */

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const SubText1 = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  margin: 1rem auto;
  font-weight: 400;

  display: flex;

  justify-content: center;
  align-items: center;
  padding-top: 2rem;

  padding-bottom: 2rem;
  width: 60%;
  text-align: center;

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
    width: 40vh;
  }
`;
const Benefits1_Pfm = () => {
  const context = React.useContext(Context);

  return (
    <Section
      id="about"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >
      <Title1>
        <FormattedMessage id="app.benefits.title" defaultMessage="Title" />
      </Title1>
      <SubText1>
        <FormattedMessage id="app.benefits.title1" defaultMessage="Title 1" />
      </SubText1>
      <Container>
        <Box>
          <ImgContainer>
            <img
              src={context.locale.startsWith("ar") ? homeImg : homeImg1}
              alt="Leapro Platform"
            />
          </ImgContainer>
        </Box>
        <Box>
          <ul>
            <li>
              {" "}
              <SubText>
                <FormattedMessage
                  id="app.benefits.details1"
                  defaultMessage="details 1"
                />
              </SubText>
            </li>
            <li>
              {" "}
              <SubText>
                <FormattedMessage
                  id="app.benefits.details2"
                  defaultMessage="details 2"
                />
              </SubText>
            </li>
            <li>
              {" "}
              <SubText>
                <FormattedMessage
                  id="app.benefits.details3"
                  defaultMessage="details 3"
                />
              </SubText>
            </li>
            <li>
              {" "}
              <SubText>
                <FormattedMessage
                  id="app.benefits.details4"
                  defaultMessage="details 4"
                />
              </SubText>
            </li>
            <li>
              {" "}
              <SubText>
                <FormattedMessage
                  id="app.benefits.details5"
                  defaultMessage="details 5"
                />
              </SubText>
            </li>
            <li>
              {" "}
              <SubText>
                <FormattedMessage
                  id="app.benefits.details6"
                  defaultMessage="details 6"
                />
              </SubText>
            </li>
            <li>
              {" "}
              <SubText>
                <FormattedMessage
                  id="app.benefits.details7"
                  defaultMessage="details 7"
                />
              </SubText>
            </li>
          </ul>
        </Box>
      </Container>
    </Section>
  );
};

export default Benefits1_Pfm;
