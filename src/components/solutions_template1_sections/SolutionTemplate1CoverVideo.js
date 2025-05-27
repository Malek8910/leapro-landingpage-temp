import React from "react";
import styled from "styled-components";

// import homeImg from "../assets/Home-2.png";

import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
const ImgContainer = styled.div`
  /* width: 100%;

  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  } */

  width: 20rem;
  /* margin: 0 1rem;
  margin-top: 1rem; */

  /* background-color: ${(props) => props.theme.body}; */

  border-radius: 20px;
  justify-content: space-around;

  &:hover {
    transform: scale(1.1);
  }
  
  img {
    width: 100%;
    height: auto;

    @media (max-width: 64em) {
      justify-content: center;
      align-content: center;

    width: 85%;
    }
    @media (max-width: 48em) {
      width: 90%;
      justify-content: center;
      align-content: center;

    }
  }
  display: flex;
`;

const SolutionTemplate1CoverVideo = ({ homeImg, homeImg_ar }) => {
  const context = React.useContext(Context);

  return (
    <ImgContainer>
      {context.locale.startsWith("ar") ? (
        <img src={homeImg_ar} alt="Leapro Platform" />
      ) : (
        <img src={homeImg} alt="Leapro Platform" />
      )}
    </ImgContainer>
  );
};

export default SolutionTemplate1CoverVideo;
