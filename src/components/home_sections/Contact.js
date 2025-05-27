import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FormattedMessage, useIntl } from "react-intl";
import { Context } from "../Wrapper";

import emailjs from '@emailjs/browser';
import Button from "../Button";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

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
      ? "linear-gradient(5deg,transparent 50%,transparent 50%,white 90%,#f0f0f0 100%);"
      : "linear-gradient(-5deg,transparent 50%,transparent 50%,white 90%,#f0f0f0 100%);"}; */
  background-size: 100% 100%;

`;

const Container = styled.div`
  width: 1160px;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  /* border-bottom: 2px solid ${(props) => props.theme.text}; */

  @media (max-width: 75em) {
    width: 85%;
  }
  @media (max-width: 64em) {
    width: 90%;
  }

  @media (max-width: 48em) {
    width: 45vh;
    flex-direction: column;
    & > *:last-child {
      width: 45vh;
    }
  }

  h1 {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;


const Box = styled.div`
  /* width: 1160px; */
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
;
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    margin: 2rem 0;

    width: 100vw;
  }

`;


const Title = styled.h2`
  font-size: x-large;
  /* text-transform: capitalize; */

  color: ${(props) => props.theme.text};
  align-self: flex-start;
  /* display: flex;
  justify-content: center;
  align-self: flex-start; */

  align-items: center;
  margin: 3rem 0;

  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
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
`;

const SubText = styled.p`
  font-size: 17px;
  color: ${(props) => props.theme.text};
  margin: 1rem 9;
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

const Banner = () => {
  const intl = useIntl();
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const context = React.useContext(Context);


  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    // e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_1ybhixj', 'template_vxghmjt', form.current, {
        publicKey: 'GMhkKLiG9jGjG5kK_',
      })
      .then(
        () => {
          //console.log('SUCCESS!');
          setStateMessage('Message sent successfully!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 3000); // hide message after 5 seconds
        },
        (error) => {
          //console.log('FAILED...', error.text);
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 3000); // hide message after 5 seconds
        },
      );

    // Clears the form after sending the email
    e.target.reset();
  };


  const StyledLabel = styled.label`
  /* display: block; */
  margin-bottom: 5px;
  /* font-weight: bold; */
  color: ${props => props.invalid ? 'red' : 'black'}
`

  const StyledInput = styled.input`
  /* width: 100%; */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 16px;
`

  const StyledInputTextArea = styled.textarea`
  /* width: 100%; */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 16px;
  height: 100px;
  resize: vertical;
 
  `

  const FormItems = styled.div`
  margin: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* align-items: center; */
flex-grow:1;
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */

  @media (max-width: 48em) {
    /* width: 90%; */
    margin: 0 0;
    justify-content: center;

  }

`;

  const Address = styled.div`
margin: 2rem 2rem;
display: flex;
flex-direction: column;
justify-content: start;
background-color: ${(props) => props.theme.lightGray};

padding: 16px;
border: 1px;
border-top-left-radius: 12px;
border-bottom-right-radius: 12px;
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);

@media (max-width: 48em) {
  /* width: 90%; */
  margin: 4rem 1rem;

}

`;


  const Text = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  /* text-transform: capitalize; */
  color: rgba(${(props) => props.theme.textRgba}, 0.9);
  font-weight: 400;
  padding-bottom: 3rem;
  line-height: normal;
  /* margin-bottom: auto; */
  white-space: pre-line;
  p {
    line-height: 1.8;
  }
`;


  const location = useLocation();
  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // window.scrollTo(0, 0);
  }, [location.pathname]);


  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";



  return (
    <Section direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}>
      <Container>
        <Title direction={direction}>
          {intl.formatMessage({ id: "contact.title", defaultMessage: "Contact us" })} 
        </Title>
        <SubText>
          {intl.formatMessage({ id: "contact.subText", defaultMessage: "Looking to learn more about our services, solutions, and products. We are ready to provide you with the right support, information, and suggestions anytime. "})} 
          <button onClick={() => { window.location.href = "mailto:info@leapro.io?subject=Demo request" }} style={{ color: "#0693E3", background: "none", border: "none", padding: "0", cursor: "pointer", textDecoration: "underline" }}>info@leapro.io</button>


        </SubText>

        <Box>

          <form ref={form} onSubmit={sendEmail}>
            <FormItems>
              <StyledLabel>{intl.formatMessage({ id: "contact.nameLabel", defaultMessage: "Name" })}</StyledLabel>
              <StyledInput type="text" name="from_name" />
              <StyledLabel>{intl.formatMessage({ id: "contact.companyLabel", defaultMessage: "Company" })}</StyledLabel>
              <StyledInput type="text" name="company" />
              <StyledLabel>{intl.formatMessage({ id: "contact.emailLabel", defaultMessage: "Email" })}</StyledLabel>
              <StyledInput type="email" name="reply_to"  required/>
              <StyledLabel>{intl.formatMessage({ id: "contact.messageLabel", defaultMessage: "Message" })}</StyledLabel>
              <StyledInputTextArea maxlength="250" name="message" />
              <br />
              <div style={{alignSelf: "center"}}>
              {isSubmitting === true ? <><Bottom>&nbsp; </Bottom>{intl.formatMessage({ id: "contact.sending", defaultMessage: "Sending..." })}</> : <Button type="submit" text={intl.formatMessage({ id: "contact.sendButton", defaultMessage: "Send" })} disabled={isSubmitting}>{intl.formatMessage({ id: "contact.sendButton", defaultMessage: "Send" })}</Button>}
              <br></br>
              <span>{stateMessage && <p>{stateMessage}</p>}</span>
              </div>

            </FormItems>

          </form>
  


        </Box>
      </Container>
      <Bottom>&nbsp; </Bottom>



    </Section>
  );
};

export default Banner;
