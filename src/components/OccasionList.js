import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Question } from "./Question";
import { Button } from "./common/Button";

import brunch from "../images/brunch.jpg";
import casual from "../images/casual.png";
import datenight from "../images/datenight.jpg";
import girlsnight from "../images/girlsnight.jpg";
import hanging from "../images/hangingout.jpg";
import play from "../images/play.jpg";
import polished from "../images/polished.png";
import shopping from "../images/shopping.jpg";
import totallychill from "../images/totallychill.jpg";

import { Image } from "../images/Image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChoicesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Choice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 20px;

  img {
    width: 250px;
  }
`;

const SubHeaderMap = {
  work: "What's your workplace like?",
  day: "Where are you headed?",
  play: "What's the game plan?"
};

const OccasionListMap = {
  work: [
    { name: "polished", component: <Image src={polished} /> },
    { name: "casual-chic", component: <Image src={casual} /> },
    { name: "totally chill", component: <Image src={totallychill} /> }
  ],
  day: [
    { name: "brunch", component: <Image src={brunch} /> },
    { name: "shopping", component: <Image src={shopping} /> },
    { name: "hanging out", component: <Image src={hanging} /> }
  ],
  play: [
    { name: "date night", component: <Image src={datenight} /> },
    { name: "girls night", component: <Image src={girlsnight} /> },
    { name: "party night", component: <Image src={play} /> }
  ]
};

const key = "occasionType";

export function OccasionList(props) {
  const selectedChoices = OccasionListMap[props.occasion.toLowerCase()];

  return (
    <Wrapper>
      <Question question={SubHeaderMap[props.occasion]} />
      <ChoicesWrapper>
        {selectedChoices.map(choice => (
          <Choice
            key={choice.name}
            onClick={() => props.onSelect(key, choice.name)}
            selected={props.currentSelection === choice.name}
          >
            {choice.component}
            <Button
              currentSelection={props.currentSelection}
              selected={props.currentSelection === choice}
              margin={"-10px 0 0 0"}
              text={choice.name}
            />
          </Choice>
        ))}
      </ChoicesWrapper>
    </Wrapper>
  );
}

OccasionList.propTypes = {
  currentSelection: PropTypes.string,
  occasion: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};
