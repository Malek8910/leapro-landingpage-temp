import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useWindowScroll } from "react-use";
import styled from "styled-components";

const Up = styled.div`
  width: 3rem;
  height: 3rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.text};
  /* background-color: ${(props) => props.theme.body}; */
  background-color: #0F56C8;

  /* font-size: ${(props) => props.theme.fontxl}; */
  font-size: xx-large;
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.2);
    color: #009ad7;

  }

  &:active {
    transform: scale(0.9);
    color: #009ad7;

  }
`;


const Icon = styled.i`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 25px;  /* Preferred icon size */
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

  color: white;

`;

const ScrollToTop = () => {
  const ref = useRef(null);
  const { y } = useWindowScroll();

  const scrollToTop = () => {
    // let element = document.getElementById("top");

    // element.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    if (y > 200) {
      ref.current.style.display = "flex";
    } else {
      ref.current.style.display = "none";
    }
  }, [y]);
  return (
    <Up ref={ref} onClick={() => scrollToTop()}>
      <Icon>arrow_upward</Icon>


    </Up>
  );
};

export default ScrollToTop;
