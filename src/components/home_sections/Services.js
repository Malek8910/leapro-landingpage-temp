import React from "react";
import styled from "styled-components";

import img1 from "../../assets/greate_ux.png";
import img2 from "../../assets/secure.png";
import img3 from "../../assets/simple.png";
import img4 from "../../assets/value.png";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
import { useIntl } from "react-intl";
import guaranteeApp from "../../assets/guaranteeApp.svg";
import guaranteeLink from "../../assets/guaranteeLink.svg";
import obConnector from "../../assets/obConnector.svg";
import { Link } from "react-router-dom";

const Section = styled.section`
  /* min-height: 100vh; */
  /* min-height: 110vh; */
  width: 100vw;

    /* background-color: ${(props) => props.theme.body}; */
  position: relative;

  direction: ${(props) => props.direction};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.lightGray};



`;

const Title = styled.h1`
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
  width: 1160px;
  padding-top: 60px;
  padding-bottom: 20px;

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

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  /* margin: 1rem auto; */
  font-weight: 400;
  /* align-items: center; */
  /* align-self: center; */
  /* align-self: flex-start; */
  /* text-align: center; */
  width: 1160px;

  @media (max-width: ${(props) => props.theme.width}) {
    font-size: large;
    width: 90%;
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Container = styled.div`
  width: 85%;
  margin: 2rem auto;
  width: 1160px;

  display: flex;
  /* justify-content: space-between; */
  justify-content: space-between;
  /* align-content: center; */
  flex-wrap: wrap;


  @media (max-width: ${(props) => props.theme.width}) {
    width: 90%;
    justify-content: center;
  }
  margin-bottom: 5em;
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 24px 24px;
  color: ${(props) => props.theme.body};
  /* margin: 1rem 2rem; */
  position: relative;

  /* border: 2px solid ${(props) => props.theme.text}; */
  border-radius: 20px;
  transition: all 0.3s ease;
  flex-grow: 1;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: ${(props) => props.theme.width}) {
    width: 90%;
    flex: 0 0 100%;// don't grow, don't shrink, stay fixed at 50% width
  }
`;

const ImageContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  /* background-color: ${(props) => props.theme.carouselColor}; */
  background-color: #f5f5f5;

  /* border: 1px solid ${(props) => props.theme.text}; */
  padding: 1rem;

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;


const Item2 = styled.li`
  /* width: calc(20rem - 4vw); */
  width: 20px;
  padding: 24px 24px;
  color: ${(props) => props.theme.body};
  /* margin: 1rem 2rem; */
  position: relative;

  /* border: 2px solid ${(props) => props.theme.text}; */
  
  transition: all 0.3s ease;
  flex-grow: 1;

  background-color: white;
  margin: 16px;
  border: 1px;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  flex: 0 0 43%; /* don't grow, don't shrink, stay fixed at 50% width */
  scroll-snap-align: center;
  flex-shrink: 0;


  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }

  
  /* &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  } */

  @media (max-width: 30em) {
    width: 90%;
    flex: 0 0 80%;// don't grow, don't shrink, stay fixed at 50% width
      }
`;

const Name = styled.h3`
  /* font-size: ${(props) => props.theme.fontsm}; */
  display: flex;
  /* align-items: center; */
  /* justify-content: left; */
  /* text-transform: uppercase; */
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
  min-height: 40px;

  align-items: center;

  text-align: ${(props) => (props.locale === 'ar' ? "-webkit-right" : "-webkit-left")};

  font-size: ${(props) => props.theme.fontmd};

`;

const Position = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(${(props) => props.theme.textRgba}, 0.9);
  font-weight: 400;
  padding-top: 1rem;
  line-height: normal;
  margin-bottom: auto;
  line-height: 1.6;

`;

const Icon = styled.i`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 20px;  /* Preferred icon size */
  /* display: inline-block; */
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ${(props) => props.direction};
  vertical-align: top;
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  /* font-feature-settings: 'liga'; */
  margin-right: 10px;
  margin-left: 10px;



`;

const ProductIcon = styled.div`
  /* text-decoration: underline; */
  padding: 10px;
    margin: 10px;
    background: #D3E1FB;
    border-radius: 5px;
`;


const ImgContainerFooter = styled.div`
  /* width: 28rem; */
  flex: 70%;
  /* margin-right: 16px; */
  /* background-color: ${(props) => props.theme.body}; */

  width: 4.5rem;

  display: flex;


  img {
    /* width: 75%; */
    /* height: 50px; */
    width: 3em;

  }
  
  @media (max-width: ${(props) => props.theme.width}) {
    /* margin-left: 16px;
    margin-right: 16px; */
    /* width: 12rem;

    margin-bottom: 40px; */
  }
`;



const MemberComponent = ({ id, icon, img, name = " ", position = " ", route = "", readMore }) => {
  const context = React.useContext(Context);

  return (
    <Item2 id={id}>
      <Name>
        <div>{name}</div>
      </Name>
      <Position>{position}</Position>
      <br></br>
      <Link to={route}>
        <a href="/" style={{ color: "#009ad7", display: "flex", justifyContent: "flex-end" }}>
          {readMore} {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}
        </a>
      </Link>
    </Item2>
  );
};


const Services = () => {
  const context = React.useContext(Context);
  const intl = useIntl();

  const title = intl.formatMessage({ id: "app.services.title" });
  const subtitle = intl.formatMessage({ id: "app.services.subtitle" });
  const btTransformation = intl.formatMessage({ id: "app.services.btTransformation" });
  const btTransformationDetails = intl.formatMessage({ id: "app.services.btTransformationDetails" });
  const customizedSolutions = intl.formatMessage({ id: "app.services.customizedSolutions" });
  const customizedSolutionsDetails = intl.formatMessage({ id: "app.services.customizedSolutionsDetails" });
  const readMore = intl.formatMessage({ id: "app.services.readMore" });
  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";

  return (
    <Section
      id="team"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >
      <Title direction={direction}>
        {title}
      </Title>
      <SubText>
        {subtitle}
      </SubText>
      <Container>
        <MemberComponent
          route="/service-bt-transformation"
          icon={<img
            src={guaranteeApp}
            alt="Leapro Platform"
            style={{ width: "35%", alignSelf: "baseline" }}
          />}
          name={btTransformation}
          position={btTransformationDetails}
          readMore={readMore}
        />
        <MemberComponent
          route="/service-customized-solutions"
          icon={<img
            src={guaranteeLink}
            alt="Leapro Platform"
          />}
          name={customizedSolutions}
          position={customizedSolutionsDetails}
          readMore={readMore}
        />
      </Container>
    </Section>
  );
};

export default Services;
