import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Back } from "../components/Back";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const NAV_QUESTIONS_LIMIT = 6;

export function Nav({ currentStep, nextQuestion, goBack, submit }) {
  const isFirstStep = () => currentStep === 1;
  const isLastStep = () => currentStep === NAV_QUESTIONS_LIMIT;
  const showBack = () => !isFirstStep();
  const showNext = () => !isLastStep();

  return (
    <Wrapper>
      {showBack() && <Back onClick={goBack} />}
      {showNext() && <button onClick={nextQuestion}>Next</button>}
    </Wrapper>
  );
}

Nav.propTypes = {
  currentStep: PropTypes.number.isRequired,
  goBack: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};
