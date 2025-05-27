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
  background-color: ${(props) => props.theme.body};
  position: relative;
  direction: ${(props) => props.direction};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;

  color: ${(props) => props.theme.text};
  /* align-self: flex-start; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
  text-align: center;
  /* width: 80%; */
  /* color: #002856; */

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  margin: 1rem auto;
  font-weight: 400;

  display: flex;

  justify-content: center;
  align-items: center;
  padding-top: 2rem;

  padding-bottom: 0rem;
  width: 60%;
  text-align: center;

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    text-align: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
    width: 40vh;
  }
`;

const Container = styled.div`
  width: 95%;
  margin: 2rem auto;

  display: flex;
  /* justify-content: space-between; */
  justify-content: center;

  align-content: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
  margin-bottom: 5em;
`;

const Item = styled.div`
  width: calc(18rem - 2vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 1rem 2rem;
  position: relative;

  /* border: 2px solid ${(props) => props.theme.text}; */
  border-radius: 20px;
  transition: all 0.3s ease;

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
  width: 30%;
  margin: 0 auto;
  /* background-color: ${(props) => props.theme.carouselColor}; */
  background-color: #f5f5f5;

  /* border: 1px solid ${(props) => props.theme.text}; */
  padding: 1rem;

  border-radius: 20px;
  cursor: pointer;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
  color: ${(props) => props.theme.text};
`;

const ItemTitle = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;

  color: ${(props) => props.theme.text};
  /* align-self: flex-start; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
  text-align: center;
  /* width: 80%; */
  /* color: #002856; */

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Name = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-transform: uppercase; */
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
  text-align: -webkit-center;
  min-height: 40px;
`;

const Position = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 390;
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-transform: capitalize; */
  color: rgba(${(props) => props.theme.textRgba}, 0.9);
  padding-top: 1rem;
`;

const MemberComponent = ({ img, number, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <ItemTitle>{number}</ItemTitle>
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Features_Pfm = () => {
  const context = React.useContext(Context);

  const intl = useIntl();

  const i1 = intl.formatMessage({ id: "app.features_pfm.1" });
  const item1 = intl.formatMessage({ id: "app.features_pfm.item1" });
  const itemDetails1 = intl.formatMessage({
    id: "app.features_pfm.item1Details",
  });

  const i2 = intl.formatMessage({ id: "app.features_pfm.2" });
  const item2 = intl.formatMessage({ id: "app.features_pfm.item2" });
  const itemDetails2 = intl.formatMessage({
    id: "app.features_pfm.item2Details",
  });

  const i3 = intl.formatMessage({ id: "app.features_pfm.3" });
  const item3 = intl.formatMessage({ id: "app.features_pfm.item3" });
  const itemDetails3 = intl.formatMessage({
    id: "app.features_pfm.item3Details",
  });

  return (
    <Section
      id="team"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >
      <Title>
        <FormattedMessage
          id="app.features_pfm.title"
          defaultMessage="3 simple steps"
        />{" "}
      </Title>
      <SubText>
        <FormattedMessage
          id="app.features_pfm.details1"
          defaultMessage="Details 1"
        />
        <br />
        <br />

        <FormattedMessage
          id="app.features_pfm.details2"
          defaultMessage="Details 2"
        />
        <br />
      </SubText>
      <Container>
        <MemberComponent
          img={img1}
          number={i1}
          name={item1}
          position={itemDetails1}
        />
        <MemberComponent
          img={img2}
          number={i2}
          name={item2}
          position={itemDetails2}
        />
        <MemberComponent
          img={img3}
          number={i3}
          name={item3}
          position={itemDetails3}
        />
      </Container>
    </Section>
  );
};

export default Features_Pfm;
