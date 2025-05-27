import React from "react";
import styled from "styled-components";

import img1 from "../../assets/greate_ux.png";
import img2 from "../../assets/secure.png";
import img3 from "../../assets/simple.png";
import img4 from "../../assets/value.png";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
import { useIntl } from "react-intl";

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
  /* background-color: #EFF2FB; */
  padding-bottom: 38px;

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
  text-align: left;
  /* margin: 1rem auto; */
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  /* width: fit-content; */
  /* width: 80%; */
  /* color: #002856; */
  width: 1160px;
  padding-top: 60px;
  padding-bottom: 10px;


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
  /* margin: 2rem auto; */
  width: 1160px;

  display: flex;
  /* justify-content: space-between; */
  justify-content: space-between;
  /* align-content: center; */
  flex-wrap: wrap;

  gap: 24px;
  flex-direction: column;


  @media (max-width: ${(props) => props.theme.width}) {
    width: 90%;
    justify-content: center;
  }
  margin-bottom: 30px;
`;

const Item = styled.div`
  /* width: calc(20rem - 4vw); */
  padding: 12px 12px;
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
    /* width: 90%; */
    flex: 0 0 100%;// don't grow, don't shrink, stay fixed at 50% width
  }
`;

const ImageContainer = styled.div`
  width: 60%;
  /* margin: 0 auto; */
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
  /* width: 20px; */
  padding: 24px 24px;
  color: ${(props) => props.theme.body};
  /* margin: 1rem 2rem; */
  position: relative;

  /* border: 2px solid ${(props) => props.theme.text}; */
  
  transition: all 0.3s ease;
  flex-grow: 1;

  background-color: ${(props) => props.theme.lightGray};
  /* margin: 16px; */
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
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 30em) {
    /* width: 90%; */
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
  padding-right: 1rem;
  padding-left: 1rem;

  align-items: center;

  text-align: ${(props) => (props.locale === 'ar' ? "-webkit-right" : "-webkit-left")};
`;

const Position = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  /* text-transform: capitalize; */
  color: rgba(${(props) => props.theme.textRgba}, 0.9);
  font-weight: 400;
  padding: 1rem;
  /* margin-bottom: auto; */
  white-space: pre-line;
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




const MemberComponent = ({ id, icon, img, name = " ", text = " " }) => {

  const context = React.useContext(Context);

  return (
    <Item2 id={id}>
      {/* <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer> */}

      <Name><br></br>
        <div>{name}</div></Name>
      <Position>{text}</Position>
      <br></br>
      {/* <a href="/" style={{ color: "#009ad7" }}>Read more {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</a> */}
    </Item2>
  );
};


const ProductTemplate1Pitch = ({ members }) => {
  const context = React.useContext(Context);

  return (
    <Section
      id="team"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >
      <Container>
        {members.map((member, index) => (
          <MemberComponent key={index} name={member.name} text={member.text} />
        ))}
      </Container>
    </Section>
  );
};

export default ProductTemplate1Pitch;
