import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Context } from "./components/Wrapper";
import transformationChallange from "./assets/blog-transformation-challenge.png";
import b2bVsOpenBanking from "./assets/blog-b2b-vs-openbanking.png";
import financeInDigitalEra from "./assets/blog-finance-in-digital-era.png";
import letterOfGuaranteeFuture from "./assets/blog-letter-of-guarantee-future.png";
import { useLayoutEffect } from "react";
import { useIntl } from "react-intl";

const Section = styled.section`
  width: 100vw;
  padding-top: 50px;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  direction: ${(props) => props.direction};
`;

const Container = styled.div`
  width: 70%;
  background-color: ${(props) => props.theme.body};
  margin: 2em auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2em;
  width: 1160px;

  @media (max-width: 90em) {
    width: 75%;
  }

  @media (max-width: 75em) {
    width: 80%;
  }

  @media (max-width: 64em) {
    width: 85%;
  }

  @media (max-width: 53em) {
    width: 90%;
  }

  @media (max-width: 48em) {
    width: 90%;
  }

  @media (max-width: 30em) {
    width: 90%;
  }
`;

const BlogItem = styled.div`
  background-color: ${(props) => props.theme.lightGray};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  padding-bottom: 1rem;
  color: ${(props) => props.theme.body};
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${(props) => props.theme.text};
`;

const BlogTitle = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: 21px;
  font-weight: 300;
  margin: 1rem 0;
  padding: 1rem 1rem;
  text-align: ${(props) => props.context.locale.startsWith("ar") ? "right" : "left"};

`;

const BlogDate = styled.p`
  color: rgba(3, 3, 3, 0.29);
  font-weight: 300;
  padding: 0 1rem;

  text-align: ${(props) => props.context.locale.startsWith("ar") ? "right" : "left"};


`;

const Title = styled.h1`
  /* font-size: ${(props) => props.theme.fontxxl}; */
  /* text-transform: capitalize; */

  color: ${(props) => props.theme.text};
  /* align-self: flex-start; */
  display: flex;
  /* justify-content: center;
  align-items: center; */
  margin: 1rem auto;
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  width: fit-content;
  /* color: #002856; */

  width: ${(props) => props.theme.width};
  padding-top: 60px;
  font-size: xx-large;

  background-image: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(90deg, #0693E3, #0F56C8, #1F366B)"
      : "linear-gradient(90deg, #1F366B, #0F56C8, #0693E3)"};
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${(props) => props.theme.width}) {
    font-size: x-large;
    width: 90%;
    text-align: center;
  }
`;

const Blog = ({ title = "Blog", blogId }) => {
  const context = React.useContext(Context);
  const intl = useIntl();

  const blogs = [
    {
      id: "transformationChallange",
      image: transformationChallange,
      title: intl.formatMessage({ id: "blog.trans1.title" }),
      date: intl.formatMessage({ id: "blog.trans1.date" }),
      link: "/blog-transformation-challenge"
    },
    {
      id: "b2bVsOpenBanking",
      image: b2bVsOpenBanking,
      title: intl.formatMessage({ id: "blog.b2bvsob.title" }),
      date: intl.formatMessage({ id: "blog.b2bvsob.date" }),
      link: "/blog-b2b-vs-openbanking"
    },
    {
      id: "financeInDigitalEra",
      image: financeInDigitalEra,
      title: intl.formatMessage({ id: "blog.lg1.title" }),
      date: intl.formatMessage({ id: "blog.lg1.date" }),
      link: "/blog-finance-in-digital-era"
    },
    {
      id: "letterOfGuaranteeFuture",
      image: letterOfGuaranteeFuture,
      title: intl.formatMessage({ id: "blog.finance1.title" }),
      date: intl.formatMessage({ id: "blog.finance1.date" }),
      link: "/blog-letter-of-guarantee-future"
    }
  ];

  const filteredBlogs = blogId ? blogs.filter(blog => blog.id !== blogId) : blogs;

  const location = useLocation();
  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    //document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";


  return (
    <Section direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}>
      <Title direction={direction}>{intl.formatMessage({ id: "blog.title" })}</Title>

      <Container>
        {filteredBlogs.map(blog => (
          <BlogItem key={blog.id}>
            <Link to={blog.link}>
              <BlogImage src={blog.image} alt={blog.title} />
              <BlogTitle context={context}><strong>{blog.title}</strong></BlogTitle>
            </Link>
            <BlogDate context={context}>{blog.date}</BlogDate>
          </BlogItem>
        ))}
      </Container>
    </Section>
  );
};

export default Blog;
