import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import { Link, matchRoutes, useLocation, useParams } from "react-router-dom";

import { debounce } from "./utilities/helpers";
import { FormattedMessage, useIntl } from "react-intl";
import { Context } from "./Wrapper";
import BackGroundImage from "../assets/banner2.png";
import BackGroundImage_ar from "../assets/banner2_ar.png";
import $ from "jquery"
import guaranteeApp from "../assets/guaranteeApp.svg";
import guaranteeLink from "../assets/guaranteeLink.svg";
import obConnector from "../assets/obConnector.svg";
import financeApp from "../assets/financeApp.svg";


const Section = styled.header`
  width: 100vw;
  /* background-color: ${(props) => props.theme.body}; */
  background-color: white;
  background-color: ${(props) => (props.scrolled ?props.theme.lightGray : "white")};

  border-bottom: 1px solid #D3D3D3;

  /* to v centerlaize the components and  */
  /* font-size: ${(props) => props.theme.fontmd}; */
  font-size: medium;

  /* font-weight: 500; */
  color: #303035;

  /* position: sticky; */
  /* top: 0; */
  z-index: 999;
  height: ${(props) => props.theme.navHeight};
  /* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15); */
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  // To hid the nav bar
  /* top: ${(props) => (props.visible ? "0" : "-100px")}; */
  /* transition: top 0.6s; */
  top: 0;


  /* direction: ${(props) => (props.direction == "rtl" ? "rtl" : "ltr")}; */
  /* direction: ${(props) => props.direction}; */

  /* background: url("http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg")
    no-repeat center center; */

  /* background: url(${BackGroundImage}) no-repeat center center; */
  /* direction: ${(props) => (props.direction == "rtl" ? "rtl" : "ltr")}; */

  background-size: cover;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  /*
    opacity: 0.5;
     top: 0;
  left: 0;
  bottom: 0;
  right: 0; 
  position: absolute;
  z-index: -1;
    -webkit-filter: grayscale(1); 
  filter: grayscale(1);*/

  /* font-family: ${(props) =>
    props.direction === "rtl" ? "HelveticaNeueLT Arabic 55 Roman" : "Poppins"}; */

    @media (max-width: ${(props) => props.theme.width}) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
      overflow: auto;
      width: auto;

      /* justify-content: flex-start; */
    }
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  
  align-items: center;

  //width: 85%;
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  height: 100%;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  

  .mobile {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.width}) {
    .desktop {
      display: none;
    }
    .mobile {
      /* width: 100%; */
      display: inline-block;
      /* justify-content: flex-start; */
    }
  }


`;

const Menu = styled.ul`
  display: flex;
  justify-content: left;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 100%;

  direction: ${(props) => props.direction};
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */


  @media (max-width: ${(props) => props.theme.width}) {
    /* 1024 px */
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    /* left: 0;
    right: 0; */

    left: ${(props) =>
    props.direction === "rtl"
      ? "0"
      : ""};
    
    right: ${(props) =>
    props.direction === "rtl"
      ? ""
      : "0"};

    bottom: 0;
    width: 100vw;
    height: calc(100vh - ${(props) => props.theme.navHeight});
    z-index: 50;
    background-color: rgba(${(props) => props.theme.bodyRgba}, 0.93);

    backdrop-filter: blur(2px);
    transform: ${(props) =>
    props.click ? "translateY(0) " : "translateY(1000%) "};

    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;

    /* touch-action: none; */
    justify-self: self-end;
    overflow: auto;

    /* background-color: red; */
    justify-content: flex-start;
    


  }

  //this to make the menu on top , not in  center:
  /* @media (max-width: 64em) {
    justify-content: flex-start;
    top: auto;
  } */
`;
const Menu1 = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  /* width: 100%; */
  height: 100%;

  direction: ${(props) => props.direction};
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */


  @media (max-width: ${(props) => props.theme.width}) {
    /* 1024 px */
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: calc(100vh - ${(props) => props.theme.navHeight});
    z-index: 50;
    background-color: rgba(${(props) => props.theme.bodyRgba}, 0.93);

    backdrop-filter: blur(2px);
    transform: ${(props) =>
    props.click ? "translateY(0) " : "translateY(1000%) "};

    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;

    /* touch-action: none; */
    justify-self: self-end;
    overflow: auto;

    /* background-color: red; */

    align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: max-content;
  top: revert-layer;

  min-width: -webkit-fill-available;
        flex-direction: row;

  }

  //this to make the menu on top , not in  center:
  /* @media (max-width: 64em) {
    justify-content: flex-start;
    top: auto;
  } */
