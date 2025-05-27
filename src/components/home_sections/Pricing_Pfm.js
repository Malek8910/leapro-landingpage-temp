import React, { useEffect } from "react";
import styled from "styled-components";

import img1 from "../../assets/greate_ux.png";
import img2 from "../../assets/secure.png";
import Modal from "react-modal";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
import { useIntl } from "react-intl";
import axios from "axios";
import useId from "react-use-uuid";

const Section = styled.section`
  /* min-height: 100vh; */
  /* min-height: 110vh; */
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  direction: ${(props) => props.direction};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;

  color: ${(props) => props.theme.text};
  /* align-self: flex-start; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
  text-align: center;
  /* width: 80%; */
  /* color: #002856; */

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 85%;
  margin: 2rem auto;

  display: flex;
  /* justify-content: space-between; */
  justify-content: center;

  align-content: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
  margin-bottom: 5em;
`;

const Item = styled.div`
  width: calc(22rem - 0vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 1rem 2rem;
  position: relative;

  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
  transition: all 0.3s ease;

  background-color: #f5f5f5;
  text-align: -webkit-center;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const ImageContainer = styled.div`
  /* width: 50%; */
  margin: 0 auto;
  /* background-color: ${(props) => props.theme.carouselColor}; */
  background-color: #f5f5f5;

  /* border: 1px solid ${(props) => props.theme.text}; */
  padding: 1rem;

  /* border-radius: 20px; */

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

const ItemTitle = styled.h1`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  /* font-weight: 600; */

  color: ${(props) => props.theme.text};
  /* align-self: flex-start; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
  text-align: center;
  /* width: 80%; */
  /* color: #002856; */

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontlg};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const Name = styled.h3`
  /* font-size: ${(props) => props.theme.fontsm}; */
  font-size: ${(props) => props.theme.fontxl};

  display: flex;
  align-items: center;
  justify-content: center;
  /* text-transform: uppercase; */
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
  text-align: -webkit-center;
  min-height: 40px;
  /* color: #019cde; */
`;

const Name1 = styled.h3`
  /* font-size: ${(props) => props.theme.fontsm}; */

  display: flex;
  align-items: center;
  justify-content: center;
  /* text-transform: uppercase; */
  color: ${(props) => props.theme.text};
  text-align: -webkit-center;
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 400;
`;

const Name2 = styled.h3`
  /* font-size: ${(props) => props.theme.fontsm}; */

  display: flex;
  align-items: center;
  justify-content: center;
  /* text-transform: uppercase; */
  color: ${(props) => props.theme.text};
  text-align: -webkit-center;
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 550;

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Position = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-transform: capitalize; */
  color: rgba(${(props) => props.theme.textRgba}, 0.9);
  font-weight: 550;
  padding: 0.8rem 0.8rem;
  text-align: center;
`;

const Btn = styled.button`
  display: inline-block;
  background-color: #019cde;
  color: white;
  outline: none;
  border: none;

  font-size: ${(props) => props.theme.fontmd};
  font-weight: 550;

  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: "  ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    /* border: 2px solid ${(props) => props.theme.text}; */
    border: 2px solid #ff540a;

    width: 100%;

    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "2rem 0",
    // margin: "1rem 2rem",

    border: "2px solid black",
    "border-radius": "20px",
    transition: "all 0.3s ease",
    "background-color": "#f5f5f5",
  },
};

