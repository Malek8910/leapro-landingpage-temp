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

  background-color: ${(props) => props.theme.lightGray};


`;

const Title = styled.h1`
  /* font-size: ${(props) => props.theme.fontxxl}; */
  /* text-transform: capitalize; */
  font-size: xx-large;
  /* color: ${(props) => props.theme.text}; */
  /* align-self: flex-start; */
  /* display: flex; */
  /* justify-content: right; */
  /* align-items: left; */
  /* margin: 1rem auto; */
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  /* width: fit-content; */
  /* width: 80%; */
  /* color: #002856; */
  width: ${(props) => props.theme.width};
  padding-top: 90px;

  /* background: -webkit-linear-gradient(#1F366B, #0693E3); */
    /* background: -webkit-linear-gradient(#1F366B, #0693E3); */
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



  @media (max-width: ${(props) => props.theme.width}) {
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
  gap: 24px;
  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
    align-items: center;
  }
  margin-bottom: 5em;
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding-top: 24px;
  padding-right: ${(props) => (props.direction === "ltr" ? "24px" : "0")};
  padding-left: ${(props) => (props.direction === "rtl" ? "24px" : "0")};
  color: ${(props) => props.theme.body};
  position: relative;
  border-radius: 20px;
  transition: all 0.3s ease;
  flex-grow: 1;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
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

const Name = styled.h3`
  /* font-size: ${(props) => props.theme.fontsm}; */
  display: flex;
  /* align-items: center; */
  /* justify-content: left; */
  /* text-transform: uppercase; */
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
  /* text-align: -webkit-center; */
  min-height: 40px;
  font-size: ${(props) => props.theme.fontlg};

`;

const Position = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-transform: capitalize; */
  color: rgba(${(props) => props.theme.textRgba}, 0.9);
  color: #1F366B;
  font-weight: 400;
  padding-top: 1rem;
  line-height: normal;
  line-height: 1.6;

`;

const MemberComponent = ({ img, name = " ", position = " ", direction }) => {
  return (
    <Item direction={direction}>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Features = () => {
  const context = React.useContext(Context);
  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";

  const intl = useIntl();
  const title1 = intl.formatMessage({ id: "app.features.extensiveExperience" });
  const details1 = intl.formatMessage({
    id: "app.features.extensiveExperienceDetails",
  });

  const title2 = intl.formatMessage({ id: "app.features.advancedTechnology" });
  const details2 = intl.formatMessage({
    id: "app.features.advancedTechnologyDetails",
  });

  const title3 = intl.formatMessage({ id: "app.features.clientFocusedInnovation" });
  const details3 = intl.formatMessage({
    id: "app.features.clientFocusedInnovationDetails",
  });

  const title4 = intl.formatMessage({ id: "app.features.value" });
  const details4 = intl.formatMessage({
    id: "app.features.valueDetails",
  });

  const title = intl.formatMessage({ id: "app.features.whyChooseLeapro" });

  return (
    <Section
      id="team"
      direction={direction}
    >
      <Title direction={direction}>
        {title}
      </Title>
      {/* <SubText>
        <FormattedMessage
          id="app.features.subtitle"
          defaultMessage="The use cases that Leapro supports include but are not limited to:"
        />
      </SubText> */}
      <Container>


        <MemberComponent img={img2} name={title1} position={details1} direction={direction} />
        <MemberComponent img={img4} name={title2} position={details2} direction={direction} />
        <MemberComponent img={img1} name={title3} position={details3} direction={direction} />      </Container>
    </Section>
  );
};

export default Features;
