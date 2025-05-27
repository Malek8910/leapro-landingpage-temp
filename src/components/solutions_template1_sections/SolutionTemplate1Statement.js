import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";
import LinkedIn from "../../Icons/LinkedIn";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
import Button2 from "../Button2";

const Section = styled.section`
  width: 100vw;
  /* height: 8rem; */
  position: relative;
  /* border-top: 2px solid ${(props) => props.theme.text}; */

  background-color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  overflow: hidden;
  background-color: ${(props) => props.theme.lightGray};;



  @media (max-width: 48em) {
    height: auto;
    flex-direction: column;
  }

  direction: ${(props) => props.direction};

  /* padding-bottom: 60px; */

`;

const Title = styled.h5`
  /* font-size: ${(props) => props.theme.fontxxl}; */
  text-transform: capitalize;
  font-size: 20px;
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
  padding-top: 60px;
  padding-bottom: 60px;
  line-height: 1.6;

  background-image: linear-gradient(90deg, #0F56C8,#1F366B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${(props) => props.theme.width}) {
    font-size: large;
    width: 90%;
    font-size: ${(props) => props.theme.fontmd};
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
  margin-bottom: 4em;
  
  @media (max-width: ${(props) => props.theme.width}) {
    width: 90%;
    font-size: large;
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

const SolutionTemplate1Statement = ({ title, href, showButton }) => {
  const context = React.useContext(Context);

  return (
    <Section direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}>
      <Title>{title}</Title>
      {showButton && (
        <a target="_blank" href={href}>
          <Button2  text="Use Cases" />
        </a>
      )}
    </Section>
  );
};

export default SolutionTemplate1Statement;
