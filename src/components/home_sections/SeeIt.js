import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";
import LinkedIn from "../../Icons/LinkedIn";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";

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
  background-color: white;



  @media (max-width: 48em) {
    flex-direction: column;
  }

  direction: ${(props) => props.direction};

`;

const Title = styled.h5`
  /* font-size: ${(props) => props.theme.fontxxl}; */
  text-transform: capitalize;
  font-size: xx-large;
  /* color: ${(props) => props.theme.text}; */
  /* align-self: flex-start; */
  /* display: flex; */
  /* justify-content: right; */
  /* align-items: left; */
  /* text-align: left; */
  /* margin: 1rem auto; */
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  /* width: fit-content; */
  /* width: 80%; */
  /* color: #002856; */
  width: ${(props) => props.theme.width};
  padding-top: 100px;
  padding-bottom: 30px;
  line-height: initial;


  background-image: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(90deg, #0693E3, #0F56C8, #1F366B)"
      : "linear-gradient(90deg, #1F366B, #0F56C8, #0693E3)"};
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  
  @media (max-width: ${(props) => props.theme.width}) {
    font-size: x-large;
    width: 90%;
  }
`;

const ButtonContainer = styled.div`
  width: 1160px;
  padding-top: 50px;
  padding-bottom: 70px;
  /* align-self: flex-start;
  justify-content: left;
  align-items: left; */

  @media (max-width: 48em) {
    align-self: left;
    text-align: left;
    width: auto;

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
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};

  font-weight: 400;
  margin: 0.5rem 0;
  
  width: 1160px;
  /* text-align: left; */
  margin-top: 1em;
  line-height: 1.6;

  @media (max-width: ${(props) => props.theme.width}) {
    font-size: medium;
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
  text-align: left;

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



const SeeIt = () => {
  const context = React.useContext(Context);
  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";

  return (
    <Section direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}>
      <Title direction={direction}>
        <FormattedMessage id="app.seeIt.title" defaultMessage="See Leapro In Action" />
      </Title>
      <Text>
        <FormattedMessage id="app.seeIt.text" defaultMessage="The success of our clients is our success. We view each project as a partnership toward mutual success, not just as a customer-client relationship. Connect to us to explain and showcase our solution’s prototype, what we can do for you." />
      </Text>
      <ButtonContainer>
        <Link to={"/contact-us"} onClick={() => { }}>
          <Button text={<FormattedMessage id="app.seeIt.button" defaultMessage="Request a Demo" />} />
        </Link>
      </ButtonContainer>
    </Section>
  );
};

export default SeeIt;
