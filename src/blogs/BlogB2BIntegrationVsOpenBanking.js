import React, { useLayoutEffect } from "react";
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import LinkedIn from "../Icons/LinkedIn";
import { FormattedMessage, useIntl } from "react-intl";
import { Context } from "../components/Wrapper";
import transformationChallange from "../assets/blog-b2b-vs-openbanking.png";
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

const BlogB2BIntegrationVsOpenBanking = () => {
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
          <FormattedMessage id="blog.b2bvsob.title" defaultMessage="B2B Integration vs. Open Banking" />
          <SubText>
            <FormattedMessage id="blog.b2bvsob.subtitle" defaultMessage="Understanding the Differences and Opportunities" />
          </SubText>
          <SubText1>
            <FormattedMessage id="blog.b2bvsob.date" defaultMessage="29 Jan 2025 - 2 min. read" />
          </SubText1>
        </Title>
        <BlogImage src={transformationChallange} alt="Transformation Challenge" />
      </TitleContainer>

      <br /><br /><br />
      <Text>
        <FormattedMessage id="blog.b2bvsob.intro" defaultMessage="In today’s digital economy, seamless connectivity between businesses is essential. Two major concepts driving this connectivity are B2B integration and Open Banking. While both enable data exchange and automation, they serve different purposes and impact industries in unique ways. Understanding their differences—and the opportunities they present—can help businesses make informed decisions about their digital strategies." />
        
        <Subtitle direction={direction}>
          <FormattedMessage id="blog.b2bvsob.section1.title" defaultMessage="1. What is B2B Integration?" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.b2bvsob.section1.p1" defaultMessage="B2B integration refers to the process of connecting different businesses, systems, and applications to facilitate automated data exchange. This integration helps businesses streamline operations, reduce manual work, and improve efficiency in areas like supply chain management, invoicing, and procurement." />
        </p>
        <p>
          <FormattedMessage id="blog.b2bvsob.section1.p2" defaultMessage="Key Features of B2B Integration:" />
        </p>
        <ul>
          <li>
            <FormattedMessage id="blog.b2bvsob.section1.li1" defaultMessage="Automates communication between businesses (e.g., suppliers, vendors, banks)." />
          </li>
          <li>
            <FormattedMessage id="blog.b2bvsob.section1.li2" defaultMessage="Uses standards like EDI (Electronic Data Interchange) and APIs." />
          </li>
          <li>
            <FormattedMessage id="blog.b2bvsob.section1.li3" defaultMessage="Enhances operational efficiency by reducing errors and delays." />
          </li>
          <li>
            <FormattedMessage id="blog.b2bvsob.section1.li4" defaultMessage="Supports industry-specific compliance and regulatory requirements." />
          </li>
        </ul>

        <Subtitle direction={direction}>
          <FormattedMessage id="blog.b2bvsob.section2.title" defaultMessage="2. What is Open Banking?" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.b2bvsob.section2.p1" defaultMessage="Open Banking is a regulatory-driven initiative that enables secure sharing of financial data between banks, fintechs, and third-party providers through APIs. It promotes transparency, competition, and innovation in financial services, allowing businesses and consumers to access better financial products." />
        </p>
        <p>
          <FormattedMessage id="blog.b2bvsob.section2.p2" defaultMessage="Key Features of Open Banking:" />
        </p>
        <ul>
          <li>
            <FormattedMessage id="blog.b2bvsob.section2.li1" defaultMessage="Enables secure data sharing with customer consent." />
          </li>
          <li>
            <FormattedMessage id="blog.b2bvsob.section2.li2" defaultMessage="Standardized API-based access to banking services." />
          </li>
          <li>
            <FormattedMessage id="blog.b2bvsob.section2.li3" defaultMessage="Facilitates personalized financial products and better customer experiences." />
          </li>
          <li>
            <FormattedMessage id="blog.b2bvsob.section2.li4" defaultMessage="Enhances financial inclusion and competition in the banking sector." />
          </li>
        </ul>

        <Subtitle direction={direction}>
          <FormattedMessage id="blog.b2bvsob.section3.title" defaultMessage="3. The Key Differences Between B2B Integration and Open Banking" />
        </Subtitle>
        <p>
          <table style={{ width: "100%", border: "1px solid #ccc" }}>
            <thead style={{ backgroundColor: "#f0f0f0", border: "1px solid #ccc" }}>
              <tr>
                <th>
                  <FormattedMessage id="blog.b2bvsob.section3.th1" defaultMessage="Aspect" />
                </th>
                <th>
                  <FormattedMessage id="blog.b2bvsob.section3.th2" defaultMessage="B2B Integration" />
                </th>
                <th>
                  <FormattedMessage id="blog.b2bvsob.section3.th3" defaultMessage="Open Banking" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td1" defaultMessage="Purpose" />
                </td>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td2" defaultMessage="Automating data exchange between businesses" />
                </td>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td3" defaultMessage="Enabling secure financial data sharing" />
                </td>
              </tr>
              <tr>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td4" defaultMessage="Scope" />
                </td>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td5" defaultMessage="Supply chain, procurement, ERP integration" />
                </td>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td6" defaultMessage="Banking, payments, financial data access" />
                </td>
              </tr>
              <tr>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td7" defaultMessage="Technology" />
                </td>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td8" defaultMessage="EDI, APIs, cloud-based integrations" />
                </td>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td9" defaultMessage="API-driven, regulatory-compliant frameworks" />
                </td>
              </tr>
              <tr>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td10" defaultMessage="Regulatory Focus" />
                </td>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td11" defaultMessage="Industry-specific compliance" />
                </td>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td12" defaultMessage="Governed by banking regulations (e.g., PSD2, Open Banking UK)" />
                </td>
              </tr>
              <tr>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td13" defaultMessage="Users" />
                </td>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td14" defaultMessage="Businesses across industries" />
                </td>
                <td>
                  <FormattedMessage id="blog.b2bvsob.section3.td15" defaultMessage="Banks, fintechs, and businesses interacting with financial data" />
                </td>
              </tr>
            </tbody>
          </table>
        </p>

        <Subtitle direction={direction}>
          <FormattedMessage id="blog.b2bvsob.section4.title" defaultMessage="4. How B2B Integration and Open Banking Work Together" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.b2bvsob.section4.p1" defaultMessage="While B2B integration and Open Banking serve different functions, they can complement each other in financial and non-financial business processes. For example:" />
        </p>
        <ul>
          <li>
            <FormattedMessage id="blog.b2bvsob.section4.li1" defaultMessage="Automated Payments & Reconciliation: B2B integrations can use Open Banking APIs for real-time bank account verification, payments, and reconciliation." />
          </li>
          <li>
            <FormattedMessage id="blog.b2bvsob.section4.li2" defaultMessage="Enhanced Credit Decisions: Open Banking allows lenders to access real-time financial data, while B2B integrations connect accounting systems for deeper insights." />
          </li>
          <li>
            <FormattedMessage id="blog.b2bvsob.section4.li3" defaultMessage="E-commerce & Supply Chain Finance: Open Banking facilitates instant payments and credit scoring, while B2B integrations automate invoicing and inventory management." />
          </li>
        </ul>

        <Subtitle direction={direction}>
          <FormattedMessage id="blog.b2bvsob.section5.title" defaultMessage="5. Challenges and Considerations" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.b2bvsob.section5.p1" defaultMessage="Both B2B integration and Open Banking present unique challenges:" />
        </p>
        <ul>
          <li>
            <FormattedMessage id="blog.b2bvsob.section5.li1" defaultMessage="Security & Compliance: Businesses must ensure that integrations comply with financial and data protection regulations." />
          </li>
          <li>
            <FormattedMessage id="blog.b2bvsob.section5.li2" defaultMessage="Technology Readiness: Legacy systems may struggle to adopt API-based Open Banking models." />
          </li>
          <li>
            <FormattedMessage id="blog.b2bvsob.section5.li3" defaultMessage="Standardization: While Open Banking has standardized APIs, B2B integrations often require custom development to align with different partners." />
          </li>
        </ul>

        <Subtitle direction={direction}>
          <FormattedMessage id="blog.b2bvsob.section6.title" defaultMessage="6. The Future of B2B Integration and Open Banking" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.b2bvsob.section6.p1" defaultMessage="As digital transformation accelerates, businesses will increasingly leverage both B2B integration and Open Banking to enhance efficiency, security, and innovation. The rise of embedded finance, real-time payments, and AI-driven financial automation will further blur the lines between these two concepts. Companies that adopt a hybrid approach—integrating financial APIs with broader business workflows—will gain a competitive edge." />
        </p>

        <Subtitle direction={direction}>
          <FormattedMessage id="blog.b2bvsob.conclusion.title" defaultMessage="Conclusion" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.b2bvsob.conclusion.p1" defaultMessage="B2B integration and Open Banking are transforming the way businesses connect and operate. While B2B integration focuses on streamlining operations across industries, Open Banking is revolutionizing financial services by making data more accessible and actionable. Understanding their differences and synergies will help businesses optimize their digital strategies and unlock new growth opportunities." />
        </p>
        <p>
          <FormattedMessage id="blog.b2bvsob.conclusion.p2" defaultMessage="Are you exploring B2B integration or Open Banking for your business? Share your experiences in the comments below!" />
        </p>
      </Text>

      <ButtonContainer>
        <Link to={"/contact-us"} onClick={() => { }}><Button text={intl.formatMessage({ id: "blog.b2bvsob.contactUs", defaultMessage: "Contact us" })}></Button></Link>
      </ButtonContainer>

      <Blog title={intl.formatMessage({ id: "blog.b2bvsob.relatedBlogs", defaultMessage: "Related Blogs" })} blogId="b2bVsOpenBanking" />
    </Section>
  );
};

export default BlogB2BIntegrationVsOpenBanking;
