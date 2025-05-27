import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import LinkedIn from "../Icons/LinkedIn";
import { Link, useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Context } from "./Wrapper";

import linkedin from "../assets/icons8-linkedin.svg";
import facebook from "../assets/icons8-facebook.svg";
import x from "../assets/icons8-twitter.svg";

import guaranteeApp from "../assets/guaranteeApp_white.svg";
import guaranteeLink from "../assets/guaranteeLink_white.svg";
import obConnector from "../assets/obConnector_white.svg";
import financeApp from "../assets/financeApp-white.svg";


const Section = styled.footer`
  /* min-height: 100vh;
   height: 100vh;*/

  width: 100vw;
  background-color: ${(props) => props.theme.text};
  /* background-color: #002856; */

  position: relative;
  color: ${(props) => props.theme.text};
  /* top: 100px; */
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;

  direction: ${(props) => props.direction};

`;

const Container = styled.div`
  display: flex ;
  /* width: 75%; */
  margin: 2rem auto;
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  /* display: ruby; */
  border-bottom: 0px solid ${(props) => props.theme.body};

  width: 1160px;
  margin-top: 60px;
  @media (max-width: 1160px) {
    //width: 90%;
    /* width: auto; */
    width: 90%;
    margin-top: 40px;

    flex-direction: column;
  }

  h1 {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  flex-direction: row;
    flex: 1;
    align-items: flex-start;
    flex: 50%;
  @media (max-width: 1160px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: start;
  flex: 50%;
  
  @media (max-width: 1160px) {
    //width: 100%;
    width: 100%;
    flex-direction: column;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  /* margin: 1.5rem auto; */

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const MenuItems = styled.div`
display: flex;
  /* list-style: none; */
  /* width: 50%; */
  /* display: grid; */
  /* grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr); */
  /* grid-gap: 1rem;
  color: ${(props) => props.theme.body}; */
  /* width: auto; */
  margin-bottom: 30px;
  @media (max-width: 1160px) {
    /* display: none; */
    flex-direction: column;
  }
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  color: ${(props) => props.theme.body};

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 4px;
    /* background: ${(props) => props.theme.body}; */
    background: #009ad7;
    /* background: #ffff; */

    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  Link {
    color: ${(props) => props.theme.body};
  }
`;

const linkStyle = {
  color: "white",
};

const Bottom = styled.div`
display: flex;
  width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.body};

  /* border-top: 1px solid #009ad7; */
  border-top: 0.5px solid gray;

  padding-top: 20px;
  padding-bottom: 30px;

  a {
    text-decoration: underline;
  }

  @media (max-width: 1160px) {
    flex-direction: column;
    //width: 100%;
    width: 90%;
  }

  span {
    margin-bottom: 1rem;
  }
`;

const CopyRight = styled.div`

  font-size: small;
  
  @media (max-width: 1160px) {
    margin-bottom: 20px;
    align-self: baseline;

  }
`;

const MegaMenuList = styled.ul`
  padding-right: 30px;  
  padding-left: 30px;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  /* width: 300px; */
  vertical-align: top;
  line-height: 30px;

  a {
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.fontsm};
    /* justify-content: space-between; */
  }

  a:hover {


    font-size: ${(props) => props.theme.fontsm};
    color: #5555;
    /* background: #F2F4FB; */
    /* border-radius: .5rem; */
    /* transition: top 0.9s;  */
    }
  a:hover::after  {
      width: 100%;
    }

    li {
      /* display: flex;
      align-items: center; */
    }
  
  @media (max-width: 1160px) {
    //margin-top: 10px;

    //margin-left: 50px;
    //margin-right: 50px;
    /* margin-bottom: 25px; */

  } 

  
`;



const ListItemTitle = styled.span`
  /* text-decoration: underline; */
  /* font-size: ${(props) => props.theme.fontmd}; */
  font-size: small;
  color: white;

  text-align: ${(props) => (props.locale === 'ar' ? "-webkit-right" : "-webkit-left")};
  :hover {


    /* font-size: ${(props) => props.theme.fontsm}; */
    color: #009ad7;
    /* background: #F2F4FB; */
    /* border-radius: .5rem; */
    /* transition: top 0.9s;  */
    }
