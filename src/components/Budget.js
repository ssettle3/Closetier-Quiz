import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  font-size: 15px;
  margin-bottom: 15px;
`;

const BudgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  background-color: ${props => (props.selected ? "orange" : "none")};
  border: 1px solid black;
  cursor: pointer;
  margin-bottom: 15px;
  padding: 20px;
`;

const budgetItems = ["$50 - $75", "$75 - $100", "$100 - $150"];

export function Budget({ currentSelection, onSelect }) {
  return (
    <Wrapper>
      <Header>What’s your outfit budget?</Header>
      <BudgetWrapper>
        {budgetItems.map(item => (
          <Item
            selected={currentSelection === item}
            key={item}
            onClick={() => onSelect("budget", item)}
          >
            {item}
          </Item>
        ))}
      </BudgetWrapper>
    </Wrapper>
  );
}

Budget.propTypes = {
  currentSelection: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};
