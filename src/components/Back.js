import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function Back(props) {
  return (
    <Wrapper>
      <button onClick={props.onClick}>Back</button>
    </Wrapper>
  );
}

Back.propTypes = {
  onClick: PropTypes.func.isRequired
};
