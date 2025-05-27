import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

import guaranteeApp from "../../assets/guaranteeApp.svg";
import guaranteeLink from "../../assets/guaranteeLink.svg";
import obConnector from "../../assets/obConnector.svg";
import financeApp from "../../assets/financeApp.svg";

const Section = styled.section`
  width: 100vw;
  position: relative;
  direction: ${(props) => props.direction};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.lightGray};
`;

const Title = styled.h1`
  text-transform: capitalize;
  font-size: xx-large;
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
  font-weight: 400;
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
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${(props) => props.theme.width}) {
    width: 90%;
    justify-content: center;
  }
  margin-bottom: 5em;
`;

const Item2 = styled.li`
  width: 20px;
  padding: 24px 24px;
  color: ${(props) => props.theme.body};
  position: relative;
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
  flex: 0 0 43%;
  scroll-snap-align: center;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 30em) {
    width: 90%;
    flex: 0 0 80%;
  }
`;

const Name = styled.h3`
  display: flex;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
  min-height: 40px;
  align-items: center;
  text-align: ${(props) => (props.locale === 'ar' ? "-webkit-right" : "-webkit-left")};
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
  font-size: 20px;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ${(props) => props.direction};
  vertical-align: top;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 10px;
  margin-left: 10px;
`;

const ProductIcon = styled.div`
  padding: 10px;
  margin: 10px;
  background: #d3e1fb;
  border-radius: 5px;
`;

const ImgContainerFooter = styled.div`
  flex: 70%;
  width: 4.5rem;
  display: flex;

  img {
    width: 3em;
  }

  @media (max-width: ${(props) => props.theme.width}) {
  }
`;

const MemberComponent = ({ id, icon, img, name = " ", position = " ", route = "" }) => {
  const context = React.useContext(Context);
  const intl = useIntl();

  return (
    <Item2 id={id}>
      <Name>
        <div><ImgContainerFooter>{icon}</ImgContainerFooter></div><br></br>
        <div>{name}</div>
      </Name>
      <Position>{position}</Position>
      <br></br>
      <Link to={route}>
        <a href="/" style={{ color: "#009ad7", display: "flex", justifyContent: "flex-end" }}>
          {intl.formatMessage({ id: "app.solutions.readMore" })}{" "}
          {context.locale === 'ar' ? (
            <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon>
          ) : (
            <Icon>chevron_right</Icon>
          )}
        </a>
      </Link>
    </Item2>
  );
};

const Products = () => {
  const context = React.useContext(Context);
  const intl = useIntl();

  const title = intl.formatMessage({ id: "app.products.title" });
  const subtitle = intl.formatMessage({ id: "app.products.subtitle" });

  const guaranteeAppName = intl.formatMessage({ id: "app.products.guaranteeApp" });
  const guaranteeAppDetails = intl.formatMessage({ id: "app.products.guaranteeApp.details" });

  const guaranteeLinkName = intl.formatMessage({ id: "app.products.guaranteeLink" });
  const guaranteeLinkDetails = intl.formatMessage({ id: "app.products.guaranteeLink.details" });

  const obConnectorName = intl.formatMessage({ id: "app.products.obConnector" });
  const obConnectorDetails = intl.formatMessage({ id: "app.products.obConnector.details" });

  const financeAppName = intl.formatMessage({ id: "app.products.financeApp" });
  const financeAppDetails = intl.formatMessage({ id: "app.products.financeApp.details" });

  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";

  return (
    <Section id="team" direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}>
      <Title direction={direction}>{title}</Title>
      <SubText>{subtitle}</SubText>
      <Container>
        <MemberComponent
          route="/product-guarantee-app"
          icon={<img src={guaranteeApp} alt="Leapro Platform" />}
          name={guaranteeAppName}
          position={guaranteeAppDetails}
        />
        <MemberComponent
          route="/product-guarantee-link"
          icon={<img src={guaranteeLink} alt="Leapro Platform" />}
          name={guaranteeLinkName}
          position={guaranteeLinkDetails}
        />
        <MemberComponent
          route="/product3"
          icon={<img src={obConnector} alt="Leapro Platform" />}
          name={obConnectorName}
          position={obConnectorDetails}
        />
        <MemberComponent
          route="/product3"
          icon={<img src={financeApp} alt="Leapro Platform" />}
          name={financeAppName}
          position={financeAppDetails}
        />
      </Container>
    </Section>
  );
};

export default Products;
