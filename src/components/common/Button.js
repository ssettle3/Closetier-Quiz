import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Image } from "../../images/Image";
import back from "../../images/back.png";

const StyledButton = styled.button`
  align-items: center;
  background: ${props => (props.selected ? "black" : "#ffe8e2")};
  border-radius: 2px;
  border: 1px solid #ffe8e2;
  cursor: pointer;
  color: ${props => (props.selected ? "white" : "black")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${props => (props.margin ? props.margin : "none")};
  margin-right: 5px;
  padding: 10px;
  width: 150px;
  letter-spacing: 3px;
  text-transform: uppercase;

  &:active,
  &:focus {
    border: 1px solid #ffe8e2;
    outline: none;
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
`;

export function Button({ onClick, text, currentSelection, margin, type }) {
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
  type: "default"
};

Button.propTypes = {
  currentSelection: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.string
};
