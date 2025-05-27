import React from "react";
import styled from "styled-components";

// import homeImg from "../assets/Home-2.png";
import homeImg from "../assets/home.svg";
import homeImg_ar from "../assets/home_ar.svg";
import { FormattedMessage } from "react-intl";
import { Context } from "./Wrapper";
const ImgContainer = styled.div`
  /* width: 100%;

  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  } */

  width: 30rem;
  margin: 0 1rem;
  margin-top: 1rem;

  /* background-color: ${(props) => props.theme.body}; */

  border-radius: 20px;
  /* transform: scale(1.1); */

/* 
  background-image: url(${homeImg});
  background-position: bottom; 
  background-repeat: no-repeat; */

  @media (max-width: 82em) {
    width: 30rem;
  }

  @media (max-width: 64em) {
    width: 30rem;
  }

  @media (max-width: 48em) {
    width: 20rem;
  }
  @media (max-width: 38em) {
    width: 20rem;
  }

  img {
    width: 100%;
    height: auto;
  }
  display: flex;

  &:hover {
    transform: scale(1.1);
  }
`;


const AnimationCoontainer = styled.div`

  /* position: absolute; */
  /* top: 50%;
  left: 50%; */
  /* margin-left: -64.5px;
  margin-top: -85.5px; */
`;

const Picture = styled.div`

  animation: float 3s ease-out infinite;
  @keyframes float {
    50% {
       transform: translate(0, 20px);
    }
  }
`;





const CoverVideo = () => {
  const context = React.useContext(Context);

  return (
    <ImgContainer>



      {/* <AnimationCoontainer>
        <Picture> */}
      {context.locale.startsWith("ar") ? (
        <img src={homeImg_ar} alt="Leapro Platform" />
      ) : (
        <img src={homeImg} alt="Leapro Platform" />
      )}

      {/* </Picture>
      </AnimationCoontainer> */}
    </ImgContainer>
  );
};

export default CoverVideo;
