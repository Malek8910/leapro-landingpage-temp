import React, { useLayoutEffect } from "react";
import { useLocation } from 'react-router-dom';  
import { useIntl } from "react-intl";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import LinkedIn from "../Icons/LinkedIn";
import { FormattedMessage } from "react-intl";
import { Context } from "../components/Wrapper";
import transformationChallange from "../assets/blog-letter-of-guarantee-future.png";
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
  /* font-size: xx-large; */
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

const BlogLetterOfGuaranteeFuture = () => {
  const context = React.useContext(Context);
  const location = useLocation();
  const intl = useIntl();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";

  return (
    <Section direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}>
      <TitleContainer>
        <Title direction={direction}>
          <FormattedMessage id="blog.lg1.title" defaultMessage="The Future of the Letter of Guarantee Process" />
          <SubText>
            <FormattedMessage id="blog.lg1.subtitle" defaultMessage="Seamlessly Connecting Banks, Beneficiaries, and Applicants" />
          </SubText>
          <SubText1>
            <FormattedMessage id="blog.lg1.date" defaultMessage="29 Jan 2025 - 2 min. read" />
          </SubText1>
        </Title>
        <BlogImage
          src={transformationChallange}
          alt={intl.formatMessage({ id: "blog.lg1.imageAlt", defaultMessage: "Transformation Challenge" })}
        />
      </TitleContainer>

      <br></br><br></br><br></br>
      <Text>
        <Subtitle direction={direction}>
          <FormattedMessage id="blog.lg1.subtitle1" defaultMessage="The Complexity of Traditional Letter of Guarantee Processes" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.lg1.p1" defaultMessage="The Letter of Guarantee (LG) is a critical instrument in financial transactions, providing assurance to beneficiaries while enabling businesses to secure contracts, trade, and meet obligations. However, traditional LG processes are often burdened with inefficiencies—manual paperwork, prolonged processing times, and limited visibility for all stakeholders. As financial ecosystems become more interconnected, the need for a seamless, digital LG process has never been more urgent." />
        </p>

        <Subtitle direction={direction}>
          <FormattedMessage id="blog.lg1.subtitle2" defaultMessage="The Challenges in Today’s Letter of Guarantee Workflow" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.lg1.p2" defaultMessage="The current LG process involves multiple stakeholders—banks, applicants, and beneficiaries—each operating in silos. Key pain points include:" />
        </p>
        <ul>
          <li>
            <FormattedMessage id="blog.lg1.li1" defaultMessage="Time-Consuming Manual Processes: Paper-based requests, approvals, and verifications lead to long turnaround times." />
          </li>
          <li>
            <FormattedMessage id="blog.lg1.li2" defaultMessage="Lack of Transparency: Beneficiaries and applicants struggle with visibility into LG issuance, amendments, and status updates." />
          </li>
          <li>
            <FormattedMessage id="blog.lg1.li3" defaultMessage="High Error Rates: Manual data entry increases the risk of errors, requiring costly corrections and delays." />
          </li>
          <li>
            <FormattedMessage id="blog.lg1.li4" defaultMessage="Compliance Complexities: Regulations and banking requirements demand extensive documentation and validation, adding friction to the process." />
          </li>
        </ul>

        <Subtitle direction={direction}>
          <FormattedMessage id="blog.lg1.subtitle3" defaultMessage="The Role of Digitalization in Transforming LG Processes" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.lg1.p3" defaultMessage="The digital transformation of LGs introduces automation, real-time connectivity, and enhanced security. By integrating financial ecosystems, the process can be streamlined through:" />
        </p>
        <ul>
          <li>
            <FormattedMessage id="blog.lg1.li5" defaultMessage="API-Driven Integration: Directly linking banks, applicants, and beneficiaries via secure digital channels." />
          </li>
          <li>
            <FormattedMessage id="blog.lg1.li6" defaultMessage="Smart Contracts & Blockchain: Ensuring tamper-proof transactions and automated execution of guarantee conditions." />
          </li>
          <li>
            <FormattedMessage id="blog.lg1.li7" defaultMessage="AI-Powered Risk Assessment: Accelerating credit and guarantee approvals with predictive analytics." />
          </li>
          <li>
            <FormattedMessage id="blog.lg1.li8" defaultMessage="e-Signatures & Digital Documentation: Reducing paperwork and enabling instant approvals." />
          </li>
        </ul>

        <Subtitle direction={direction}>
          <FormattedMessage id="blog.lg1.subtitle4" defaultMessage="Benefits of a Seamless, Orchestrated LG Process" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.lg1.p4" defaultMessage="A digitally connected LG ecosystem delivers significant advantages to all participants:" />
        </p>
        <ul>
          <li>
            <FormattedMessage id="blog.lg1.li9" defaultMessage="For Banks: Faster processing, reduced operational costs, and enhanced compliance tracking." />
          </li>
          <li>
            <FormattedMessage id="blog.lg1.li10" defaultMessage="For Applicants: Simplified LG requests, instant status tracking, and lower administrative burden." />
          </li>
          <li>
            <FormattedMessage id="blog.lg1.li11" defaultMessage="For Beneficiaries: Real-time validation of LGs, minimized risk of fraud, and quicker guarantee fulfillment." />
          </li>
        </ul>

        <Subtitle direction={direction}>
          <FormattedMessage id="blog.lg1.subtitle5" defaultMessage="The Future: A Fully Integrated LG Ecosystem" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.lg1.p5" defaultMessage="The next generation of LG services will leverage open banking, AI, and digital platforms to create an end-to-end automated experience. Imagine an ecosystem where:" />
        </p>
        <ul>
          <li>
            <FormattedMessage id="blog.lg1.li12" defaultMessage="Applicants initiate LG requests through their enterprise systems." />
          </li>
          <li>
            <FormattedMessage id="blog.lg1.li13" defaultMessage="Beneficiaries receive real-time notifications and verification updates." />
          </li>
          <li>
            <FormattedMessage id="blog.lg1.li14" defaultMessage="Banks automate approvals, issuance, and tracking—all within a secure, digital environment." />
          </li>
        </ul>
        <p>
          <FormattedMessage id="blog.lg1.p6" defaultMessage="This future is not far off, as leading financial institutions and fintechs are already investing in such solutions." />
        </p>

        <Subtitle direction={direction}>
          <FormattedMessage id="blog.lg1.subtitle6" defaultMessage="Conclusion: Embracing the Evolution of LG Processes" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.lg1.p7" defaultMessage="The transformation of the LG process is not just a technological upgrade; it’s a strategic necessity. By embracing digital connectivity, banks, businesses, and beneficiaries can eliminate inefficiencies, reduce risks, and unlock new opportunities. As financial ecosystems evolve, those who adopt seamless LG orchestration will gain a competitive advantage in the digital economy." />
        </p>
        <p>
          <FormattedMessage id="blog.lg1.p8" defaultMessage="Would you like to add specific examples or case studies to make it more engaging?" />
        </p>
      </Text>

      <ButtonContainer>
        <Link to={"/contact-us"} onClick={() => { }}><Button text={intl.formatMessage({ id: "blog.lg1.contactUs", defaultMessage: "Contact us" })}></Button></Link>
      </ButtonContainer>

      <Blog title={intl.formatMessage({ id: "blog.lg1.relatedBlogs", defaultMessage: "Related Blogs" })} blogId="letterOfGuaranteeFuture" />
    </Section>
  );
};

export default BlogLetterOfGuaranteeFuture;
