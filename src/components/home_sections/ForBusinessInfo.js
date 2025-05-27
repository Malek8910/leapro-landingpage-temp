import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
const Section = styled.section`
  /* min-height: 100vh;
  height: 100vh; */
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  /* background-color: #f5f5f5; */

  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;

  margin-top: ${(props) => props.theme.navHeight};
  direction: ${(props) => props.direction};

  /* background: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(25deg,transparent 50%,transparent 50%,white 90%,#f0f0f0 100%);"
      : "linear-gradient(-25deg,transparent 50%,transparent 50%,white 90%,#f0f0f0 100%);"}; */
  background-size: 100% 100%;
  font-family: ${(props) =>
    props.direction === "rtl" ? "HelveticaNeueLT Arabic 55 Roman" : "Poppins"};

  background-image: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 52%,rgba(255,255,255,0) 100%), url(/background2-ar.png)"
      : "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 52%,rgba(255,255,255,0) 100%), url(/background2.png)"};

  background-position: center;
  /* background-size: cover; */
  background-repeat: no-repeat;
  background-size: 100% 100%;

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

  h1 {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;

  color: ${(props) => props.theme.text};
  align-self: flex-start;
  /* display: flex;
  justify-content: center;
  align-self: flex-start; */

  align-items: center;
  margin: 3rem 0;
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  width: 100%;
  /* color: #002856; */

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  margin: 1rem 0;
  width: 100%;
  font-weight: 400;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;
    /* text-align: center; */
    font-size: ${(props) => props.theme.fontmd};
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

const ForBusinessInfo = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const LinkItem = styled.span`
    width: auto;
    margin: 0 1rem;
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 400;

    /* cursor: pointer; */

    &::after {
      content: " ";
      display: block;
      width: 0%;
      height: 4px;
      /* background: ${(props) => props.theme.text}; */
      background: #009ad7;

      transition: width 0.3s ease;
    }
    &:hover::after {
      width: 100%;
      display: block;
    }
    @media (max-width: 64em) {
      margin: 1rem 0;

      &::after {
        display: none;
      }
    }
  `;

  const Label = styled.label`
    /* align-items: center; */
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
    margin-left: 12px;

    align-items: baseline;
  `;

  const Input = styled.input.attrs({ type: "checkbox" })`
    margin-right: 8px;
  `;

  const LabelText = styled.span`
    font-weight: 400;
  `;

  const context = React.useContext(Context);

  return (
    <Section direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}>
      <Container>
        <Title>
          <FormattedMessage
            id="app.navigation.ForFintech"
            defaultMessage="For Fintechs & Businesses"
          />{" "}
        </Title>
        <SubText>
          <b>
            <FormattedMessage id="app.name" defaultMessage="Leapro" />{" "}
          </b>{" "}
          <FormattedMessage
            id="app.forBus.details"
            defaultMessage="For fintech and businesses"
          />
          <br />
          <br />
          <Label>
            <Input defaultChecked checked disabled />
            <LabelText>
              <FormattedMessage id="app.forBus.item1" defaultMessage="Item 1" />
            </LabelText>
          </Label>
          <Label>
            <Input defaultChecked checked disabled />
            <LabelText>
              {" "}
              <FormattedMessage id="app.forBus.item2" defaultMessage="Item 2" />
              .
            </LabelText>
          </Label>
          <Label>
            <Input defaultChecked checked disabled />
            <LabelText>
              {" "}
              <FormattedMessage id="app.forBus.item3" defaultMessage="Item 3" />
            </LabelText>
          </Label>
          <Label>
            <Input defaultChecked checked disabled />
            <LabelText>
              {" "}
              <FormattedMessage id="app.forBus.item4" defaultMessage="Item 4" />
            </LabelText>
          </Label>
          <br />
        </SubText>
        <LinkItem>
          <Link to="/get-in-touch">
            <FormattedMessage
              id="app.navigation.getInTouch"
              defaultMessage="Get In Touch"
            />
          </Link>
        </LinkItem>
      </Container>
      <Bottom>&nbsp; </Bottom>
    </Section>
  );
};

export default ForBusinessInfo;
