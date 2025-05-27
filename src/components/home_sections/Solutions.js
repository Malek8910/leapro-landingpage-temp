import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
import { useIntl } from "react-intl";
import { event } from "jquery";
import { Link } from "react-router-dom";

const Section = styled.section`
  /* min-height: 100vh; */
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  direction: ${(props) => props.direction};

  display: flex;
  flex-direction: column;
  align-items: center;

  /* font-family: ${(props) =>
    props.direction === "rtl" ? "HelveticaNeueLT Arabic 55 Roman" : "Poppins"}; */


`;

const Container = styled.div`
  width: 70%; //section content wdith
  /* height: 130vh; */
  background-color: ${(props) => props.theme.body};
  margin: 4em auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

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
    width: 90%;
    /* height: 220vh; */
  }
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
  padding-bottom: 40px;
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
  /* text-transform: capitalize; */
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
  /* text-transform: capitalize; */
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
  direction: ${(props) => props.direction};

margin-bottom: 20px;
display: flex;
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

  /* flex: 1; */
  /* width: auto; */

::-webkit-scrollbar {
  display: none;
}

  @media (max-width: ${(props) => props.theme.width}) {
    /* width: 90%; */
    /* width: 150px; */
    width: 90%;
    align-content: flex-start; 

    /* width: fit-content; */
    overflow-x: auto;
    padding-left: 0px;
    justify-content: normal;

    font-size: medium;

  }


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
  font-size: x-large;
  text-align: left;
  :hover{
    /* background-color: #ddd; */
    color:   ${(props) => props.theme.brandBlue};;
    font-weight: bold;
  }

  &.active {
    /* background-color: #ccc; */
    color: ${(props) => props.theme.brandBlue};;
    border-bottom: 3px solid ${(props) => props.theme.brandBlue};;

    padding-bottom: 8px;
  }
`;



/* Style the tab content */
const TabContent = styled.div.attrs({ className: 'tabcontent', })`
  display: none;
  padding: 6px 12px;
  /* border: 1px solid #ccc; */


  /* display: flex; */
  /* justify-content: space-between; */
  justify-content: space-between;
  /* align-content: center; */
  flex-wrap: nowrap; 
  /* overflow: auto; */

  margin-bottom: 100px;

  /* display: flex; */
    flex-flow: row;
    justify-content: space-around;



    flex-wrap: nowrap;
  justify-content: center;
  align-content: center; 

  /* margin: 20px; */
  /* overflow: hidden; */
  /* justify-content: flex-start; */
  /* width: ${(props) => props.theme.width}; */
  width: ${(props) => props.theme.width};
  /* border: 1px solid #ccc; */
  /* background-color: #f1f1f1; */

  overflow-x: auto;
  /* scroll-snap-type: x mandatory; */
  list-style-type: none;

      /* Hide scrollbar in Firefox */
      scrollbar-width: none;

/* Hide scrollbar in IE and Edge */
-ms-overflow-style: none;

  /* flex: 1; */

::-webkit-scrollbar {
  display: none;
}

  @media (max-width: ${(props) => props.theme.width}) {
    /* width: 90%; */
    /* width: 150px; */
    width: 90%;
    align-content: flex-start; 

    /* width: fit-content; */
    overflow-x: auto;
    padding-left: 0px;
    justify-content: normal;

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
  background-color: ${(props) => props.theme.lightGray};

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
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }

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
  /* justify-content: left; */
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
  /* text-transform: capitalize; */
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
  background-color: #0F56C8;
  color: white;
  &:hover {

    /* transform: scale(1.2); */
    font-size: larger;

    color: ${(props) => props.theme.brandBlue};;

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

  background-color: #0F56C8;
  color: white;
  &:hover {
    /* transform: scale(1.2); */
    color: ${(props) => props.theme.brandBlue};;
    font-size: larger;

  }

  &:active {
    /* transform: scale(0.9); */
  }

  @media (max-width: ${(props) => props.theme.width}) {

display: none;

}
`;


