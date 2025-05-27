import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
import { useIntl } from "react-intl";
import { event } from "jquery";
import manageBenef from "../../assets/guaranteeApp-manage-benef.png";
import createLg from "../../assets/guaranteeApp0-create-lg.png";
import submitLg from "../../assets/guaranteeApp-submit-lg.png";
import track from "../../assets/guaranteeApp-track.png";

const Section = styled.section`
  /* min-height: 100vh; */
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  direction: ${(props) => props.direction};

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  /* font-family: ${(props) =>
    props.direction === "rtl" ? "HelveticaNeueLT Arabic 55 Roman" : "Poppins"}; */
`;

const Container = styled.div`
  /* height: 130vh; */
  background-color: ${(props) => props.theme.body};
  margin: 2em auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 1160px;
  /* background-color: #EAEDF6; */
  align-items: start;
  @media (max-width: 90em) {
    width: 75%;
    /* height: 140vh; */
  }

  @media (max-width: 75em) {
    width: 80%;
    /* height: 150vh; */
  }

  @media (max-width: 64em) {
    width: 85%;
    /* height: 160vh; */
  }

  @media (max-width: 53em) {
    width: 90%;
    /* height: 170vh; */
  }

  @media (max-width: 48em) {
    width: 90%;
    /* height: 130vh; */
  }

  @media (max-width: 30em) {
    flex-direction: column;
    width: 90%;
    /* height: 220vh; */
  }
`;

const Title = styled.h1`
  /* font-size: ${(props) => props.theme.fontxxl}; */
  text-transform: capitalize;

  color: ${(props) => props.theme.text};
  /* align-self: flex-start; */
  display: flex;
  /* justify-content: center;
  align-items: center; */
  margin: 1rem auto;
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  /* width: fit-content; */
  /* color: #002856; */

  text-align: center;
  /* width: ${(props) => props.theme.width}; */
  padding-top: 60px;

  background-image: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(90deg, #0693E3, #0F56C8, #1F366B)"
      : "linear-gradient(90deg, #1F366B, #0F56C8, #0693E3)"};
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${(props) => props.theme.width}) {
    font-size: x-large;
    width: 90%;
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  margin: 1rem auto;
  width: 80%;
  font-weight: 400;
  align-items: center;
  /* align-self: center; */
  align-self: flex-start;
  text-align: center;

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

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */
  flex-basis: fit-content;

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;
        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: center !important ;
  }
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 70%;
  }
`;

const Box = styled.p`
  height: fit-content;
  /* background-color: ${(props) => props.theme.carouselColor}; */
  background-color: #f5f5f5;
  /* background-color: #3fbdf1; */
  /* background-color: #91dcf8; */

  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  font-weight: 600;
  /* margin: 0.5rem 0; */
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;
const Text = styled.p`
  display: block;
  font-size: ${(props) => props.theme.fontmd};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const ItemsX = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */
  flex-basis: fit-content;

  /* @media (max-width: 48em) {
    width: 90%;
  } */

  /* & > *:nth-of-type(2n + 1) { */
  justify-content: start;
  @media (max-width: 48em) {
    justify-content: center;
  }

  div {
    border-radius: 50px 0 50px 0;
    text-align: right;

    @media (max-width: 48em) {
      border-radius: 0 50px 0 50px;
      text-align: left;
      p {
        border-radius: 0 40px 0 40px;
      }
    }
  }
  p {
    border-radius: 40px 0 40px 0;
  }
  /* }
   & > *:nth-of-type(2n) {
    justify-content: end;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  } */
`;

const ItemX = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 1rem 1rem;

  @media (max-width: 48em) {
    justify-content: center !important ;
  }
`;

const ItemContainerX = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};

  @media (max-width: ${(props) => props.theme.width}) {
    width: 90%;
  }
`;



//$$$$$$$$$$$$$$$  New

/* Style the tab */
const Tab = styled.div`
margin-bottom: 20px;
display: flex;
flex-direction: column;
gap: 16px;
  flex-wrap: nowrap;
  /* justify-content: center;
  align-content: center;  */

  /* margin: 20px; */
  /* overflow: hidden; */
  justify-content: flex-start;
  width: ${(props) => props.theme.width};
  /* width: auto; */
  /* border: 1px solid #ccc; */
  /* background-color: #f1f1f1; */

  overflow-x: auto;
  /* scroll-snap-type: x mandatory; */
  list-style-type: none;

      /* Hide scrollbar in Firefox */
      scrollbar-width: none;

/* Hide scrollbar in IE and Edge */
-ms-overflow-style: none;

width: 30%;
  /* flex: 1; */
  /* width: auto; */

  align-items: flex-start;

