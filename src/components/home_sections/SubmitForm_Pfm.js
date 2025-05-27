import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";
import LinkedIn from "../../Icons/LinkedIn";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
const Section = styled.section`
  width: 100vw;
  height: 8rem;
  position: relative;
  /* border-top: 2px solid ${(props) => props.theme.text}; */

  background-color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  overflow: hidden;

  @media (max-width: 48em) {
    height: 12rem;
    flex-direction: column;
  }

  direction: ${(props) => props.direction};
`;

const Title = styled.h5`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  /* text-transform: capitalize; */

  /* text-shadow: 1px 1px 2px ${(props) => props.theme.text}; */

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    text-align: center;
    width: 40%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    padding: 2rem 0;
    width: 100%;
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
    background: #ff540a;

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
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontmd};
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

const SubmitForm_Pfm = () => {
  const context = React.useContext(Context);

  return (
    <Section direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}>
      <SubText>
        <FormattedMessage
          id="app.submisionform_pfm.text"
          defaultMessage="*There is many payments methods & options thats suits your country."
        />
      </SubText>
    </Section>
  );
};

export default SubmitForm_Pfm;
