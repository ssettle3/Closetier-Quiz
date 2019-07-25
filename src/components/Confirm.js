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
  text-align: center;
  font-family: "Montserrat", sans-serif;
  margin-top: 30px;
`;

const ImageWrapper = styled.div`
  border-radius: 100%;
  height: 350px;
  width: 350px;
  overflow: hidden;
  margin-bottom: 30px;

  img {
    width: 350px;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

export function Confirm({ name }) {
  return (
    <Wrapper>
      <Greeting>
        Hey <BoldText>{name}</BoldText>, thank you for taking the Closetier
        Style Quiz!
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