::-webkit-scrollbar {
  display: none;
}



  @media (max-width: 64em) {
    width: 90%;
    align-content: flex-start; 

    /* width: fit-content; */
    overflow-x: auto;
    padding-left: 0px;
    justify-content: normal;

    font-size: medium;
  }

  @media (max-width: 40em) {
    width: 90%;
    align-content: flex-start; 

    /* width: fit-content; */
    overflow-x: auto;
    padding-left: 0px;
    justify-content: normal;

    font-size: medium;  }


`;


/* Style the buttons inside the tab */
const TabButton = styled.button.attrs({ className: 'tablink', })`
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 12px;
  transition: 0.1s;
  font-size: large;
  text-align: left;
  :hover{
    /* background-color: #ddd; */
    color:   #009ad7;
    font-weight: bold;
  }

  &.active {
    /* background-color: #ccc; */
    color: #009ad7;
    font-weight: bold;
    /* border-bottom: 3px solid #009ad7; */

    /* padding-bottom: 8px; */
  }

  
`;



/* Style the tab content */
const TabContent = styled.div.attrs({ className: 'tabcontent', })`
  display: none;
  padding: 50px;
  /* border: 1px solid #ccc; */


  /* display: flex; */
  /* justify-content: space-between; */
  /* justify-content: space-between; */
  /* align-content: center; */
  /* flex-wrap: nowrap;  */
  /* overflow: auto; */

  margin-bottom: 50px;

  /* display: flex; */
    /* justify-content: space-around; */
    height: 650px;

  flex-flow: column;

  justify-content: start;
  align-content: flex-start;

  /* align-content: center;  */
  text-align: -webkit-center;
  /* margin: 20px; */
  /* overflow: hidden; */
  /* justify-content: flex-start; */
  /* width: ${(props) => props.theme.width}; */
  /* width: ${(props) => props.theme.width}; */
  /* border: 1px solid #ccc; */
  /* background-color: #f1f1f1; */

  overflow-x: auto;
  /* scroll-snap-type: x mandatory; */
  list-style-type: none;

      /* Hide scrollbar in Firefox */
      scrollbar-width: none;

/* Hide scrollbar in IE and Edge */
-ms-overflow-style: none;

background-color: ${(props) => props.theme.lightGray};
border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);

  /* gap: 24px; */
  flex-grow: 1;
  width: 70%;
  /* flex: 1; */
  line-height: normal;
::-webkit-scrollbar {
  display: none;
}

@media (max-width: 64em) {
  /* width: 90%; */
    /* width: 150px; */

    padding: 20px;
    width: -webkit-fill-available;


    align-content: flex-start; 

    /* width: fit-content; */
    overflow-x: auto;
    justify-content: normal;

    flex-flow: column-reverse;


  }


`;


const TabContentList = styled.ul.attrs({ className: 'tabcontent', })`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  list-style: none;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;

  /* Hide scrollbar in IE and Edge */
  -ms-overflow-style: none;

  padding-left: 0px;

    flex: 1;
  ::-webkit-scrollbar {
  display: none;
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

  /* background-color: #EFF2FB; */
  /* background-color: #EAEDF6; */

  margin: 16px;
  border: 1px;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  flex: 0 0 25%; /* don't grow, don't shrink, stay fixed at 50% width */
  scroll-snap-align: center;
  flex-shrink: 0;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: ${(props) => props.theme.width}) {
    width: 90%;
    flex: 0 0 60%;// don't grow, don't shrink, stay fixed at 50% width

  }
`;

const Name = styled.h3`
  /* font-size: ${(props) => props.theme.fontsm}; */
  display: flex;
  /* align-items: center; */
  justify-content: left;
  /* text-transform: uppercase; */
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
  /* text-align: -webkit-center; */
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
  line-height: normal;
  margin-bottom: auto;
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



const ListWrapper = styled.div`
  position: relative;
  display: flex;
    flex-flow: row;
    align-items: center;
`;

const ListWrapperButton = styled.button`
  position: absolute;
  top: 50%;

  width: 3rem;
  height: 3rem;

  transform: translateY(-50%);

  @media (max-width: ${(props) => props.theme.width}) {

    display: none;

  }

`;

const ListWrapperButtonPrevious = styled.button`
  width: 3rem;
  height: 3rem;
  left: 1.5rem;

  background-color: white;
  border: 0px;
  transform: rotate(180deg);

  /* position: fixed; */
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 50%;
  background-color: #EFF2FB;
  &:hover {

    /* transform: scale(1.2); */
    font-size: larger;

    color: #009ad7;

  }

  &:active {
    /* transform: scale(0.9); */

  }
  @media (max-width: ${(props) => props.theme.width}) {

display: none;

}
`;