`;


const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  /* font-weight: 630; */
  /* font-size: ${(props) => props.theme.fontmd}; */
  font-size: large;
  height: 100%;
  align-content: center;
  font-size: 16px;
  font-weight: bold;
  font-family: "IBM Plex Sans Arabic", sans-serif;

  a {
    color: ${(props) => props.theme.text};

    &:hover {
      color:   ${(props) => props.theme.brandBlue};;
      font-weight: bold;
    }

  }



  /* &:hover::after  {
    width: 100%;
  } */
  @media (max-width: ${(props) => props.theme.width}) {
    margin: 1rem 0;
    height: auto;
    &::after {
      display: none;
    }
  }
`;

const DropButton = styled.button`
  /* font-size: large; */

  padding: 0 1rem;
  color: ${(props) => (props.isOpen ? props.theme.brandBlue : props.theme.text)};
  cursor: pointer;
  /* font-weight: bold; */
  background-color: inherit;
  border: none;
  outline: none;

  height: 100%;
  align-content: center;

  /* font-size: large; */
  font-size: 16px;

  font-weight: bold;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  
  :hover{
    color:   ${(props) => props.theme.brandBlue};
    font-weight: bold;
    ;
  }

 


  /* @media (max-width: 64em) {
    margin: 1rem 0;
    height: 100%;

    &::after {
      display: none;
    }
  } */
`;

const SubMenu = styled.div`
  ////// &&&& to show the submenu
  display: none;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  position: absolute;
  background-color: ${(props) => props.theme.lightGray};;
  /* border-radius: 0 0 0 50px; */

  border-radius: ${(props) => (props.locale === 'ar' ? "0 0 50px 0;" : "0 0 0 50px;")};


  /* min-width: 100%; */
  width: 100vw;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: ${(props) => props.theme.navHeight};

  left: 0;
  
  padding-bottom: 20px;
  a {
    float: none;
    /* color: black; */
    color: ${(props) => props.theme.text};

    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    /* font-weight: 450; */
    font-size: ${(props) => props.theme.fontsm};

    
  }
  

  a:hover {
    background-color: #ddd;

    
  }

  span {
    /* text-transform: uppercase; */
    /* font-family: "Akaya Telivigala", cursive; */
  }

  .text-1 {
    font-size: ${(props) => props.theme.fontxs};
    direction: ${(props) => props.direction};
    line-height: 1.6;
  }
  .text-2 {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => props.theme.brandBlue};;;
    /* font-weight: 450; */
  }

  @media (max-width: ${(props) => props.theme.width}) {
    top: auto;
    padding-bottom: 100px;
    width: 100%;
    /* border-radius: 0 50px 0px 40px; */

    border-radius: ${(props) => (props.locale === 'ar' ? "50px 0px 0px 0px;" : "0 50px 0px 0px;")};

    &::after {
      display: none;
    }
  }
`;

const SubMenuItem = styled.li`
  float: left;
  overflow: hidden;
  
  height: 100%;
  align-content: center;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */


  &:hover ${SubMenu} {

 
    display: block;
  }

  &:hover ${SubMenu} {
    display: block;
  }
  @media (max-width: ${(props) => props.theme.width}) {
    height: 9%;
    &::after {
      display: none;
    }
  }

`;

const MenuItemNew = styled.li`
  /* margin-left: 8px; */
  color: ${(props) => props.theme.text};
  cursor: pointer;
  margin-left: auto;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 4px;
    /* background: ${(props) => props.theme.text}; */
    /* background: ${(props) => props.theme.brandBlue};;; */

    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.width}) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: ${(props) => props.theme.text};

  /* position: absolute; */
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  @media (max-width: ${(props) => props.theme.width}) {
    /* 1024 px */
    display: flex;
  }

  &::after,
  &:before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};

    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }

  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;


//to remove the  focus on select element on change
var c = 0;
$("select").bind('click', function (event) {
  event.stopPropagation();
  if (c++ % 2 == 1) {
    console.log(c);
    $(this).blur();
  }
});

$('html').click(function () {
  if ($('select').is(':focus'))
    c = 1;
  else
    c = 0;
});



const MegaMenu = styled.div`
  margin: auto;
  width: ${(props) => props.theme.width}; 
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
  // background: "red";
  box-sizing: border-box;

  display: ${(props) =>
    props.isOpen
      ? "flex"
      : "none"};

  

  @media (max-width: ${(props) => props.theme.width}) {
    display: flex;
    flex-direction: column;
    padding-bottom: 180px;
    margin-bottom: 50px;
    padding-top: 20px;
    align-items: baseline;
    width: 100%;
    /* &::after {
      display: none;
    } */
  } 
