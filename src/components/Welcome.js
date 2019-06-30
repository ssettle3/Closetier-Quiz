import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  margin: 50px 400px;
  font-size: 25px;
  line-height: 35px;
`;

const Header = styled.div`
  font-size: 30px;
`;

export function Welcome() {
  return (
    <Wrapper>
      <Header>New Outfit?</Header>
      <Text>
        Wherever you are headed, we have you covered. New outfits weekly, no
        subscriptions, one-client to buy!
      </Text>
      <Link to="/quiz/questions">
        <button>Start Quiz</button>
      </Link>
    </Wrapper>
  );
}
