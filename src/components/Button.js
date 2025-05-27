import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.blueMed};;;
  color: white;
  outline: none;
  border: none;

  font-size: ${(props) => props.theme.fontsm};
  padding: 0.9rem 2.3rem;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  font-size: 16px;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */
  width: max-content;

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
    border: 1px solid ${(props) => props.theme.blueMed};;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 100%;

    height: 100%;


    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const Button = ({ text, link, disabled }) => {
  return (
    <Btn disabled={disabled}>
      <a href={link} aria-label={text} target="_blank" rel="noreferrer" style={{ color: "white" ,   }} disabled={disabled}>
        {text}
      </a>
    </Btn>
  );
};

export default Button;
