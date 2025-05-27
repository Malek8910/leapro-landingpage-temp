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
  font-size: ${(props) => props.theme.fontmd};
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
  width: 75%;
  min-height: 13rem;
  margin: 0 auto;
  /* background-color: ${(props) => props.theme.carouselColor}; */
  /* background-color: #f5f5f5; */
  background-color: ${(props) => props.theme.text};

  /* border: 1px solid ${(props) => props.theme.text}; */
  padding: 1rem;

  border-radius: 20px;
  cursor: pointer;
  align-items: center;
  border: dashed;
  line-height: normal;
  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
  color: ${(props) => props.theme.text};
`;

const ItemTitle = styled.h4`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;

  color: ${(props) => props.theme.body};
  /* align-self: flex-start; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  width: fit-content;
  text-align: center;
  /* width: 80%; */
  /* color: #002856; */

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontlg};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const Name = styled.h3`
  /* font-size: ${(props) => props.theme.fontsm}; */
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
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: rgba(${(props) => props.theme.textRgba}, 0.9);
  font-weight: 400;
  padding-top: 1rem;
`;

const MemberComponent = ({ img, number, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <ItemTitle>{number}</ItemTitle>
      </ImageContainer>
    </Item>
  );
};

const Benefits_Pfm = () => {
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
      <Title>Benefits</Title>
      <SubText>
        What you will get our of Leapro financial planner platform?
        <br />
      </SubText>
      <Container>
        <MemberComponent
          img={img1}
          number="-	Help you to reach financial freedom by visualizing your financial future."
        />
        <MemberComponent
          img={img2}
          number="Aggregating all the financial information and financial position in one place in a clear and simple way."
        />
        <MemberComponent
          img={img3}
          number="Help you plan and reach financial goals such as a comfortable pension, school/college education expenses, buying a house, etc."
        />
        <MemberComponent
          img={img3}
          number="Help me track the execution of the financial plan and determine the extent of deviation between the plan and reality, so that I can make early corrective decisions."
        />
        <MemberComponent
          img={img3}
          number="Help you financial decisions making process, using 'what if', that shows you how a decision will impact your plans, is it negative or positive impact on my current or future financial situation."
        />
        <MemberComponent
          img={img3}
          number="Introduce you to savings and investments bank products that supports your plans."
        />
        <MemberComponent
          img={img3}
          number="Help you Involve the kids in the process, to make them more independent when it comes to financial decision."
        />
      </Container>
    </Section>
  );
};

export default Benefits_Pfm;