const ListWrapperButtonNext = styled.button`

width: 3rem;
  height: 3rem;
  right: 1.5rem;
  background-color: white;
  border: 0px;

  /* position: fixed; */
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 50%;
  background-color: #EFF2FB;
  &:hover {
    /* transform: scale(1.2); */
    color: #009ad7;
    font-size: larger;

  }

  &:active {
    /* transform: scale(0.9); */
  }

  @media (max-width: ${(props) => props.theme.width}) {

display: none;

}
`;


const ImgContainer = styled.div`
  /* width: 100%;

  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  } */

    align-self: center;
  width: 18rem;
  /* margin: 0 1rem;
  margin-top: 1rem; */

  /* background-color: ${(props) => props.theme.body}; */

  border-radius: 20px;

  img {
    width: 100%;
    height: auto;

    @media (max-width: 64em) {
    width: 85%;
    }
    @media (max-width: 48em) {
      width: 90%;
    }
  }
  display: flex;
`;


const MemberComponent = ({ id, img, name = " ", position = " " }) => {

  const context = React.useContext(Context);

  return (
    <Item2 id={id}>
      {/* <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer> */}
      <Name>{name}</Name>
      <Position>{position}</Position>
      <br></br>
      <a href="/" style={{ color: "#009ad7" }}>Read more {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</a>
    </Item2>
  );
};


class TabButtonX2 extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.props.addToRef(this.myRef);

    //init value


    //   this.myRef.current.className.replace(" active", "");
  }


  componentDidMount() {
    if (this.props.id === "1") {
      console.log("----")
      this.myRef.current.className = this.myRef.current.className + " active";
    }
  }
  render() {
    return (
      <TabButton id={this.props.id} ref={this.myRef} onClick={this.props.onClick}>
        {this.props.title}
      </TabButton>
    );
  }


}


class TabContentX2 extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    //console.log(">");
    //console.log(this.myRef);
    this.props.addToRef(this.myRef);
  }
  componentDidMount() {
    if (this.props.id === "1") {
      //console.log("----")
      this.myRef.current.style.display = "flex";
    }
  }
  render() {
    return (
      <TabContent id={this.props.id} ref={this.myRef}>
        <h3>{this.props.title}</h3>
        <p>{this.props.subtext}</p>
        {this.props.children}
      </TabContent>
    );
  }


}





const RoadMapItemX = ({ title, subtext, addToRef }) => {
  return (
    <ItemX>
      <ItemContainerX>
        <Box>
          <SubTitle> {title} </SubTitle>
          <Text> {subtext}</Text>
        </Box>
      </ItemContainerX>
    </ItemX>
  );
};





const RoadMapItem = ({ title, subtext, addToRef }) => {
  return (
    <Item>
      <ItemContainer>
        <Box>
          <SubTitle> {title} </SubTitle>
          <Text> {subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const ProductTemplate1HowItWorks = ({ title, tabs }) => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToREfs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const handleClick = (direction, refList, refItem) => {
    const list = document.getElementById(refList);
    const item = document.getElementById(refItem);
    const itemWidth = item.offsetWidth;

    if (direction === "previous") {
      list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
      list.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  const openCity = (event, cityName) => {
    revealRefs.current.forEach((el) => {
      if (el.current?.className.includes("tabcontent")) {
        el.current.style.display = "none";
        if (el.current.id === cityName) {
          el.current.style.display = "flex";
        }
      } else if (el.current?.className.includes("tablink")) {
        el.current.className = el.current.className.replace(" active", "");
      }
    });
    event.currentTarget.className += " active";
  };

  useLayoutEffect(() => {
    return () => {};
  }, []);

  const context = React.useContext(Context);
  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";

  return (
    <Section
      id="roadmap"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >
      <Title direction={direction}>{title}</Title>
      <Container>
        <Tab>
          {tabs.map((tab, index) => (
            <TabButtonX2
              key={index}
              id={String(index + 1)}
              addToRef={addToREfs}
              onClick={(event) => openCity(event, String(index + 1))}
              title={tab.title}
            />
          ))}
        </Tab>

        {tabs.map((tab, index) => (
          <TabContentX2 key={index} id={String(index + 1)} addToRef={addToREfs}>
            <ImgContainer>
              <img src={tab.image} alt="Leapro Platform" />
            </ImgContainer>
            <>{tab.description}</>
          </TabContentX2>
        ))}
      </Container>
    </Section>
  );
};

export default ProductTemplate1HowItWorks;
