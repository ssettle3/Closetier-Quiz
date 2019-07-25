import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button } from "./common/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Text = styled.div`
  margin: 50px 400px;
  font-size: 15px;
  line-height: 35px;
  font-style: italic;

  @media only screen and (max-width: 600px) {
    margin: 50px;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const Header = styled.div`
  font-size: 30px;
  margin-top: 60px;
  text-transform: uppercase;
  letter-spacing: 10px;
`;

export function Welcome() {
  return (
    <Wrapper>
      <Header>Ready to find your next outfit?</Header>
      <Text>
        find out with the <BoldText>Closetier Style Quiz</BoldText> and get
        matched with outfits for <BoldText>work, day, play</BoldText>
      </Text>
      <Link to="/quiz/questions">
        <Button text="Style Me" />
      </Link>
    </Wrapper>
  );
}
