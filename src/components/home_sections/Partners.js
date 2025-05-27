import React from "react";
import styled from "styled-components";


import SecurityLogo01 from "../../assets/fintech-egypt-logo.png";
import SecurityLogo02 from "../../assets/Microsoft_logo_(2012).svg.png";
import SecurityLogo03 from "../../assets/code_logo.svg";
import SecurityLogo04 from "../../assets/riyadbank.svg";

import SecurityLogo05 from "../../assets/Misk-01.svg";
import SecurityLogo06 from "../../assets/Fintech.png";
import SecurityLogo07 from "../../assets/wsl.svg";

import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";

const Section = styled.section`
  /* min-height: 100vh; */
  width: 100vw;
  /* background-color: ${(props) => props.theme.body}; */

  position: relative;
  margin-top: 0px;



  @keyframes loop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
`;

const Title = styled.h5`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.text};
  font-weight: 550;

  text-transform: capitalize;

  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 1rem auto; */
  padding-top: 10px;
  margin-bottom: 1rem;
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  /* width: fit-content; */

  @media (max-width: 48em) {
    /* width: 80%; */
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const Container = styled.ul`

/* padding-bottom: 15px;
    padding-top: 15px; */

  /* width: 80%; */
  /* margin: 2rem auto; */
  /* margin: auto; */
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center; 
  /* flex-flow: row; */

  /* flex-wrap: nowrap; */
  align-items: center;

  overflow-x: auto;
  /* scroll-snap-type: x mandatory; */
  list-style-type: none;

      /* Hide scrollbar in Firefox */
      scrollbar-width: none;

/* Hide scrollbar in IE and Edge */
-ms-overflow-style: none;

  /* flex: 1; */
  width: auto;

::-webkit-scrollbar {
  display: none;
}

  @media (max-width: ${(props) => props.theme.width}) {
    /* width: 90%; */
    /* width: 150px; */
    align-content: flex-start; 

    /* width: fit-content; */
    overflow-x: auto;
    padding-left: 0px;
    justify-content: normal;

  }
`;

const Item = styled.li`
  //width: calc(12rem - 4vw);
  width: 120px;

  padding-right: 1.5rem;
  padding-left: 1.5rem;
  /* color: ${(props) => props.theme.body}; */
  /* margin: 2rem 1rem; */
  position: relative;

  /* border: 2px solid ${(props) => props.theme.text}; */
  /* border-radius: 20px; */
  /* transition: all 0.3s ease; */
  justify-content: center;
  align-content: center;
  img {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
  }

  &:hover {
    img {
      filter: grayscale(0%);
      -webkit-filter: grayscale(0%);
      -moz-filter: grayscale(0%);

      transform: translateY(-0.5rem) scale(1.2);
    }
  }


  @media (max-width:${(props) => props.theme.width}) {
    width: calc(8rem - 4vw);

    /* flex: 10%;  */
    /* don't grow, don't shrink, stay fixed at 50% width */
  scroll-snap-align: center;
  flex-shrink: 0;

  }
`;

const ImageContainer = styled.div`
  /* width: 80%; */
  margin: 0 auto;
  /* background-color: ${(props) => props.theme.carouselColor}; */
  /* border: 1px solid ${(props) => props.theme.text}; */
  padding-right: 1.3rem;
  padding-left: 1.2rem;

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    /* height: auto; */
    transition: all 0.3s ease;
  }
`;

const SubTextLight = styled.p`
  font-size: medium;
  color: rgba(${(props) => props.theme.textRgba}, 0.6);
  /* margin-top: 1rem; */
  /* width: 80%; */
  font-weight: 400;
  align-self: center;
  padding-top: 30px;
  text-align: center;

  @media (max-width: 75em) {
    width: 100%;
    font-size: medium;
  }

  @media (max-width: 48em) {
    font-size: medium;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 30em) {
    font-size: medium;
  }
`;



const Icon2 = styled.i`
 font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 8px;  /* Preferred icon size */
  /* display: inline-block; */
  /* line-height: 1; */
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

  margin-left: 12px;
    color: lightgrey;

    align-content: center;
