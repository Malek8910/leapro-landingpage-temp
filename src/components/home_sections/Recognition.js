import React from "react";
import styled from "styled-components";

import SecurityLogo01 from "../../assets/fintech-egypt-logo.png";
import SecurityLogo02 from "../../assets/Microsoft_logo_(2012).svg.png";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
const Section = styled.section`
  /* min-height: 20vh; */
  width: 100vw;
  /* background-color: ${(props) => props.theme.body}; */
  /* background-color: #f5f5f5; */
  position: relative;
  direction: ${(props) => props.direction};
`;

const Title = styled.h5`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.text};

  text-transform: capitalize;

  color: ${(props) => props.theme.text};
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 1rem auto; */
  padding-top: 10px;
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  /* width: fit-content; */

  @media (max-width: 48em) {
    /* width: 80%; */
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Container = styled.div`
  width: 75%;

  margin: 2rem auto;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  @media (max-width: 64em) {
    width: 80%;
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

  @media (max-width: 30em) {
    width: 70vw;
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

    @media (max-width: 48em) {
      /* width: 80%; */
      width: 50%;
    }
  }
`;

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
    </Item>
  );
};

const Recognition = () => {
  const context = React.useContext(Context);

  return (
    <Section
      id="team"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >
      <Title>
        <FormattedMessage
          id="app.home.recognizedBy"
          defaultMessage="Recognized by:"
        />{" "}
      </Title>
      <Container>
        <MemberComponent img={SecurityLogo01} />
        <MemberComponent img={SecurityLogo02} />
      </Container>
    </Section>
  );
};

export default Recognition;
