import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
const Section = styled.section`
  /* min-height: 100vh;
  height: 100vh; */
  width: 100vw;
  /* background-color: ${(props) => props.theme.body}; */
  background-color: #009ad7;

  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
  direction: ${(props) => props.direction};

`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  /* border-bottom: 2px solid ${(props) => props.theme.text}; */

  @media (max-width: 48em) {
    width: 90%;
  }

  /* h1 {
    font-size: ${(props) => props.theme.fontxxxl};
  } */
`;

const Title = styled.h1`
  /* font-size: ${(props) => props.theme.fontxxl}; */
  text-transform: capitalize;

  color: ${(props) => props.theme.body};
  /* align-self: flex-start; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const SubText = styled.p`
  /* font-size: ${(props) => props.theme.fontlg}; */
  color: ${(props) => props.theme.text};
  margin: 1rem auto;
  width: 100%;
  font-weight: 600;
  /* align-self: flex-start; */
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontlg};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;
  }

  span {
    margin-bottom: 1rem;
  }
`;

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const context = React.useContext(Context);

  return (
    <Section direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}>
      <Container>
        <Title>
          <FormattedMessage id="app.mission.title" defaultMessage="Mission" />
        </Title>
        <SubText>
          <FormattedMessage id="app.mission.details" defaultMessage="Mission" />
        </SubText>
      </Container>
      <Bottom>&nbsp; </Bottom>
    </Section>
  );
};

export default Footer;