`;

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
    </Item>
  );
};



const TagList = styled.div`
  /* width: 30rem; */
  max-width: 100vw;
  /* padding-left: 15px; */
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  /* gap: 1rem 0; */
  position: relative;
  padding: 1rem 0;
  overflow: hidden;
`;

const LoopSliderInner = styled.div`
    display: flex;
    width: fit-content;
    animation-name: loop;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: var(--direction);
    animation-duration: var(--duration);
`;

const Tag1 = styled.div`

  display: flex;
  align-items: center;
  gap: 0 0.2rem;
  color: #e2e8f0;
  font-size: 0.9rem;
  background-color: #334155;
  border-radius: 0.4rem;
  padding: 0.7rem 1rem;
  margin-right: 1rem; // Must used margin-right instead of gap for the loop to be smooth
  box-shadow: 
    0 0.1rem 0.2rem rgb(0 0 0 / 20%),
    0 0.1rem 0.5rem rgb(0 0 0 / 30%),
    0 0.2rem 1.5rem rgb(0 0 0 / 40%);
  
  span {
    font-size: 1.2rem;
    color: #64748b;
  }
`;

const Fad = styled.div`

  pointer-events: none;
  /* background: rgb(252,252,252);
  background: linear-gradient(90deg, rgba(252,252,252,0.7707457983193278) 0%, rgba(9,9,121,0) 50%, rgba(249,249,249,0.7931547619047619) 100%);
    position: absolute; */
  inset: 0;

`;






const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const DURATION = 55000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

const Tag = ({ text }) => (
  <div className='tag'><span>#</span> {text}</div>
);

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div style={{
      '--duration': `${duration}ms`,
      '--direction': reverse ? 'reverse' : 'normal'
    }}>
      <LoopSliderInner className='inner'>
        {children}
        {children}
      </LoopSliderInner>
    </div>
  );
};


const Partners = () => {
  const context = React.useContext(Context);


  return (
    <Section
      id="team"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >
      <SubTextLight>
        <FormattedMessage
          id="app.home.successPartners"
          defaultMessage="Success Partners"
        />
      </SubTextLight>
      <Container>


        <TagList>
          {/* {[...new Array(ROWS)].map((_, i) => ( */}
          <InfiniteLoopSlider key={1} duration={random(DURATION - 1000, DURATION + 1000)} reverse={1 % 2}>
            {/* {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
                <Tag1 text={tag} k
                  
                ey={tag}/>
              ))} */}

            <MemberComponent img={SecurityLogo01} /> <Icon2>my_location</Icon2>
            <MemberComponent img={SecurityLogo02} /><Icon2>my_location</Icon2>
            <MemberComponent img={SecurityLogo03} /><Icon2>my_location</Icon2>
            <MemberComponent img={SecurityLogo07} /><Icon2>my_location</Icon2>

            <MemberComponent img={SecurityLogo04} /><Icon2>my_location</Icon2>
            <MemberComponent img={SecurityLogo05} /><Icon2>my_location</Icon2>
            <MemberComponent img={SecurityLogo06} /><Icon2>my_location</Icon2>

            <MemberComponent img={SecurityLogo01} /> <Icon2>my_location</Icon2>
            <MemberComponent img={SecurityLogo02} /><Icon2>my_location</Icon2>
            <MemberComponent img={SecurityLogo03} /><Icon2>my_location</Icon2>
            <MemberComponent img={SecurityLogo07} /><Icon2>my_location</Icon2>

            <MemberComponent img={SecurityLogo04} /><Icon2>my_location</Icon2>
            <MemberComponent img={SecurityLogo05} /><Icon2>my_location</Icon2>
            <MemberComponent img={SecurityLogo06} /><Icon2>my_location</Icon2>
          </InfiniteLoopSlider>
          {/* ))} */}
          <Fad />
          {/* https://codepen.io/ykadosh/pen/KKezJzz */}
        </TagList>

      </Container>


    </Section>
  );
};

export default Partners;
