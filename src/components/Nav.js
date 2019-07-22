import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Button } from "./common/Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

// const NAV_QUESTIONS_LIMIT = 5;

export function Nav({ currentStep, nextQuestion, goBack, submit }) {
  const isFirstStep = () => currentStep === 1;
  // const isLastStep = () => currentStep === NAV_QUESTIONS_LIMIT;
  const showBack = () => !isFirstStep();
  // const showNext = () => !isLastStep();

  return (
    <Wrapper>
      {showBack() && <Button type="back" onClick={goBack} text="<" />}
      {/* {showNext() && <Button onClick={nextQuestion} text="Next" />} */}
    </Wrapper>
  );
}

Nav.propTypes = {
  currentStep: PropTypes.number.isRequired,
  goBack: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func,
  submit: PropTypes.func.isRequired
};