const MemberComponent = ({ id, img, name = " ", position = " ", route = "" }) => {
  const context = React.useContext(Context);
  const intl = useIntl();

  return (
    <Item2 id={id}>
      {/* <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer> */}
      <Name>{name}</Name>
      <Position>{position}</Position>
      <br></br>
      <Link to={route}>
        <a href="#" style={{ color: "#009ad7", display: "flex", justifyContent: "flex-end" }}>
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
      //console.log("----")
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
      this.myRef.current.style.display = "block";
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

const Solutions = () => {
  const context = React.useContext(Context);
  const intl = useIntl();
  const title = intl.formatMessage({ id: "app.solutions.title" });
  const integration = intl.formatMessage({ id: "app.navigation.integration" });
  const openBanking = intl.formatMessage({ id: "app.navigation.openBanking" });
  const businessApplications = intl.formatMessage({ id: "app.navigation.businessApplications" });
  const readMore = intl.formatMessage({ id: "app.solutions.readMore" });

  const b2bApiGateway = intl.formatMessage({ id: "app.solutions.b2bApiGateway" });
  const b2bApiGatewayDetails = intl.formatMessage({ id: "app.solutions.b2bApiGatewayDetails" });
  const b2bClientConnector = intl.formatMessage({ id: "app.solutions.b2bClientConnector" });
  const b2bClientConnectorDetails = intl.formatMessage({ id: "app.solutions.b2bClientConnectorDetails" });
  const b2b2cInfrastructure = intl.formatMessage({ id: "app.solutions.b2b2cInfrastructure" });
  const b2b2cInfrastructureDetails = intl.formatMessage({ id: "app.solutions.b2b2cInfrastructureDetails" });

  const tppEnablement = intl.formatMessage({ id: "app.solutions.tppEnablement" });
  const tppEnablementDetails = intl.formatMessage({ id: "app.solutions.tppEnablementDetails" });
  const streamlineLgIssuance = intl.formatMessage({ id: "app.solutions.streamlineLgIssuance" });
  const streamlineLgIssuanceDetails = intl.formatMessage({ id: "app.solutions.streamlineLgIssuanceDetails" });
  const streamlineLgRequests = intl.formatMessage({ id: "app.solutions.streamlineLgRequests" });
  const streamlineLgRequestsDetails = intl.formatMessage({ id: "app.solutions.streamlineLgRequestsDetails" });
  const streamlineCustomerOnboarding = intl.formatMessage({ id: "app.solutions.streamlineCustomerOnboarding" });
  const streamlineCustomerOnboardingDetails = intl.formatMessage({ id: "app.solutions.streamlineCustomerOnboardingDetails" });
  const streamlineFinancialVerification = intl.formatMessage({ id: "app.solutions.streamlineFinancialVerification" });
  const streamlineFinancialVerificationDetails = intl.formatMessage({ id: "app.solutions.streamlineFinancialVerificationDetails" });
  const streamlineBankAccountVerification = intl.formatMessage({ id: "app.solutions.streamlineBankAccountVerification" });
  const streamlineBankAccountVerificationDetails = intl.formatMessage({ id: "app.solutions.streamlineBankAccountVerificationDetails" });
  const accelerateFinanceDecisioning = intl.formatMessage({ id: "app.solutions.accelerateFinanceDecisioning" });
  const accelerateFinanceDecisioningDetails = intl.formatMessage({ id: "app.solutions.accelerateFinanceDecisioningDetails" });
  const paymentFromBankAccount = intl.formatMessage({ id: "app.solutions.paymentFromBankAccount" });
  const paymentFromBankAccountDetails = intl.formatMessage({ id: "app.solutions.paymentFromBankAccountDetails" });

  const cashFlowManagement = intl.formatMessage({ id: "app.solutions.cashFlowManagement" });
  const cashFlowManagementDetails = intl.formatMessage({ id: "app.solutions.cashFlowManagementDetails" });
  const bankReconciliation = intl.formatMessage({ id: "app.solutions.bankReconciliation" });
  const bankReconciliationDetails = intl.formatMessage({ id: "app.solutions.bankReconciliationDetails" });
  const analyticsAndInsights = intl.formatMessage({ id: "app.solutions.analyticsAndInsights" });
  const analyticsAndInsightsDetails = intl.formatMessage({ id: "app.solutions.analyticsAndInsightsDetails" });
  const atmReplenishment = intl.formatMessage({ id: "app.solutions.atmReplenishment" });
  const atmReplenishmentDetails = intl.formatMessage({ id: "app.solutions.atmReplenishmentDetails" });

  const [ref, setRef] = useState([]);

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
    //console.log(list)

    // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
    const item = document.getElementById(refItem);
    // console.log(item)

    const itemWidth = item.offsetWidth;

    // Based on the direction we call `scrollBy` with the item width we got earlier
    if (direction === "previous") {
      list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
      list.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  }

  const openCity = (event, cityName) => {
    // var i, tabcontent, tablinks;
    // tabcontent = document.getElementsByClassName("tabcontent");
    // console.log("here")
    // console.log(tabcontent[i]);
    // console.log(document.getElementById("London"))

    // let t1 = gsap.timeline();
    //console.log("hhhhhhhh");

    //console.log(revealRefs);

    revealRefs.current.forEach((el, index) => {

      //console.log("Event");

      //console.log(el);


      if (el.current?.className.includes("tabcontent")) {
        // console.log("found tabcontent");
        el.current.style.display = "none";
        if (el.current.id === cityName) {
          // console.log("found");
          el.current.style.display = "block";
        }
      }
      else
        if (el.current?.className.includes("tablink")) {
          el.current.className = el.current.className.replace(" active", "");

        }

      // t1.fromTo(

      //   // el.childNodes[0],
      //   // {
      //   //   y: "0",
      //   // },
      //   // {
      //   //   y: "-30%",
      //   //   scrollTrigger: {
      //   //     id: `section-${index + 1}`,
      //   //     trigger: el,
      //   //     start: `top center+=200px`,
      //   //     end: `bottom center`,
      //   //     scrub: true,
      //   //     // markers: true,
      //   //   },
      //   // }
      // );
    });
    //document.getElementById(cityName).style.display = "block";
    //console.log(event);
    event.currentTarget.className += " active";


    // for (i = 0; i < tabcontent.length; i++) {
    //   tabcontent[i].style.display = "none";
    // }
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //   tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    // document.getElementById(cityName).style.display = "block";
    // event.currentTarget.className += " active";
  }

  useEffect(() => {
    // console.log(revealRefs.current);
  }, [revealRefs]);

  useLayoutEffect(() => {

    //console.log(revealRefs);
    let t1 = gsap.timeline();

    // revealRefs.current.forEach((el, index) => {
    //   //console.log(t1);

    //   t1.fromTo(
    //     el.childNodes[0],
    //     {
    //       y: "0",
    //     },
    //     {
    //       y: "-30%",
    //       scrollTrigger: {
    //         id: `section-${index + 1}`,
    //         trigger: el,
    //         start: `top center+=200px`,
    //         end: `bottom center`,
    //         scrub: true,
    //         // markers: true,
    //       },
    //     }
    //   );
    // });

    return () => { };
  }, []);

  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";


  return (


    <Section
      id="roadmap"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >
      <Title direction={direction}>{title}</Title>
      <Tab direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}>
        <TabButtonX2 id="1" addToRef={addToREfs} onClick={(event) => openCity(event, '1')} title={integration} />
        <TabButtonX2 id="2" addToRef={addToREfs} onClick={(event) => openCity(event, '2')} title={openBanking} />
        <TabButtonX2 id="3" addToRef={addToREfs} onClick={(event) => openCity(event, '3')} title={businessApplications} />
      </Tab>

      <TabContentX2 id="1" addToRef={addToREfs}>
        <ListWrapper>
          <TabContentList>
            <MemberComponent route="/solution-b2b-api-gateway" name={b2bApiGateway} position={b2bApiGatewayDetails} readMore={readMore} />
            <MemberComponent route="/solution-b2b-client-connector" name={b2bClientConnector} position={b2bClientConnectorDetails} readMore={readMore} />
            <MemberComponent route="/solution-b2b2c-infrastructure" name={b2b2cInfrastructure} position={b2b2cInfrastructureDetails} readMore={readMore} />
          </TabContentList>
        </ListWrapper>
      </TabContentX2>

      <TabContentX2 id="2" addToRef={addToREfs}>
        <ListWrapper>
          <div style={{ textAlign: "-webkit-center" }}>
            <ListWrapperButtonPrevious onClick={(event) => handleClick("previous", "list1245", "item1234")}>
            {context.locale.startsWith("ar") ? (
            <Icon>chevron_left</Icon>
                  ) : (
            <Icon>chevron_right</Icon>
                  )}
                              </ListWrapperButtonPrevious>
          </div>
          <TabContentList id="list1245">
            <MemberComponent route="/solution-ob-ttp-enablement" id="item1234" name={tppEnablement} position={tppEnablementDetails} readMore={readMore} />
            <MemberComponent route="/solution-ob-streamline-lg-issuance" name={streamlineLgIssuance} position={streamlineLgIssuanceDetails} readMore={readMore} />
            <MemberComponent route="/solution-ob-streamline-lg-request" name={streamlineLgRequests} position={streamlineLgRequestsDetails} readMore={readMore} />
            <MemberComponent route="/solution-ob-streamline-customer-onboarding" name={streamlineCustomerOnboarding} position={streamlineCustomerOnboardingDetails} readMore={readMore} />
            <MemberComponent route="/solution-ob-streamline-financial-verification" name={streamlineFinancialVerification} position={streamlineFinancialVerificationDetails} readMore={readMore} />
            <MemberComponent route="/solution-ob-streamline-bank-account-verification" name={streamlineBankAccountVerification} position={streamlineBankAccountVerificationDetails} readMore={readMore} />
            <MemberComponent route="/solution-ob-accelerate-finance-decisioning" name={accelerateFinanceDecisioning} position={accelerateFinanceDecisioningDetails} readMore={readMore} />
            <MemberComponent route="/solution-ob-payment-from-bank-account" name={paymentFromBankAccount} position={paymentFromBankAccountDetails} readMore={readMore} />
          </TabContentList>
          <div style={{ textAlign: "-webkit-center" }}>
            <ListWrapperButtonNext onClick={(event) => handleClick("next", "list1245", "item1234")}>
            {context.locale.startsWith("ar") ? (
            <Icon>chevron_left</Icon>
                  ) : (
            <Icon>chevron_right</Icon>
                  )}
            </ListWrapperButtonNext>
          </div>
        </ListWrapper>
      </TabContentX2>

      <TabContentX2 id="3" addToRef={addToREfs}>
        <ListWrapper>
	          <div style={{ textAlign: "-webkit-center" }}>
            <ListWrapperButtonPrevious onClick={(event) => handleClick("previous", "list6789", "item1567")}>
            {context.locale.startsWith("ar") ? (
            <Icon>chevron_left</Icon>
                  ) : (
            <Icon>chevron_right</Icon>
                  )}
                              </ListWrapperButtonPrevious>
          </div>
          <TabContentList id="list6789">
            <MemberComponent route="/solution-business-apps-cash-flow-management"  id="item1567" name={cashFlowManagement} position={cashFlowManagementDetails} readMore={readMore} />
            <MemberComponent route="/solution-business-apps-bank-reconciliation" name={bankReconciliation} position={bankReconciliationDetails} readMore={readMore} />
            <MemberComponent route="/solution-business-apps-analytics-and-insights" name={analyticsAndInsights} position={analyticsAndInsightsDetails} readMore={readMore} />
            <MemberComponent route="/solution-business-apps-atm-replenishment" name={atmReplenishment} position={atmReplenishmentDetails} readMore={readMore} />
          </TabContentList>
          <div style={{ textAlign: "-webkit-center" }}>
            <ListWrapperButtonNext onClick={(event) => handleClick("next", "list6789", "item1567")}>
            {context.locale.startsWith("ar") ? (
            <Icon>chevron_left</Icon>
                  ) : (
            <Icon>chevron_right</Icon>
                  )}
            </ListWrapperButtonNext>
          </div>
        </ListWrapper>
      </TabContentX2>
    </Section>
  );
};

export default Solutions;
