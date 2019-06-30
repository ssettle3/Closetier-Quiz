import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Question } from "./Question";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Choice = styled.div`
  align-items: center;
  background-color: yellow;
  border: ${props => (props.selected ? "1px solid black" : "none")};
  cursor: pointer;
  display: flex;
  height: 80px;
  justify-content: center;
  margin: 20px;
  width: 80px;
`;

const ChoicesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const choices = ["Work", "Day", "Play"];
const question = "What occasion of outfit are you looking for?";
const key = "occasion";

export function Occasion(props) {
  return (
    <Wrapper>
      <Question question={question} />
      <ChoicesWrapper>
        {choices.map(choice => (
          <Choice
            key={choice}
            onClick={() => props.onSelect(key, choice)}
            selected={props.currentSelection === choice}
          >
            {choice}
          </Choice>
        ))}
      </ChoicesWrapper>
    </Wrapper>
  );
}

Occasion.propTypes = {
  currentSelection: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};
