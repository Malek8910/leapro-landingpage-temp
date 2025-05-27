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

  width: 30rem;
  /* margin: 0 1rem;
  margin-top: 1rem; */

  /* background-color: ${(props) => props.theme.body}; */

  border-radius: 20px;

  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 64em) {
      align-self: center;
      width: 20rem;

    }
  @media (max-width: 48em) {
    align-self: center;
    width: 20rem;


  }


  img {
    width: 100%;
    height: auto;

    @media (max-width: 64em) {
      align-self: center;
      width: 100%;
    }
    @media (max-width: 48em) {
      align-self: center;
      width: 100%;

    }
  }
  display: flex;
`;

const ProductTemplate2CoverVideo = ({ homeImg, homeImg_ar }) => {
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

export default ProductTemplate2CoverVideo;
