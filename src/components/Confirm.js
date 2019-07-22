import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Question } from "./Question";
import { Button } from "./common/Button";

import { Image } from "../images/Image";
import ending from "../images/ending.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Greeting = styled.div`
  font-style: italic;
  font-weight: bold;
`;

const ImageWrapper = styled.div`
  border-radius: 100%;
  height: 390px;
  overflow: hidden;
  margin-bottom: 30px;

  @media only screen and (max-width: 600px) {
    padding: 15px;
  }
`;

export function Confirm({ name }) {
  return (
    <Wrapper>
      <Greeting>
        Hey {name}, thank you for taking the Closetier Style Quiz!
      </Greeting>
      <Question question="Ready to see what you're wearing?" />
      <ImageWrapper>
        <Image src={ending} />
      </ImageWrapper>
      <Button text="Let's Go!" />
    </Wrapper>
  );
}

Confirm.defaultProps = {
  name: "Fucker"
};

Confirm.propTypes = {
  name: PropTypes.string.isRequired
};
