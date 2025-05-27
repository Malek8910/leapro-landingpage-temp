import React, { useLayoutEffect } from "react";
import { useLocation } from 'react-router-dom';  
import { useIntl } from "react-intl";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import LinkedIn from "../Icons/LinkedIn";
import { FormattedMessage } from "react-intl";
import { Context } from "../components/Wrapper";
import transformationChallange from "../assets/blog-finance-in-digital-era.png";
import Blog from "../Blog";

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

  padding-top: 50px;


  @media (max-width: 48em) {
    flex-direction: column;
  }

  direction: ${(props) => props.direction};

`;

const Title = styled.h5`
  /* font-size: ${(props) => props.theme.fontxxl}; */
  text-transform: capitalize;
  font-size: 36px;
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
  /* margin-top: 1em; */
  line-height: 1.6;

  @media (max-width: ${(props) => props.theme.width}) {
    font-size: medium;
    width: 90%;
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  margin-top: 15px;
  width: 80%;
  font-weight: 400;
  align-items: center;
  /* align-self: center; */
  align-self: flex-start;
  /* text-align: left; */

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

const SubText1 = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.text};
  margin-top: 15px;
  width: 80%;
  font-weight: 400;
  align-items: center;
  /* align-self: center; */
  align-self: flex-start;
  /* text-align: left; */

  text-transform: capitalize;
  padding-top: 10px;

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
  

const Subtitle = styled.h2`
  /* font-size: ${(props) => props.theme.fontxxl}; */
  text-transform: capitalize;
  font-size: x-large;

  /* color: #002856; */
  width: ${(props) => props.theme.width};
  padding-top: 20px;
  padding-bottom: 10px;
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


const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.theme.width};
  padding-top: 100px;

  @media (max-width: ${(props) => props.theme.width}) {
    flex-direction: column;
    width: 90%;
  }
`;

const BlogImage = styled.img`
  width: 400px;
  height: auto;
  border-radius: 15px;
  margin-left: 20px;

  @media (max-width: ${(props) => props.theme.width}) {
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
  }
`;


const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.theme.width};
  padding-top: 100px;
  padding-bottom: 30px;

  @media (max-width: ${(props) => props.theme.width}) {
    flex-direction: column;
    width: 90%;
  }
`;

const BlogRedefiningFinance = () => {
  const location = useLocation();
  const intl = useIntl();
  
  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
    
  const context = React.useContext(Context);
  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";

  return (
    <Section direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}>
      <TitleContainer>
        <Title direction={direction}>
          {intl.formatMessage({ id: "blog.finance1.title" })}
          <SubText>{intl.formatMessage({ id: "blog.finance1.subtitle" })}</SubText>
          <SubText1>{intl.formatMessage({ id: "blog.finance1.date" })}</SubText1>
        </Title>
        <BlogImage
          src={transformationChallange}
          alt={intl.formatMessage({ id: "blog.finance1.imageAlt" })}
        />
      </TitleContainer>

      <br></br><br></br><br></br>
      <Text>
        {intl.formatMessage({ id: "blog.finance1.paragraph1" })}
        <Subtitle direction={direction}>{intl.formatMessage({ id: "blog.finance1.subtitle1" })}</Subtitle>
        <p>{intl.formatMessage({ id: "blog.finance1.paragraph2" })}</p>
        <Subtitle direction={direction}>{intl.formatMessage({ id: "blog.finance1.subtitle2" })}</Subtitle>
        <p>{intl.formatMessage({ id: "blog.finance1.paragraph3" })}</p>
        <Subtitle direction={direction}>{intl.formatMessage({ id: "blog.finance1.subtitle3" })}</Subtitle>
        <p>{intl.formatMessage({ id: "blog.finance1.paragraph4" })}</p>
        <Subtitle direction={direction}>{intl.formatMessage({ id: "blog.finance1.subtitle4" })}</Subtitle>
        <p>{intl.formatMessage({ id: "blog.finance1.paragraph5" })}</p>
        <Subtitle direction={direction}>{intl.formatMessage({ id: "blog.finance1.subtitle5" })}</Subtitle>
        <p>{intl.formatMessage({ id: "blog.finance1.paragraph6" })}</p>
      </Text>

      <ButtonContainer>
        <Link to={"/contact-us"} onClick={() => { }}>
          <Button text={intl.formatMessage({ id: "blog.finance1.contactButton" })}></Button>
        </Link>
      </ButtonContainer>

      <Blog title={intl.formatMessage({ id: "blog.finance1.relatedBlogs" })} blogId="financeInDigitalEra" />
    </Section>
  );
};

export default BlogRedefiningFinance;