`;

const ListTitle = styled.div`
  /* text-decoration: underline; */
  color: #abb8c3;
  padding-bottom: 16px;
  /* font-size: ${(props) => props.theme.fontsm}; */
  font-size: small;


`;

const ProductItem = styled.div`
  /* text-decoration: underline; */
  display: flex;
  align-items: center;

  text-align: ${(props) => (props.locale === 'ar' ? "-webkit-right" : "-webkit-left")};
`;

const ProductIcon = styled.div`
  /* text-decoration: underline; */
    padding: 3px;
    margin: 10px;
    background: #D3E1FB;
    border-radius: 5px;

    @media (max-width: 64em) {
      margin-left: 0;  }

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
  vertical-align: middle;
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

const ListItemSubTitle = styled.span`
  /* text-decoration: underline; */
  font-size: small;


  text-align: ${(props) => (props.locale === 'ar' ? "-webkit-right" : "-webkit-left")};

`;

const Title = styled.h5`
  /* font-size: ${(props) => props.theme.fontxxl}; */
  text-transform: capitalize;
  font-size: large;
  /* color: ${(props) => props.theme.text}; */
  /* align-self: flex-start; */
  /* display: flex; */
  /* justify-content: right; */
  /* align-items: left; */
  text-align: left;
  /* margin: 1rem auto; */
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  /* width: fit-content; */
  /* width: 80%; */
  /* color: #002856; */
  /* width: 1160px; */
  padding-bottom: 20px;
  color: white;



  @media (max-width: 64em) {
    //font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    //font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    //font-size: ${(props) => props.theme.fontxl};
  }
`;


const ImgContainerFooter = styled.div`
  /* width: 28rem; */
  flex: 70%;
  /* margin-right: 16px; */
  /* background-color: ${(props) => props.theme.body}; */
  /* margin-left: -15px; */
  width: 2rem;

  display: flex;

  padding: 10px;
    /* margin: 10px; */
    /* background: white;
    border-radius: 5px; */

  img {
    /* width: 75%; */
    /* height: 50px; */
    width: 2.5em;

  }
  
  @media (max-width: ${(props) => props.theme.width}) {
    /* margin-left: 16px;
    margin-right: 16px; */
    width: 2rem;

    /* margin-bottom: 40px; */
  }
`;



