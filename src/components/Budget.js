import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Question } from "./Question";
import { Button } from "./common/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BudgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const budgetItems = ["$75 - $99", "$100 - $124", "No Budget!"];

export function Budget({ currentSelection, onSelect }) {
  return (
    <Wrapper>
      <Question question="What’s your outfit budget?" />
      <BudgetWrapper>
        {budgetItems.map(item => (
          <Button
            selected={currentSelection === item}
            key={item}
            text={item}
            onClick={() => onSelect("budget", item)}
            margin="20px 0 0 0"
          />
        ))}
      </BudgetWrapper>
    </Wrapper>
  );
}

Budget.propTypes = {
  currentSelection: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};