const ModalContainer = styled.div`
  /* padding: 1rem 0; */
  /* margin: 1rem 2rem; */
  position: relative;

  /* border: 2px solid ${(props) => props.theme.text}; */
  border-radius: 20px;
  transition: all 0.3s ease;

  background-color: #f5f5f5;
  /* text-align: -webkit-center; */
  text-align: -webkit-center;

  direction: ${(props) => props.direction};
  ${console.log("direction1:")}
  ${(props) => {
    //console.log("direction1:");
    //console.log(props.direction);
  }}

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.text};
  margin: 1rem auto;
  width: 80%;
  font-weight: 400;
  align-self: flex-start;

  direction: ${(props) => props.direction};

  @media (max-width: 64em) {
    /* width: 100%; */
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    /* text-align: center; */
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontsm};
  color: rgba(${(props) => props.theme.textRgba}, 0.6);
  margin-top: 1rem;
  width: 80%;
  font-weight: 400;
  align-self: flex-start;

  @media (max-width: 75em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
    width: 100%;
    text-align: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const ToolTip = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  text-align: ${(props) => (props.direction === "rtl" ? "right" : "left")};

  span {
    font-size: ${(props) => props.theme.fontsm};
    font-weight: 300;
    color: ${(props) => props.theme.body};
    visibility: hidden;
    width: 200px;
    background-color: #555;

    text-align: ${(props) => (props.direction === "rtl" ? "right" : "left")};

    /* ${(props) => console.log(props.direction)} */
    /* text-align: center; */
    border-radius: 6px;
    padding: 10px 10px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    right: -900%;
    /* left: 50%; */
    /* margin-left: -60px; */
    opacity: 0;
    transition: opacity 0.3s;
  }

  scroll-padding-inline-end::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -15px;
    border-width: 15px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

const Pricing_Pfm = (props) => {
  const intl = useIntl();
  const errorMsg = intl.formatMessage({
    id: "app.pricing_pfm.form.dettailsEmailError",
  });

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [userUUID, setUserUUID] = React.useState(() => {
    // getting stored value
    const saved = localStorage.getItem("userUUID");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  let axiosEnabled = false;
  const id = useId();

  useEffect(() => {
    //const userUUIDVaIe = JSON.parse(localStorage.getItem("userUUID"));
    if (userUUID === "") {
      //if found in localstorage load it
      ///setUserUUID(userUUIDVaIe);
      //} else {
      //if not found save

      setUserUUID(id);
      localStorage.setItem("userUUID", JSON.stringify(id));
    }
    // console.log(userUUID);
    if (userUUID !== "") {
      sendTrigger(userUUID);
    } else
      sendTrigger("userUUID");
  }, [userUUID]);

  const sendTrigger = async () => {
    //=========== semding trigger
    let doc = {
      document: {
        userId: userUUID,
        type: "PfmVisited",
        local: context.locale,
      },
    };

    //setIsLoading(true);

    try {
      let { data } = "";

      if (axiosEnabled === true) {
        data = await axios.post(
          "https://landingpage-triggers.azurewebsites.net/api/landingpage-triggers?code=dDJ-cf4giE8k9C0HSuxsgT4Q4mgux1XMVwcOJ2Y-MdHRAzFuSTTdjQ%3D%3D",
          doc,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
      }

      //console.log("reponse data is: ", JSON.stringify(data, null, 4));

      //setData(data);
    } catch (err) {
      //setErr(err.message);
      //console.log("error message is: ", JSON.stringify(err.message, null, 4));
    } finally {
      //setIsLoading(false);
    }
    //===========
  };

  // const openModal = (number) => {
  //   //console.log(number);
  //   setIsOpen(true);
  //   //semding trigger
  //   ..
  // };

  const openModal = async (number) => {
    //console.log(number);
    setIsOpen(true);

    //=========== semding trigger
    let doc = {};
    if (number === basicPlan)
      doc = {
        document: {
          userId: userUUID,
          type: "BasicButtonClicked",
          local: context.locale,
        },
      };
    else
      doc = {
        document: {
          userId: userUUID,
          type: "AdvancedButtonClicked",
          local: context.locale,
        },
      };

    //setIsLoading(true);
    try {
      let { data } = "";

      if (axiosEnabled === true) {
        data = await axios.post(
          "https://landingpage-triggers.azurewebsites.net/api/landingpage-triggers?code=dDJ-cf4giE8k9C0HSuxsgT4Q4mgux1XMVwcOJ2Y-MdHRAzFuSTTdjQ%3D%3D",
          doc,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
      }

      //console.log("reponse data is: ", JSON.stringify(data, null, 4));

      //setData(data);
    } catch (err) {
      //setErr(err.message);
      //console.log("error message is: ", JSON.stringify(err.message, null, 4));
    } finally {
      //setIsLoading(false);
    }
    //===========
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const inputRef = React.useRef(null);

  const [updated, setUpdated] = React.useState("");

  const handleClick = async () => {
    //  "inputRef.current.value" is input value
    // console.log(inputRef.current.value);
    if (!isValidEmail(inputRef.current.value)) {
      setError(errorMsg);
    } else {
      setError(null);
      setUpdated(inputRef.current.value);

      //console.log(updated);
      closeModal();

      //=========== semding trigger
      let doc = {
        document: {
          userId: userUUID,
          type: "EmailSubmited",
          email: inputRef.current.value,
          local: context.locale,
        },
      };

      //setIsLoading(true);

      try {
        let { data } = "";

        if (axiosEnabled === true) {
          data = await axios.post(
            "https://landingpage-triggers.azurewebsites.net/api/landingpage-triggers?code=dDJ-cf4giE8k9C0HSuxsgT4Q4mgux1XMVwcOJ2Y-MdHRAzFuSTTdjQ%3D%3D",
            doc,
            {
              headers: {
                Accept: "application/json",
              },
            }
          );
        }

        //("reponse data is: ", JSON.stringify(data, null, 4));

        //setData(data);
      } catch (err) {
        //setErr(err.message);
        //console.log("error message is: ", JSON.stringify(err.message, null, 4));
      } finally {
        //setIsLoading(false);
      }
      //===========
    }
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const context = React.useContext(Context);
  //console.log(context.locale);

  const MemberComponent = ({
    number,
    img,
    name = " ",
    name1 = " ",

    position1 = " ",
    position2 = " ",
    position3 = " ",
    position4 = " ",
    position5 = " ",
    position6 = " ",
    position7 = " ",
    position8 = " ",
  }) => {
    return (
      <Item>
        <ImageContainer>
          <ItemTitle>{number} </ItemTitle>
        </ImageContainer>
        <Name>{name}</Name>
        <Name1>{name1}</Name1>
        <br></br>
        <br></br>
        <Position>
          {position1}
          {number === basicPlan ? (
            <span>
              &nbsp;&nbsp;
              <ToolTip
                direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
              >
                &#9432;{" "}
                <span>
                  <FormattedMessage
                    id="app.pricing_pfm.form.tooltip"
                    defaultMessage="networth Tooltip"
                  />
                </span>
              </ToolTip>
            </span>
          ) : (
            ""
          )}
        </Position>
        <Position>{position2}</Position>
        <Position>{position3}</Position>
        <Position>{position4}</Position>
        <Position>{position5}</Position>
        <Position>{position6}</Position>
        <Position>{position7}</Position>
        <Position>{position8}</Position>
        <br></br>
        <ImageContainer>
          <Btn text="Send" onClick={() => openModal(number)}>
            <FormattedMessage
              id="app.pricing_pfm.subButton"
              defaultMessage="Subscribe"
            />
            <br />
          </Btn>
          <SubTextLight>
            <FormattedMessage
              id="app.pricing_pfm.subButton1"
              defaultMessage="no cc"
            />
          </SubTextLight>
          <ModalContainer
            direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
          >
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <Name2>
                <FormattedMessage
                  id="app.pricing_pfm.form.title"
                  defaultMessage="Thank You"
                />
              </Name2>
              <br />
              <SubText
                direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
              >
                <FormattedMessage
                  id="app.pricing_pfm.form.dettails1"
                  defaultMessage="Details 1"
                />
                <br /> <br />
                <FormattedMessage
                  id="app.pricing_pfm.form.dettails2"
                  defaultMessage="Details 2"
                />
              </SubText>
              <ModalContainer>
                <div>
                  <input
                    ref={inputRef}
                    type="text"
                    id="message"
                    name="message"
                    placeholder="a@b.com"
                  />{" "}
                  <br></br>
                  {error && <span style={{ color: "red" }}>{error}</span>}
                  <span>&nbsp;</span>
                </div>
                <Btn text="Send" onClick={() => handleClick()}>
                  <FormattedMessage
                    id="app.pricing_pfm.form.dettailsSendButton"
                    defaultMessage="Send"
                  />
                </Btn>
              </ModalContainer>
            </Modal>
          </ModalContainer>
        </ImageContainer>
      </Item>
    );
  };

  const basicPlan = intl.formatMessage({ id: "app.pricing_pfm.basicPlan" });
  const basicPlanPrice = intl.formatMessage({
    id: "app.pricing_pfm.basicPlanPrice",
  });
  const basicPlanPrice1 = intl.formatMessage({
    id: "app.pricing_pfm.basicPlanPrice1",
  });
  const basicPlanItem1 = intl.formatMessage({
    id: "app.pricing_pfm.basicPlanItem1",
  });
  const basicPlanItem2 = intl.formatMessage({
    id: "app.pricing_pfm.basicPlanItem2",
  });
  const basicPlanItem3 = intl.formatMessage({
    id: "app.pricing_pfm.basicPlanItem3",
  });
  const basicPlanItem4 = intl.formatMessage({
    id: "app.pricing_pfm.basicPlanItem4",
  });
  const basicPlanItem5 = intl.formatMessage({
    id: "app.pricing_pfm.basicPlanItem5",
  });
  const basicPlanItem6 = intl.formatMessage({
    id: "app.pricing_pfm.basicPlanItem6",
  });
  const basicPlanItem7 = intl.formatMessage({
    id: "app.pricing_pfm.basicPlanItem7",
  });

  const advancedPlan = intl.formatMessage({
    id: "app.pricing_pfm.advancedPlan",
  });
  const advancedPlanPrice = intl.formatMessage({
    id: "app.pricing_pfm.advancedPlanPrice",
  });
  const advancedPlanPrice1 = intl.formatMessage({
    id: "app.pricing_pfm.advancedPlanPrice1",
  });
  const advancedPlanItem1 = intl.formatMessage({
    id: "app.pricing_pfm.advancedPlanItem1",
  });
  const advancedPlanItem2 = intl.formatMessage({
    id: "app.pricing_pfm.advancedPlanItem2",
  });
  const advancedPlanItem3 = intl.formatMessage({
    id: "app.pricing_pfm.advancedPlanItem3",
  });
  const advancedPlanItem4 = intl.formatMessage({
    id: "app.pricing_pfm.advancedPlanItem4",
  });
  const advancedPlanItem5 = intl.formatMessage({
    id: "app.pricing_pfm.advancedPlanItem5",
  });
  const advancedPlanItem6 = intl.formatMessage({
    id: "app.pricing_pfm.advancedPlanItem6",
  });
  const advancedPlanItem7 = intl.formatMessage({
    id: "app.pricing_pfm.advancedPlanItem7",
  });

  return (
    <Section
      id="team"
      direction={context.locale.startsWith("ar") ? "rtl" : "ltr"}
    >
      <Title>
        <FormattedMessage
          id="app.pricing_pfm.pricing"
          defaultMessage="Pricing"
        />{" "}
      </Title>
      <Container>
        <MemberComponent
          img={img1}
          number={basicPlan}
          name={basicPlanPrice}
          name1={basicPlanPrice1}
          position1={basicPlanItem1}
          position2={basicPlanItem2}
          position3={basicPlanItem3}
          position4={basicPlanItem4}
          position5={basicPlanItem5}
          position6={basicPlanItem6}
          position7={basicPlanItem7}
        />
        <MemberComponent
          img={img2}
          number={advancedPlan}
          name={advancedPlanPrice}
          name1={advancedPlanPrice1}
          position1={advancedPlanItem1}
          position2={advancedPlanItem2}
          position3={advancedPlanItem3}
          position4={advancedPlanItem4}
          position5={advancedPlanItem5}
          position6={advancedPlanItem6}
          position7={advancedPlanItem7}
        />
      </Container>
    </Section>
  );
};

export default Pricing_Pfm;