const Footer = () => {
  const [click, setClick] = useState(false);

  const [homeImgWhite, sethomeImgWhite] = useState(true);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  const context = React.useContext(Context);

  if (useLocation().pathname.includes("/lg_request")) {
    return null;
  } else

    return (
      <Section direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}>

        <Container>
          <Left>
            <div style={{ flex: "70%" }}>
              <Logo footer homeImgWhite={homeImgWhite} />
            </div>

            <Right>

              <Title><FormattedMessage id="app.navigation.resources" defaultMessage="Resources" /></Title>
              <MenuItems>

                <MegaMenuList>
                  <ListTitle><FormattedMessage id="app.footer.company" defaultMessage="COMPANY" /></ListTitle>

                  <li><Link to={"/about"} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.navigation.aboutLeapro" defaultMessage="About Leaopro" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                  <li><Link to={"/contact-us"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.navigation.joinOurTeam" defaultMessage="Join Our Team" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                  <li><Link to={"/contact-us"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.navigation.contactUs" defaultMessage="Contact us" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                </MegaMenuList>
              </MenuItems>

              <MenuItems>

                <MegaMenuList>
                  <ListTitle><FormattedMessage id="app.navigation.content" defaultMessage="CONTENT" /></ListTitle>

                  <li><Link to={"/blog"} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.navigation.blog" defaultMessage="About Leaopro" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                  <li><Link to={"/commingSoon"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.navigation.eventsResources" defaultMessage="Events & Resources" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                </MegaMenuList>
              </MenuItems>
            </Right>

          </Left>
          <Right>
          <Title><FormattedMessage id="app.navigation.services" defaultMessage="Services" /></Title>

          <MenuItems>

            <MegaMenuList styl={{ marginBottom: 0 }}>
              <li><Link to={"/service-bt-transformation"} onClick={() => { }}><ProductItem locale={context.locale}><div>

              </div><div><ListItemTitle locale={context.locale}><FormattedMessage id="app.services.btTransformation" defaultMessage="Business Technology Transformation" /></ListItemTitle><div></div></div></ProductItem> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>


            </MegaMenuList>
            <MegaMenuList>
              <li><Link to={"/service-customized-solutionsp"} onClick={() => { }}><ProductItem locale={context.locale}><div>

              </div><div><ListItemTitle locale={context.locale}><FormattedMessage id="app.services.customizedSolutions" defaultMessage="Customized Solutions" /></ListItemTitle><div></div></div></ProductItem> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>



            </MegaMenuList>
          </MenuItems>

            <Title><FormattedMessage id="app.navigation.solutions" defaultMessage="Solutions" /></Title>
            <MenuItems>
              <MegaMenuList>
                <ListTitle><FormattedMessage id="app.navigation.integration" defaultMessage="INTEGRATION" /></ListTitle>
                <li><Link to={"/solution-b2b-api-gateway"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.b2bApiGateway" defaultMessage="B2B API Gateway" /></ListItemTitle> </Link></li>
                <li><Link to={"/solution-b2b-client-connector"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.b2bClientConnector" defaultMessage="B2B Client Connector" /></ListItemTitle> </Link></li>
                <li><Link to={"/solution-b2b2c-infrastructure"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.b2b2cInfrastructure" defaultMessage="B2B2C Infrastructure" /></ListItemTitle></Link></li>
              </MegaMenuList>
              {/*
            <Item onClick={() => scrollTo("navigation")}>Start</Item>
            <Item onClick={() => scrollTo("about")}>
              For Financial Institutions
            </Item>
            <Item onClick={() => scrollTo("roadmap")}>For Businesses</Item>
            <Item onClick={() => scrollTo("showcase")}>Get In Touch</Item>
            */}
              {/* <Item onClick={() => setClick(!click)}>
              <Link to={"/"} style={linkStyle}>
                <FormattedMessage
                  id="app.navigation.start"
                  defaultMessage="Start"
                />
              </Link>
            </Item>

            <Item onClick={() => setClick(!click)}>
              <Link to={"/for-fi"} style={linkStyle}>
                <FormattedMessage
                  id="app.navigation.ForFinInst"
                  defaultMessage="For Fin Inst"
                />
              </Link>
            </Item>
            <Item onClick={() => setClick(!click)}>
              <Link to={"/for-business"} style={linkStyle}>
                <FormattedMessage
                  id="app.navigation.ForFintech"
                  defaultMessage="For Fin tech"
                />{" "}
              </Link>
            </Item>
            <Item onClick={() => setClick(!click)}>
              <Link to={"/get-in-touch"} style={linkStyle}>
                <span>
                  <FormattedMessage
                    id="app.navigation.getInTouch"
                    defaultMessage="Get In Touch"
                  />{" "}
                </span>
              </Link>
            </Item> */}
              <br></br>
              <MegaMenuList>
                <ListTitle><FormattedMessage id="app.navigation.openBanking" defaultMessage="OPEN BANKING" /></ListTitle>
                <li><Link to={"/solution-ob-ttp-enablement"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.tppEnablement" defaultMessage="TPP Enablement" /></ListItemTitle> </Link> </li>
                <li><Link to={"/solution-ob-streamline-lg-issuance"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.streamlineLgIssuance" defaultMessage="Streamline LG Issuance" /></ListItemTitle> </Link></li>
                <li><Link to={"/solution-ob-streamline-lg-request"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.streamlineLgRequests" defaultMessage="Streamline LG Requests" /></ListItemTitle>  </Link></li>
                <li><Link to={"/solution-ob-streamline-customer-onboarding"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.streamlineCustomerOnboarding" defaultMessage="Streamline Customer Onboarding" /></ListItemTitle>  </Link></li>
                <li><Link to={"/solution-ob-streamline-financial-verification"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.streamlineFinancialVerification" defaultMessage="Streamline Financial Verification" /></ListItemTitle> </Link></li>
                <li><Link to={"/solution-ob-streamline-bank-account-verification"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.streamlineBankAccountVerification" defaultMessage="Streamline Bank-Account Verification" /></ListItemTitle> </Link></li>
                <li><Link to={"/solution-ob-accelerate-finance-decisioning"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.accelerateFinanceDecisioning" defaultMessage="Accelerate Finance Decisioning" /></ListItemTitle> </Link></li>
                <li><Link to={"/solution-ob-payment-from-bank-account"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.paymentFromBankAccount" defaultMessage="Payment From Bank Account" /></ListItemTitle> </Link></li>


              </MegaMenuList>
              <br></br>

              <MegaMenuList>
                <ListTitle><FormattedMessage id="app.navigation.businessApplications" defaultMessage="BUSINESS APPLICATIONS" /></ListTitle>
                <li><Link to={"/solution-business-apps-cash-flow-management"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.cashFlowManagement" defaultMessage="Cash Flow Management" /></ListItemTitle> </Link></li>
                <li><Link to={"/solution-business-apps-bank-reconciliation"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.bankReconciliation" defaultMessage="Bank Reconciliation" /></ListItemTitle> </Link></li>
                <li><Link to={"/solution-business-apps-analytics-and-insights"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.analyticsInsights" defaultMessage="Analytics & Insights" /></ListItemTitle> </Link></li>
                <li><Link to={"/solution-business-apps-atm-replenishment"} onClick={() => { }}><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.atmReplenishment" defaultMessage="ATM Replenishment" /></ListItemTitle> </Link></li>
  
              </MegaMenuList>
            </MenuItems>


            <Title><FormattedMessage id="app.footer.products" defaultMessage="Products" /></Title>

            <MenuItems>

              <MegaMenuList styl={{ marginBottom: 0 }}>
                <li><Link to={"/product-guarantee-link"} onClick={() => { }}><ProductItem locale={context.locale}><div><ImgContainerFooter> <img
                  src={guaranteeLink}
                  alt="Leapro Platform" />
                </ImgContainerFooter>
                </div><div><ListItemTitle locale={context.locale}><FormattedMessage id="app.footer.guaranteeLink" defaultMessage="GuaranteeLink" /></ListItemTitle><div></div></div></ProductItem> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>

                <li><Link to={"/product3"} onClick={() => { }}><ProductItem locale={context.locale}><div>
                  <ImgContainerFooter> <img
                    src={obConnector}
                    alt="Leapro Platform" />
                  </ImgContainerFooter>
                </div><div><ListItemTitle locale={context.locale}><FormattedMessage id="app.footer.obConnector" defaultMessage="OB Connector" /></ListItemTitle><div></div></div></ProductItem> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>

              </MegaMenuList>
              <MegaMenuList>
                <li><Link to={"/product-guarantee-app"} onClick={() => { }}><ProductItem locale={context.locale}><div>
                  <ImgContainerFooter> <img
                    src={guaranteeApp}
                    alt="Leapro Platform" />
                  </ImgContainerFooter>
                </div><div><ListItemTitle locale={context.locale}><FormattedMessage id="app.footer.guaranteeApp" defaultMessage="GuaranteeApp" /></ListItemTitle><div></div></div></ProductItem> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>

                <li><Link to={"/product-guarantee-app"} onClick={() => { }}><ProductItem locale={context.locale}><div>
                  <ImgContainerFooter> <img
                    src={financeApp}
                    alt="Leapro Platform" />
                  </ImgContainerFooter>
                </div><div><ListItemTitle locale={context.locale}><FormattedMessage id="app.footer.financeApp" defaultMessage="FinanceApp" /></ListItemTitle><div></div></div></ProductItem> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>




              </MegaMenuList>
            </MenuItems>
          </Right>

        </Container>
        <Bottom>
          <CopyRight>
            Leapro &#169; {new Date().getFullYear()}{" "}
            <FormattedMessage id="app.footer.allRightsReserved" defaultMessage="All Rights Reserved" />
          </CopyRight>


          <IconList>
            <a
              href="https://twitter.com/Leapro17"
              target="_blank"
              rel="noopener"
            >
              <img
                src={x}
                alt="Leapro Platform"
                style={{ width: "65%" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/leapro-io"
              target="_blank"
              rel="noopener"
            >
              <img
                src={linkedin}
                alt="Leapro Platform"
                style={{ width: "65%" }}
              />
            </a>
            <a
              href="https://www.facebook.com/people/Leapro/100086443704098/"
              target="_blank"
              rel="noopener"
            >
              <img
                src={facebook}
                alt="Leapro Platform"
                style={{ color: "white", width: "65%" }}
              />            </a>
          </IconList>
        </Bottom>
      </Section>
    );
};

export default Footer;