`;

const MegaMenuTitle = styled.div`
  /* margin: auto; */
  // background: "yellow",
  vertical-align: top;
  width: 250px;
  /* padding-right: 60px; */

  padding-right: ${(props) => (props.locale === 'ar' ? "" : "60px")};
  padding-left: ${(props) => (props.locale === 'ar' ? "60px" : "0px")};

  border-right: ${(props) => (props.locale === 'ar' ? "0px" : "1px solid #D3D3D3")};
  border-left: ${(props) => (props.locale === 'ar' ? "1px solid #D3D3D3" : "0px")};

  height: 200px;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  h2 {

    color: "black";
    font-family: "IBM Plex Sans Arabic Regular";
  }
  
  @media (max-width: ${(props) => props.theme.width}) {
    width: 250px;
    padding-bottom: 80px;
    padding-bottom: 10px;
    padding-top: 10px;

    border-right: 0px;
    border-left: 0px;
    
    height: 100%;
    margin-top: 15px;

    /* padding-left: 32px; */

    padding-right: ${(props) => (props.locale === 'ar' ? "32px" : "0px")};
    padding-left: ${(props) => (props.locale === 'ar' ? "0px" : "32px")};
    
    &::after {
      display: none;
    }
  } 
`;


const MegaMenuList = styled.ul`
  /* padding-right: 30px;  
  padding-left: 30px; */
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  /* width: 300px; */
  vertical-align: top;
  line-height: 24px;

  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  a {
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.fontsm};
    /* justify-content: space-between; */
  }

  a:hover {


    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => props.theme.brandBlue};;;
    background: white;
    border-radius: .5rem;
    transition: top 0.9s; 
    }
  a:hover::after  {
      width: 100%;
    }

    li {
      /* display: flex;
      align-items: center; */
    }
  
  @media (max-width: ${(props) => props.theme.width}) {
    margin-top: 10px;

    margin-left: 50px;
    margin-right: 50px;
    flex-direction: column;

    /* padding-left: 50px; */
    width: -webkit-fill-available;


  } 
`;


const ListTitle = styled.div`
  /* text-decoration: underline; */
  color: ${(props) => props.theme.lightGrayText};;
  padding-bottom: 20px;
  /* font-size: large; */
  font-size: 20px;

  font-weight: 450;

  /* padding-right: 16px; */

  padding-right: ${(props) => (props.locale === 'ar' ? "16px" : "0px")};

  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

`;


const ListItemTitle = styled.span`
  /* text-decoration: underline; */
  /* font-size: ${(props) => props.theme.fontmd}; */
  /* font-size: medium; */
  font-size: 15.5px;
  /* font-size: ${(props) => props.theme.fontmd}; */

  font-weight: 420;

  text-align: ${(props) => (props.locale === 'ar' ? "-webkit-right" : "-webkit-left")};

  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  

`;

const ListItemSubTitle = styled.span`
  /* text-decoration: underline; */
  font-size: small;


  text-align: ${(props) => (props.locale === 'ar' ? "-webkit-right" : "-webkit-left")};
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

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

const Icon2 = styled.i`
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

  margin-left: 4px;
`;


const ProductItem = styled.div`
  /* text-decoration: underline; */
  display: flex;
  align-items: center;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  text-align: ${(props) => (props.locale === 'ar' ? "-webkit-right" : "-webkit-left")};
`;

const ProductIcon = styled.div`
  /* text-decoration: underline; */
  padding: 10px;
    margin: 10px;
    background: #D3E1FB;
    border-radius: 5px;
`;



const ImgContainerFooter = styled.div`
  /* width: 28rem; */
  flex: 70%;
  /* margin-right: 16px; */
  /* background-color: ${(props) => props.theme.body}; */

  width: 3rem;

  display: flex;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  padding: 10px;
    /* margin: 10px; */
    /* background: white;
    border-radius: 5px; */

  img {
    /* width: 75%; */
    /* height: 50px; */
    width: 3em;

  }
  
  @media (max-width: ${(props) => props.theme.width}) {
    /* margin-left: 16px;
    margin-right: 16px; */
    /* width: 12rem; */

    /* margin-bottom: 40px; */
  }
`;

