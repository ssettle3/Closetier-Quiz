import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Image } from "../../images/Image";
import back from "../../images/back.png";

const StyledButton = styled.button`
  align-items: center;
  background: ${props => (props.selected ? "#ffe8e2" : "black")};
  border-radius: 2px;
  border: ${props =>
    props.selected ? "1px solid #ffe8e2" : "1px solid black;"};
  cursor: pointer;
  font-size: 15px;
  color: ${props => (props.selected ? "black" : "white")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${props => (props.margin ? props.margin : "none")};
  margin-right: 5px;
  padding: 9px;
  width: 170px;
  letter-spacing: 3px;
  text-transform: uppercase;

  &:active,
  &:focus {
    border: 1px solid #ffe8e2;
    outline: none;
  }

  &:disabled {
    background: lightgray;
    border: 1px solid lightgray;
  }
`;

const BackButton = styled.div`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 50%;

  img {
    width: 40px;
  }

  @media only screen and (max-width: 600px) {
    position: fixed;
    left: 0;
    top: 50%;
  }
`;

export function Button({
  onClick,
  text,
  currentSelection,
  margin,
  type,
  isDisabled
}) {
  return (
    <Fragment>
      {type === "back" && (
        <BackButton onClick={onClick}>
          <Image src={back} />
        </BackButton>
      )}
      {type === "default" && (
        <StyledButton
          margin={margin}
          disabled={isDisabled}
          selected={currentSelection === text}
          onClick={onClick}
        >
          {text}
        </StyledButton>
      )}
    </Fragment>
  );
}

Button.defaultProps = {
  selected: false,
  type: "default",
  isDisabled: false
};

Button.propTypes = {
  currentSelection: PropTypes.string,
  margin: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.string
};
