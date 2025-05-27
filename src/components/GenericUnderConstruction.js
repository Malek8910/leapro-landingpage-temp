import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import { Context } from "./Wrapper";
import Button from "./Button";
import { useLayoutEffect } from "react";

const Section = styled.section`
  width: 100vw;
  /* height: 8rem; */
  position: relative;
  /* border-top: 2px solid ${(props) => props.theme.text}; */

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  overflow: hidden;

  margin-top:150px;
  margin-bottom:190px;

  @media (max-width: 48em) {
    flex-direction: column;
  }

  direction: ${(props) => props.direction};

`;

const Title = styled.h5`
  /* font-size: ${(props) => props.theme.fontxxl}; */
  /* text-transform: capitalize; */
  font-size: x-large;
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
  width: 1160px;
  padding-top: 160px;
  padding-bottom: 30px;



  @media (max-width: 64em) {
    width: 90%;

  }

  @media (max-width: 48em) {
  }

  @media (max-width: 30em) {
  }
`;

const ButtonContainer = styled.div`
  /* width: 80%;
  align-self: flex-start;
  justify-content: center;
  align-items: center; */

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

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

const Text = styled.span`
  /* display: block; */
  font-size: medium;
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  font-weight: 400;
  margin: 0.5rem 0;
  
  width: 50%;
  text-align: center;
  margin-top: 1em;
  line-height: normal;
  margin-bottom: 5em;
  @media (max-width: 48em) {
    width: 90%;

  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  margin: 1rem auto;
  width: 80%;
  font-weight: 400;
  align-items: center;
  /* align-self: center; */
  align-self: flex-start;
  text-align: center;

  text-transform: capitalize;

  @media (max-width: 64em) {
    width: 80%;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const GenericUnderConstruction = () => {
  const context = React.useContext(Context);
  const location = useLocation();
  const intl = useIntl();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <Section direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}>
      <Title>
        <FormattedMessage id="undre.const.title" defaultMessage="Page Is Coming Very Soon" />
      </Title>
      <Text>
        <FormattedMessage id="undre.const.text" defaultMessage="This page is under construction, but we are ready to go! Drop us a message to learn more." />
      </Text>
      <Link to={"/contact-us"} onClick={() => { }}>
        <Button text={intl.formatMessage({ id: "undre.const.button", defaultMessage: "Notify me" })} />
      </Link>
    </Section>
  );
};

export default GenericUnderConstruction;
