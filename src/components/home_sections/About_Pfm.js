import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Themes";
import homeImg from "../../assets/Pfm_screen2.png";
import homeImg_ar from "../../assets/Pfm_screen2_ar.png";


import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";

const Section = styled.section`
  min-height: 130vh;
  /* min-height: 70vh; */

  width: 100%;
  /* background-color: ${(props) => props.theme.text}; */

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  direction: ${(props) => props.direction};

  /* margin-top: ${(props) => props.theme.navHeight}; */

  background: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(25deg,transparent 50%,transparent 50%,white 90%,#f0f0f0 100%);"
      : "linear-gradient(-25deg,transparent 50%,transparent 50%,white 90%,#f0f0f0 100%);"};

  background-size: 100% 100%;

  @media (max-width: 95em) {
    min-height: 130vh;
  }
  @media (max-width: 75em) {
    min-height: 120vh;
  }
  @media (max-width: 38em) {
    min-height: 100vh;
  }
`;

const Container = styled.div`
  width: 80%; //section content wdith
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  /* align-items: center; */

  /* flex-flow: column; */

  @media (max-width: 95em) {
    width: 85%;
    flex-flow: column;
    align-items: center;

    /* flex-direction: column;
    & > *:last-child {
      width: 80%;
    } */
  }
  @media (max-width: 75em) {
    width: 90%;
    /* flex-direction: column; */
  }

  @media (max-width: 64em) {
    width: 90%;
    flex-direction: column;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
    & > *:last-child {
      width: 90%;
    }
  }

  @media (max-width: 24em) {
    width: 90%;
    flex-direction: column;
    & > *:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  /* width: 50%; */
  height: 100%;
  /* min-height: 40vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 95em) {
    width: 75%;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    width: 40vh;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  margin: 0 auto;
  width: 90%;
  padding-top: 8rem;

  align-self: flex-start;
  /* color: #002856; */

  @media (max-width: 95em) {
    font-size: ${(props) => props.theme.fontxxl};
    padding-top: 10rem;

    width: 100%;
  }

  @media (max-width: 75em) {
    padding-top: 8rem;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    text-align: center;
    padding-top: 8rem;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  margin: 1rem auto;
  width: 90%;
  font-weight: 400;
  align-self: flex-start;
  padding-bottom: 2rem;

  @media (max-width: 95em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    text-align: center;
    padding-bottom: 2rem;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: rgba(${(props) => props.theme.textRgba}, 0.6);
  margin: 1rem auto;
  width: 80%;
  font-weight: 400;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
    text-align: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
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

  width: 60rem;
  margin: 0 1rem;
  padding-bottom: 3rem;
  cursor: pointer;
  padding-top: 4rem;

  /* border-radius: 20px; */

  @media (max-width: 100em) {
    width: 55rem;
  }

  @media (max-width: 95em) {
    padding-top: 0rem;

    width: 60rem;
  }

  @media (max-width: 75em) {
    width: 60rem;
  }

  @media (max-width: 64em) {
    width: 55rem;
  }
  @media (max-width: 54em) {
    width: 48rem;
  }

  @media (max-width: 48em) {
    width: 43rem;
  }
  @media (max-width: 38em) {
    width: 22rem;
  }

  img {
    width: 100%;
    height: auto;
  }
  display: flex;
`;

const About_Pfm = () => {
  const context = React.useContext(Context);

  const openFullscreen = () => {
    // document.getElementById("img")?.requestFullscreen();
    //var src = document.getElementById("img");

    //console.log("called");
    var newDiv = document.getElementById("fullpage");

    //const newDiv = document.createElement("div");

    newDiv.style.display = "block";
    newDiv.style.position = "absolute";

    // newDiv.style.backgroundImage = `url(${homeImg})`;

    newDiv.style.backgroundImage = context.locale.startsWith("ar")
      ? `url(${homeImg_ar})`
      : `url(${homeImg})`;

    newDiv.style.backgroundRepeat = "no-repeat no-repeat";
    newDiv.style.backgroundPosition = "center center";

    newDiv.style.backgroundSize = "contain";
    newDiv.style.width = "100%";

    newDiv.style.height = "100%";
    newDiv.style.position = "fixed";
    newDiv.style.zIndex = "10000";
    newDiv.style.top = "0";
    newDiv.style.left = "0";
    newDiv.style.cursor = "zoom-out";

    newDiv.style.backgroundColor = "white";
    //newDiv.style.opacity = "0.93";
    newDiv.style.transition = "all 0.3s ease";

    newDiv.addEventListener("click", function () {
      newDiv.style.display = "none";
      //console.log("called 1");
    });

    //newDiv.appendTo("body");
    //document.body.appendChild(newDiv);

    // document
    //   .getElementById("test")
    //   .css({
    //     background: { homeImg },
    //     backgroundSize: "contain",
    //     width: "100%",
    //     height: "100%",
    //     position: "fixed",
    //     zIndex: "10000",
    //     top: "0",
    //     left: "0",
    //     cursor: "zoom-out",
    //   })
    //   .click(function () {
    //     this.remove();
    //   })
    //   .appendTo("body");
  };

  const customStyles = {
    content: {
      display: "none",
      position: "absolute",
      "z-index": "9999",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      "background-size": "contain",
      "background-repeat": "no-repeat no-repeat",
      "background-position": "center center",
      "background-color": "black",
    },
  };

  return (
    <Section
      id="about"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >
      <Container>
        <Box>
          <Title>
            <FormattedMessage
              id="app.pfm.title"
              defaultMessage="Personal Financial Planning, Made Simple."
            />
            <br />
          </Title>
          <SubText>
            <FormattedMessage
              id="app.pfm.details1"
              defaultMessage="Details 1"
            />
            <br />
            <br />
            <FormattedMessage
              id="app.pfm.details2"
              defaultMessage="Details 2"
            />
            <br />
            <br />
            <FormattedMessage
              id="app.pfm.details3"
              defaultMessage="Details 3"
            />
          </SubText>
          {
            // <SubTextLight>
            //   To reinvent the a Cross-Organizations user experience, that is:
            // </SubTextLight>
          }
        </Box>

        <Box>
          <ImgContainer>
            {context.locale.startsWith("ar") ? (
              <img
                id="img"
                src={homeImg_ar}
                alt="Leapro Platform"
                onClick={() => openFullscreen()}
              />
            ) : (
              <img
                id="img"
                src={homeImg}
                alt="Leapro Platform"
                onClick={() => openFullscreen()}
              />
            )}
          </ImgContainer>
        </Box>
        <div id="fullpage" style={customStyles}></div>
      </Container>
    </Section>
  );
};

export default About_Pfm;
