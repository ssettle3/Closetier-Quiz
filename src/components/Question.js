import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  text-transform: uppercase;
  font-size: 30px;
  letter-spacing: 10px;
`;

export function Question(props) {
  return <Wrapper>{props.question}</Wrapper>;
}

Question.propTypes = {
  question: PropTypes.string.isRequired
};
