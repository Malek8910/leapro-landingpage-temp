import React, { useLayoutEffect } from "react";
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import LinkedIn from "../Icons/LinkedIn";
import { FormattedMessage, useIntl } from "react-intl";
import { Context } from "../components/Wrapper";
import transformationChallange from "../assets/blog-transformation-challenge.png";
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

const BlogTransformationChallenge = () => {
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
          <FormattedMessage id="blog.trans1.title" defaultMessage="The Transformation Challenge: Why SMEs Struggle with Transformation?" />
          <SubText>
            <FormattedMessage id="blog.trans1.subtitle1" defaultMessage="Transformation is essential—business and technology must evolve together." />
          </SubText>
          <SubText1>
            <FormattedMessage id="blog.trans1.date" defaultMessage="29 Jan 2025 - 2 min. read" />
          </SubText1>
        </Title>
        <BlogImage
          src={transformationChallange}
          alt={intl.formatMessage({ id: "blog.trans1.imageAlt", defaultMessage: "Transformation Challenge" })}
        />
      </TitleContainer>

      <br /><br /><br />
      <Text>
        <FormattedMessage id="blog.trans1.paragraph1" defaultMessage="Digital transformation is no longer optional for businesses—it’s a necessity. Yet, Small and Medium Enterprises (SMEs) often face unique challenges that slow down or even halt their transformation efforts. Despite the potential benefits of efficiency, scalability, and competitiveness, many SMEs struggle to adapt. In this post, we’ll explore the key challenges SMEs face and how they can overcome them." />
        
        <Subtitle direction={direction}>
          <FormattedMessage id="blog.trans1.subtitle2" defaultMessage="Limited Financial Resources" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.trans1.paragraph2" defaultMessage="Unlike large enterprises, SMEs often lack the financial flexibility to invest in cutting-edge technology. Upgrading systems, integrating digital tools, and hiring tech talent require capital that many SMEs find hard to allocate. Without proper funding, digital transformation remains a distant goal rather than a strategic priority." />
        </p>
        <p>
          <FormattedMessage id="blog.trans1.solution1" defaultMessage="Solution: SMEs can explore cost-effective cloud-based solutions, government grants, or partnerships with fintech and tech providers offering flexible pricing models." />
        </p>
        
        <Subtitle direction={direction}>
          <FormattedMessage id="blog.trans1.subtitle3" defaultMessage="Resistance to Change" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.trans1.solution2" defaultMessage="Solution: A gradual approach, along with proper training and leadership commitment, can help ease this resistance. Change management strategies that involve employees in decision-making foster a culture of adaptability." />
        </p>
        
        <Subtitle direction={direction}>
          <FormattedMessage id="blog.trans1.subtitle4" defaultMessage="Lack of Digital Skills and Expertise" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.trans1.paragraph3" defaultMessage="SMEs often lack the internal expertise needed to implement and manage digital transformation effectively. Many business owners wear multiple hats, making it difficult to focus on acquiring and implementing new technologies." />
        </p>
        <p>
          <FormattedMessage id="blog.trans1.solution3" defaultMessage="Solution: Investing in upskilling, hiring external consultants, or partnering with technology providers can bridge the knowledge gap. Digital literacy programs tailored for SMEs can also be a game-changer." />
        </p>
        
        <Subtitle direction={direction}>
          <FormattedMessage id="blog.trans1.subtitle5" defaultMessage="Integration Challenges with Legacy Systems" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.trans1.paragraph4" defaultMessage="Many SMEs operate on outdated systems that do not easily integrate with modern digital tools. Transitioning from legacy systems to more advanced solutions requires time, money, and careful planning to prevent disruptions." />
        </p>
        <p>
          <FormattedMessage id="blog.trans1.solution4" defaultMessage="Solution: Adopting modular and API-driven solutions can help SMEs gradually transition without overhauling their entire infrastructure at once." />
        </p>
        
        <Subtitle direction={direction}>
          <FormattedMessage id="blog.trans1.subtitle6" defaultMessage="Cybersecurity and Data Privacy Concerns" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.trans1.paragraph5" defaultMessage="With digital transformation comes the responsibility of safeguarding customer and business data. SMEs often lack the necessary security measures, making them vulnerable to cyber threats. Concerns over compliance with data protection regulations further complicate the transition." />
        </p>
        <p>
          <FormattedMessage id="blog.trans1.solution5" defaultMessage="Solution: SMEs must prioritize cybersecurity by implementing basic security protocols, training employees on data protection, and leveraging secure cloud solutions. Partnering with cybersecurity experts can also mitigate risks." />
        </p>
        
        <Subtitle direction={direction}>
          <FormattedMessage id="blog.trans1.subtitle7" defaultMessage="Unclear ROI and Strategic Vision" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.trans1.paragraph6" defaultMessage="Many SMEs hesitate to invest in digital transformation because they struggle to see a clear return on investment (ROI). Without a strategic vision, transformation efforts become fragmented and fail to deliver meaningful results." />
        </p>
        <p>
          <FormattedMessage id="blog.trans1.solution6" defaultMessage="Solution: Developing a digital roadmap with measurable KPIs helps SMEs track progress and justify investments. Understanding long-term benefits, such as improved efficiency and customer engagement, ensures transformation aligns with business goals." />
        </p>
        
        <Subtitle direction={direction}>
          <FormattedMessage id="blog.trans1.subtitle8" defaultMessage="Conclusion" />
        </Subtitle>
        <p>
          <FormattedMessage id="blog.trans1.paragraph7" defaultMessage="While SMEs face numerous challenges in digital transformation, these hurdles are not insurmountable. By addressing financial constraints, fostering a culture of change, building digital expertise, and leveraging scalable solutions, SMEs can successfully navigate the transformation journey. The key is to start small, plan strategically, and embrace technology as an enabler of growth." />
        </p>
        <p>
          <FormattedMessage id="blog.trans1.paragraph8" defaultMessage="Are you an SME looking to embark on a digital transformation journey? Share your challenges and insights in the comments below!" />
        </p>
      </Text>

      <ButtonContainer>
        <Link to={"/contact-us"} onClick={() => { }}>
          <Button text={intl.formatMessage({ id: "blog.trans1.contactUs", defaultMessage: "Contact us" })} />
        </Link>
      </ButtonContainer>

      <Blog title={intl.formatMessage({ id: "blog.trans1.relatedBlogs", defaultMessage: "Related Blogs" })} blogId="transformationChallange" />
    </Section>
  );
};

export default BlogTransformationChallenge;