const SubMenuCaption = styled.h1`
  /* text-decoration: underline; */

  background-image: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(90deg, #0693E3, #0F56C8, #1F366B)"
      : "linear-gradient(90deg, #1F366B, #0F56C8, #0693E3)"};
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`;



const Navigation = (prop) => {
  const params = useParams();

  //console.log(params);

  const [click, setClick] = useState(false);

  // new:
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // new:
  const [visible, setVisible] = useState(true);
  const [visibleMenu, setVisibleMenu] = useState(true);
  const intl = useIntl();

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  const handleScroll = debounce(() => {
    // find current scroll position

    const currentScrollPos = window.pageYOffset;
    // set state based on location info (explained in more detail below)

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
      currentScrollPos < 10
    );
    // set state to new scroll position

    setPrevScrollPos(currentScrollPos);
    setScrolled(currentScrollPos > 0);
  }, 100);

  const [scrolled, setScrolled] = useState(false);


  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuItemClick = () => {
    setOpenMenu(null);
    setClick(false);
  };

  // new useEffect:
  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  // new useEffect:
  useEffect(() => {
    setOpen(false); // Close the navigation panel
  }, [pathname]);


  const context = React.useContext(Context);

  //If the current pathname is /lg_request/* I will get path /members/:id


  const routes = [{ path: "/lg_request/*" }, { path: "/product-finance-app/*" }]

  const location = useLocation();
  let route;
  console.log("-----");

  console.log(location);
  console.log(routes);

  if (location !== null)
    route = matchRoutes(routes, location);

  console.log("route");

  console.log(route)

  let found = false;
  if (route !== null)
    for (var i = 0; i < route.length; i++) {
      if (route[i].pathnameBase === "/lg_request") {
        console.log("found");
        found = true;
        break;
      }

      if (route[i].pathnameBase === "/finance") {
        console.log("found");
      }
    }

    const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";



  if (found) {
    return null;
  } else


    return (
      <Section
        id="navigation"
        visible={visible}
        scrolled={scrolled}
      // direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
      /* backgroundimage={
        context.locale.startsWith("ar") ? { BackGroundImage_ar } : { BackGroundImage }
      } */
      >
        <NavBar>
          <Logo />
          <HamburgerMenu click={click} onClick={() => setClick(!click)}>
            &nbsp;
          </HamburgerMenu>

          <Menu click={click}
            direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}>


            
            {/* ##########  Profissional Services */}
            <SubMenuItem onMouseOver={() => setOpenMenu('services')} onMouseLeave={() => setOpenMenu(null)}>
              <DropButton onClick={() => setOpenMenu(openMenu === 'services' ? null : 'services')} isOpen={openMenu === 'services'}>
                <FormattedMessage
                  id="app.navigation.services"
                  defaultMessage="services"
                /><Icon2>keyboard_arrow_down</Icon2>
              </DropButton>

              <SubMenu locale={context.locale}>
                <MegaMenu isOpen={openMenu === 'services'}>
                  <MegaMenuTitle locale={context.locale}>
                    <SubMenuCaption direction={direction}><FormattedMessage
                      id="app.navigation.services"
                      defaultMessage="services"
                    /></SubMenuCaption>
                    <span className="text-1"><FormattedMessage id="app.navigation.discoverProfessionalServices" defaultMessage="Discover our professional services for business and technology transformation." /></span>
                  </MegaMenuTitle>

                  <MegaMenuList>
                    {/* <ListTitle>DATA EXCHANGE</ListTitle> */}
                    <li><Link to={"/service-bt-transformation"} onClick={handleMenuItemClick}><ProductItem locale={context.locale}><div>
                      {/* <ImgContainerFooter> <img
                        src={guaranteeApp}
                        alt="Leapro Platform" />
                      </ImgContainerFooter> */}
                    </div><div>
                        <ListItemTitle locale={context.locale}><FormattedMessage id="app.services.btTransformation" defaultMessage="Business Technology Transformation" /></ListItemTitle><div><ListItemSubTitle locale={context.locale}><FormattedMessage id="app.navigation.transformationStrategy" defaultMessage="Transformation strategy that integrates business and technology" /></ListItemSubTitle></div></div></ProductItem> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                 </MegaMenuList>

                  <MegaMenuList>
                    <li><Link to={"/service-customized-solutions"} onClick={handleMenuItemClick}><ProductItem locale={context.locale}><div>
                      {/* <ImgContainerFooter> <img
                        src={guaranteeLink}
                        alt="Leapro Platform" />
                      </ImgContainerFooter> */}
                      </div><div>
                        <ListItemTitle locale={context.locale}><FormattedMessage id="app.services.customizedSolutions" defaultMessage="Customized Solutions" /></ListItemTitle><div><ListItemSubTitle locale={context.locale}><FormattedMessage id="app.navigation.tailoredEnterpriseArchitecture" defaultMessage="Tailored enterprise architecture and implementation align technology with business goals." /></ListItemSubTitle></div></div></ProductItem> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>

                  </MegaMenuList>
                </MegaMenu>
              </SubMenu>
            </SubMenuItem>


            {/* ##########  Solutions */}
            <SubMenuItem onMouseOver={() => setOpenMenu('solutions')} onMouseLeave={() => setOpenMenu(null)}>
              <DropButton onClick={() => setOpenMenu(openMenu === 'solutions' ? null : 'solutions')} isOpen={openMenu === 'solutions'}>
                <FormattedMessage
                  id="app.navigation.solutions"
                  defaultMessage="solutions"
                /><Icon2>keyboard_arrow_down</Icon2>
              </DropButton>

              <SubMenu locale={context.locale}>
                <MegaMenu isOpen={openMenu === 'solutions'}>
                  <MegaMenuTitle locale={context.locale}>
                    <SubMenuCaption direction={direction}><FormattedMessage
                      id="app.navigation.solutions"
                      defaultMessage="solutions"
                    />
                    </SubMenuCaption><span className="text-1"><FormattedMessage id="app.navigation.discoverSolutions" defaultMessage="Discover our range of solutions, expertly designed, developed, and currently in progress." /></span>
                  </MegaMenuTitle>



                  <MegaMenuList >
                    <ListTitle><FormattedMessage id="app.navigation.integration" defaultMessage="Integration" /></ListTitle>
                    <li><Link to={"/solution-b2b-api-gateway"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.b2bApiGateway" defaultMessage="B2B API Gateway" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                    <li><Link to={"/solution-b2b-client-connector"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.b2bClientConnector" defaultMessage="B2B Client Connector" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                    <li><Link to={"/solution-b2b2c-infrastructure"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.b2b2cInfrastructure" defaultMessage="B2B2C Infrastructure" /></ListItemTitle>{context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                  </MegaMenuList>
                  <MegaMenuList>
                    <ListTitle><FormattedMessage id="app.navigation.openBanking" defaultMessage="Open Banking" /></ListTitle>
                    <li><Link to={"/solution-ob-ttp-enablement"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.tppEnablement" defaultMessage="TPP Enablement" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link> </li>
                    <li><Link to={"/solution-ob-streamline-lg-issuance"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.streamlineLgIssuance" defaultMessage="Streamline LG Issuance" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                    <li><Link to={"/solution-ob-streamline-lg-request"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.streamlineLgRequests" defaultMessage="Streamline LG Requests" /></ListItemTitle>  {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                    <li><Link to={"/solution-ob-streamline-customer-onboarding"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.streamlineCustomerOnboarding" defaultMessage="Streamline Customer Onboarding" /></ListItemTitle>  {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                    <li><Link to={"/solution-ob-streamline-financial-verification"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.streamlineFinancialVerification" defaultMessage="Streamline Financial Verification" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                    <li><Link to={"/solution-ob-streamline-bank-account-verification"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.streamlineBankAccountVerification" defaultMessage="Streamline Bank-Account Verification" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                    <li><Link to={"/solution-ob-accelerate-finance-decisioning"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.accelerateFinanceDecisioning" defaultMessage="Accelerate Finance Decisioning" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                    <li><Link to={"/solution-ob-payment-from-bank-account"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.paymentFromBankAccount" defaultMessage="Payment From Bank Account" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                  </MegaMenuList>
                  <MegaMenuList>
                    <ListTitle><FormattedMessage id="app.navigation.businessApplications" defaultMessage="Business Applications" /></ListTitle>
                    <li><Link to={"/solution-business-apps-cash-flow-management"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.cashFlowManagement" defaultMessage="Cash Flow Management" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link> </li>
                    <li><Link to={"/solution-business-apps-bank-reconciliation"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.bankReconciliation" defaultMessage="Bank Reconciliation" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                    <li><Link to={"/solution-business-apps-analytics-and-insights"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.analyticsAndInsights" defaultMessage="Analytics & Insights" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                    <li><Link to={"/solution-business-apps-atm-replenishment"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.solutions.atmReplenishment" defaultMessage="ATM Replenishment" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>

                  </MegaMenuList>

                </MegaMenu>
              </SubMenu>
            </SubMenuItem>


            {/* ##########  Products */}
            <SubMenuItem onMouseOver={() => setOpenMenu('products')} onMouseLeave={() => setOpenMenu(null)}>
              <DropButton onClick={() => setOpenMenu(openMenu === 'products' ? null : 'products')} isOpen={openMenu === 'products'}>
                <FormattedMessage
                  id="app.navigation.products"
                  defaultMessage="products"
                /><Icon2>keyboard_arrow_down</Icon2>
              </DropButton>

              <SubMenu locale={context.locale}>
                <MegaMenu isOpen={openMenu === 'products'}>
                  <MegaMenuTitle locale={context.locale}>
                    <SubMenuCaption direction={direction}><FormattedMessage
                      id="app.navigation.products"
                      defaultMessage="products"
                    /></SubMenuCaption>
                    <span className="text-1"><FormattedMessage id="app.navigation.exploreProducts" defaultMessage="Explore our cutting-edge products, SaaS solutions, and platforms currently in development." /></span>
                  </MegaMenuTitle>

                  <MegaMenuList>
                    {/* <ListTitle>DATA EXCHANGE</ListTitle> */}
                    <li><Link to={"/product-guarantee-app"} onClick={handleMenuItemClick}><ProductItem locale={context.locale}><div>
                      <ImgContainerFooter> <img
                        src={guaranteeApp}
                        alt="Leapro Platform" />
                      </ImgContainerFooter>
                    </div><div>
                        <ListItemTitle locale={context.locale}><FormattedMessage id="app.products.guaranteeApp" defaultMessage="GuaranteeApp" /></ListItemTitle><div><ListItemSubTitle locale={context.locale}><FormattedMessage id="app.products.guaranteeApp.caption" defaultMessage="Bank guarantees management for applicants" /></ListItemSubTitle></div></div></ProductItem> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>




                    <li><Link to={"/product-ob-client-connector"} onClick={handleMenuItemClick}><ProductItem locale={context.locale}><div>
                      <ImgContainerFooter> <img
                        src={obConnector}
                        alt="Leapro Platform" />
                      </ImgContainerFooter>

                    </div><div><ListItemTitle locale={context.locale}><FormattedMessage id="app.products.obConnector" defaultMessage="OB Client Connector" /></ListItemTitle><div><ListItemSubTitle locale={context.locale}><FormattedMessage id="app.products.obClientConnector.caption" defaultMessage="Connects your business to Open Banking Ecosystem" /></ListItemSubTitle></div></div></ProductItem> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                  </MegaMenuList>
                  <MegaMenuList>
                    <li><Link to={"/product-guarantee-link"} onClick={handleMenuItemClick}><ProductItem locale={context.locale}><div>
                      <ImgContainerFooter> <img
                        src={guaranteeLink}
                        alt="Leapro Platform" />
                      </ImgContainerFooter></div><div>
                        <ListItemTitle locale={context.locale}><FormattedMessage id="app.products.guaranteeLink" defaultMessage="GuaranteeLink" /></ListItemTitle><div><ListItemSubTitle locale={context.locale}><FormattedMessage id="app.products.guaranteeLink.caption" defaultMessage="Bank guarantees management for beneficiaries" /></ListItemSubTitle></div></div></ProductItem> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>

                        <li><Link to={"/product-finance-app"} onClick={handleMenuItemClick}><ProductItem locale={context.locale}><div>
                      <ImgContainerFooter> <img
                        src={financeApp}
                        alt="Leapro Platform" />
                      </ImgContainerFooter></div><div>
                        <ListItemTitle locale={context.locale}><FormattedMessage id="app.products.financeApp" defaultMessage="FinanceApp" /></ListItemTitle><div><ListItemSubTitle locale={context.locale}><FormattedMessage id="app.products.financeApp.caption" defaultMessage="Get quick, easy and sustainable access to finance" /></ListItemSubTitle></div></div></ProductItem> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>

                  </MegaMenuList>
                </MegaMenu>
              </SubMenu>
            </SubMenuItem>

            {/* ##########  Company */}
            <SubMenuItem onMouseOver={() => setOpenMenu('resources')} onMouseLeave={() => setOpenMenu(null)}>
              <DropButton onClick={() => setOpenMenu(openMenu === 'resources' ? null : 'resources')} isOpen={openMenu === 'resources'}>
                <FormattedMessage
                  id="app.navigation.resources"
                  defaultMessage="Resources"
                />
                <Icon2>keyboard_arrow_down</Icon2>
              </DropButton>
              <SubMenu locale={context.locale}>
                <MegaMenu isOpen={openMenu === 'resources'}>
                  <MegaMenuTitle locale={context.locale}>
                    <SubMenuCaption direction={direction}><FormattedMessage
                      id="app.navigation.resources"
                      defaultMessage="resources"
                    /></SubMenuCaption>
                    <span className="text-1"><FormattedMessage id="app.navigation.aboutLeaproText" defaultMessage="About Leapro" /></span>
                  </MegaMenuTitle>
                  <MegaMenuList>
                    <ListTitle><FormattedMessage id="app.navigation.company" defaultMessage="Company" /></ListTitle>

                    <li><Link to={"/about"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.navigation.aboutLeapro" defaultMessage="About Leapro" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                    <li><Link to={"/contact-us"} onClick={handleMenuItemClick}  ><ListItemTitle locale={context.locale}><FormattedMessage id="app.navigation.joinOurTeam" defaultMessage="Join Our Team" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                    <li><Link to={"/contact-us"} onClick={handleMenuItemClick}  ><ListItemTitle locale={context.locale}><FormattedMessage id="app.navigation.contactUs" defaultMessage="Contact Us" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                  </MegaMenuList>
                  <MegaMenuList>
                    <ListTitle><FormattedMessage id="app.navigation.content" defaultMessage="Content" /></ListTitle>
                    <li><Link to={"/blog"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.navigation.blogText" defaultMessage="Blog" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>
                    <li><Link to={"/commingSoon"} onClick={handleMenuItemClick} ><ListItemTitle locale={context.locale}><FormattedMessage id="app.navigation.eventsResourcesText" defaultMessage="Events" /></ListItemTitle> {context.locale === 'ar' ? <Icon style={{ "-webkit-transform": "scaleX(-1)", transform: "scaleX(-1)" }}>chevron_right</Icon> : <Icon>chevron_right</Icon>}</Link></li>

                  </MegaMenuList>
                </MegaMenu>
              </SubMenu>
            </SubMenuItem>

            {/* <MenuItem onClick={() => { setClick(!click); }}>
              <Link to={"/blog"}>
                <FormattedMessage
                  id="app.navigation.blog"
                  defaultMessage="blog"
                />
                
              </Link>
            </MenuItem> */}

            {/* </div> */}

            {/* <div style={{ display:"inherit"}}> */}


          </Menu>



          <Menu1 click={click}>
            <MenuItemNew>

              <select value={context.locale} onChange={context.selectLanguage} style={{
                gridColumnGap: "1rem", backgroundColor: "#EAEDF6",
                // fontFamily: "IBM Plex Sans Arabic Regular",
                fontSize: "15px",
                marginRight: "32px",
                border: 0,
                borderRight: "14px solid transparent",
                // This line disable the blue border
                boxShadow: 'none',
                outline: "0px none #fff !important"
                , borderRadius: ".5rem", alignItems: "center", padding: "8px 8px", mainselection: {
                  overflow: "hidden"
                  , "width": "350px"
                }, focus: {
                  background: "#fff", outline: "none", boxShadow: "none"
                }
              }}>


                <option value="en" >EN</option>
                <option value="ar">العربية</option>


              </select>
            </MenuItemNew>
            {/* <a data-language="ar" lang="ar" href="https://www.tarabut.com/ar/">العربية</a> */}
            {/* <Link onClick={context.selectLanguage}>العربية</Link> */}
            <Link to={"/contact-us"} onClick={() => { setClick(!click); }}><Button text={intl.formatMessage({ id: "app.home.contactUs", defaultMessage: "Contact us" })}></Button></Link>

          </Menu1>

        </NavBar>
      </Section>
    );
};

export default Navigation;
