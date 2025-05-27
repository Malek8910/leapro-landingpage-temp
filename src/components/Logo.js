import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//import homeImg from "../assets/Logo-6+.png";
import homeImg from "../assets/logo-blue-final.png";
import homeImg_ar from "../assets/logo-blue-7-ar.png";
import homeImg_White from "../assets/logo-blue-final_white.png";
import homeImg_White_ar from "../assets/logo-blue-final_white.png";

import { Context } from "./Wrapper";

const ImgContainer = styled.div`
  width: 10rem;

  /* margin-right: 8px; */
  /* background-color: ${(props) => props.theme.body}; */

  /* @media (max-width: ${(props) => props.theme.width}) {
    width: 12rem;
  } */
  @media (max-width: ${(props) => props.theme.width}) {
    margin-left: 16px;
    margin-right: 16px;

    width: 10.5em;
  }

  img {
    width: 95%;
    height: auto;

    @media (max-width: ${(props) => props.theme.width}) {
      width: 100%;
    }

  }
  display: flex;

  &:hover {
    transform: scale(1.1);

    @media (max-width: ${(props) => props.theme.width}) {
      transform: none;
    }
  }
`;


const ImgContainerFooter = styled.div`
  /* width: 28rem; */
  flex: 70%;
  margin-right: 16px;
  /* background-color: ${(props) => props.theme.body}; */


  @media (max-width: ${(props) => props.theme.width}) {
    /* margin-left: 16px;
    margin-right: 16px; */
    width: 12rem;

    margin-bottom: 40px;
  }

  img {
    /* width: 75%; */
    /* height: 50px; */
    width: 10em;

  }
  display: flex;

  &:hover {
    transform: scale(1.1);
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: auto; */
  @media (max-width: ${(props) => props.theme.width}) {
    /* width: 100%; */
    width: 100%;
  }
`;

const Logo = (props) => {
  const context = React.useContext(Context);

  return (
    <div>
      {props.footer ? (

        <ImgContainerFooter>
          <Link to="/" onClick={() => { }} >
            {props.homeImgWhite ? (
              // <img src={homeImg_White} alt="Leapro"></img>

              context.locale.startsWith("ar") ? (
                <Left>
                  <img
                    src={homeImg_White_ar}
                    alt="Leapro Platform"
                  // style={{ width: "35%", alignSelf: "baseline" }}
                  />
                </Left>
              ) : (
                <Left>
                  <img
                    src={homeImg_White}
                    alt="Leapro Platform"
                  // style={{ width: "35%", alignSelf: "baseline" }}
                  />
                </Left>
              )
            ) : // <img src={homeImg} alt="Leapro"></img>

              context.locale.startsWith("ar") ? (
                <img src={homeImg} alt="Leapro Platform" />
              ) : (
                <img src={homeImg} alt="Leapro Platform" />
              )}
          </Link>
        </ImgContainerFooter>

      ) : (

        <ImgContainer>
          <Link to="/" onClick={() => { }} >
            {props.homeImgWhite ? (
              // <img src={homeImg_White} alt="Leapro"></img>

              context.locale.startsWith("ar") ? (
                <Left>
                  <img
                    src={homeImg_White_ar}
                    alt="Leapro Platform"
                    style={{ width: "35%", alignSelf: "baseline" }}
                  />
                </Left>
              ) : (
                <Left>
                  <img
                    src={homeImg_White}
                    alt="Leapro Platform"
                    style={{ width: "35%", alignSelf: "baseline" }}
                  />
                </Left>
              )
            ) : // <img src={homeImg} alt="Leapro"></img>

              context.locale.startsWith("ar") ? (
                <img src={homeImg} alt="Leapro Platform" />
              ) : (
                <img src={homeImg} alt="Leapro Platform" />
              )}
          </Link>
        </ImgContainer>

      )}
    </div>
  );
};

export default Logo;
