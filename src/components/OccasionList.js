import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const ChoicesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Choice = styled.div`
  align-items: center;
  background-color: lightgray;
  border: ${props => (props.selected ? "1px solid black" : "none")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 80px;
  margin: 30px;
  width: 80px;
`;

const OccasionListMap = {
  work: ["work1", "work2", "work3", "work4"],
  day: ["day1", "day2", "day3", "day4"],
  play: ["play1", "play2", "play3", "play4"]
};

const key = "occasionType";

export function OccasionList(props) {
  const selectedChoices = OccasionListMap[props.occasion.toLowerCase()];

  return (
    <Wrapper>
      {props.occasion}
      <ChoicesWrapper>
        {selectedChoices.map(choice => (
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

OccasionList.propTypes = {
  occasion: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};
