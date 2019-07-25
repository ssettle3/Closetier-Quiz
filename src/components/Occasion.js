import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Question } from "./Question";

import { Button } from "./common/Button";

import day from "../images/day.png";
import work from "../images/work.png";
import play from "../images/play.png";

import { Image } from "../images/Image";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const occasionComponents = {
  work: <Image src={work} />,
  day: <Image src={day} />,
  play: <Image src={play} />
};

const Choice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 20px;

  img {
    width: 300px;
  }
`;

const ChoicesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const choices = ["work", "day", "play"];
const question = "What's the occasion?";
const key = "occasion";

export function Occasion(props) {
  const handleClick = (key, choice) => {
    props.onSelect(key, choice);
  };

  return (
    <Wrapper>
      <Question question={question} />
      <ChoicesWrapper>
        {choices.map(choice => (
          <Choice key={choice} onClick={() => handleClick(key, choice)}>
            {occasionComponents[choice]}
            <Button
              currentSelection={props.currentSelection}
              selected={props.currentSelection === choice}
              margin={"-10px 0 0 0"}
              text={choice}
            />
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
